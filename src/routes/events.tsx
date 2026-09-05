import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

import { Reveal, SplitWords } from "@/components/fx/motion-primitives";
import eventsData from "@/data/events.json";

type EventItem = {
  id: number;
  year?: string;
  name: string;
  overview: string;
  date: string;
  images?: string[];
};

const allEvents = eventsData as unknown as EventItem[];

const CATEGORIES = [
  { id: "all", label: "All Events" },
  { id: "competitions", label: "Competitions & Hackathons" },
  { id: "workshops", label: "Workshops & Tech" },
  { id: "community", label: "Social & Community" },
  { id: "career", label: "Career & Academic" },
] as const;

function getEventCategory(name: string, overview: string): string {
  const text = `${name} ${overview}`.toLowerCase();
  if (text.includes("bruteforge") || text.includes("competition") || text.includes("forge")) {
    return "competitions";
  }
  if (text.includes("workshop") || text.includes("ai") || text.includes("techroom") || text.includes("training")) {
    return "workshops";
  }
  if (text.includes("nss") || text.includes("plantation") || text.includes("cleanliness") || text.includes("school") || text.includes("teacher")) {
    return "community";
  }
  return "career";
}

const title = "Events & Initiatives — ITSA PCCoE Pune";
const description =
  "Every ITSA event at PCCoE Pune: BRUTEFORGE, AI expert sessions, higher-studies guidance, NSS drives and more.";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Events,
});

type ActiveLightbox = {
  eventName: string;
  images: string[];
  currentIndex: number;
};

function Events() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // Year dropdown states: both open by default
  const [open2026_27, setOpen2026_27] = useState(true);
  const [open2025_26, setOpen2025_26] = useState(true);

  // Lightbox modal state for expandable images
  const [activeLightbox, setActiveLightbox] = useState<ActiveLightbox | null>(null);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeLightbox) return;
      if (e.key === "Escape") {
        setActiveLightbox(null);
      } else if (e.key === "ArrowLeft") {
        setActiveLightbox((prev) =>
          prev
            ? {
                ...prev,
                currentIndex:
                  (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
              }
            : null
        );
      } else if (e.key === "ArrowRight") {
        setActiveLightbox((prev) =>
          prev
            ? {
                ...prev,
                currentIndex: (prev.currentIndex + 1) % prev.images.length,
              }
            : null
        );
      }
    };
    if (activeLightbox) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeLightbox]);

  const filteredEvents = useMemo(() => {
    return allEvents.filter((e) => {
      const cat = getEventCategory(e.name, e.overview);
      const matchesCat = selectedCategory === "all" || cat === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        e.name.toLowerCase().includes(query) ||
        e.overview.toLowerCase().includes(query) ||
        e.date.toLowerCase().includes(query);
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const events2026_27 = useMemo(() => {
    return filteredEvents.filter((e) => e.year === "2026-27");
  }, [filteredEvents]);

  const events2025_26 = useMemo(() => {
    return filteredEvents.filter((e) => !e.year || e.year === "2025-26");
  }, [filteredEvents]);

  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          PAGE HEADER
          ════════════════════════════════════════════════════════════ */}
      <header className="relative overflow-hidden border-b border-foreground/20 px-5 pb-12 pt-28 sm:px-8 sm:pb-16 sm:pt-36">
        <div aria-hidden className="grid-paper pointer-events-none absolute inset-0 opacity-40" />

        <div className="relative mx-auto max-w-[1600px]">
          {/* Live Badge & Category Tag */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              ITSA Activity Log
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Tenure Archives
            </span>
          </div>

          {/* Impactful Masthead Title */}
          <SplitWords
            as="h1"
            text="Where Code Meets Community."
            className="mt-6 max-w-[16ch] display-lg"
          />

          {/* Meaningful Description */}
          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            A comprehensive record of technical hackathons, AI workshops, career guidance, and community initiatives driven by the Information Technology Students&apos; Association.
          </p>

          {/* Real-World Metrics Grid */}
          <div className="mt-10 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
            <div className="bg-background px-5 py-4">
              <p className="label-mono text-[10px]">Documented Events</p>
              <p className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-foreground">
                {allEvents.length}+
              </p>
              <p className="mt-1 font-mono text-[10px] text-muted-foreground">Competitions & drives</p>
            </div>
            <div className="bg-background px-5 py-4">
              <p className="label-mono text-[10px]">Active Wings</p>
              <p className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-foreground">
                06
              </p>
              <p className="mt-1 font-mono text-[10px] text-muted-foreground">IEEE · MLSC · GDGC · NSS</p>
            </div>
            <div className="bg-background px-5 py-4">
              <p className="label-mono text-[10px]">Student Reach</p>
              <p className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-primary">
                500+
              </p>
              <p className="mt-1 font-mono text-[10px] text-muted-foreground">Participants engaged</p>
            </div>
            <div className="bg-background px-5 py-4">
              <p className="label-mono text-[10px]">Department</p>
              <p className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-foreground">
                IT · PCCoE
              </p>
              <p className="mt-1 font-mono text-[10px] text-muted-foreground">Pune, Maharashtra</p>
            </div>
          </div>

          {/* Interactive Search & Filter Controls */}
          <div className="mt-10 space-y-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  const count =
                    cat.id === "all"
                      ? allEvents.length
                      : allEvents.filter((e) => getEventCategory(e.name, e.overview) === cat.id).length;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-all ${
                        isActive
                          ? "bg-foreground text-background shadow-sm"
                          : "border border-border bg-surface text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`rounded-full px-1.5 py-0.2 text-[9px] ${
                          isActive
                            ? "bg-background/20 text-background"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Real-time Search Input */}
              <div className="relative w-full md:w-72">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search events..."
                  className="w-full border border-border bg-surface px-3.5 py-2 pr-8 font-mono text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                />
                {searchQuery ? (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 font-mono text-xs text-muted-foreground hover:text-foreground"
                  >
                    ×
                  </button>
                ) : null}
              </div>
            </div>

            {/* Results count banner */}
            <div className="flex items-center justify-between border-t border-border pt-3 font-mono text-[11px] text-muted-foreground">
              <p>
                Showing <span className="font-bold text-foreground">{filteredEvents.length}</span> of{" "}
                <span className="font-bold text-foreground">{allEvents.length}</span> events
              </p>
              {(selectedCategory !== "all" || searchQuery) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="text-primary hover:underline"
                >
                  Reset filters
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ════════════════════════════════════════════════════════════
          TENURE SECTIONS ACCORDION (2026–27 above 2025–26)
          ════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1600px] px-5 py-12 sm:px-8">
        <div className="space-y-12">
          {/* ──────────────────────────────────────────────────────────
              DROPDOWN SECTION: TENURE 2026–27 (Placed Above)
              ────────────────────────────────────────────────────────── */}
          <div className="border border-border bg-surface overflow-hidden">
            <button
              type="button"
              onClick={() => setOpen2026_27((v) => !v)}
              className="flex w-full items-center justify-between p-6 sm:p-8 text-left transition-colors hover:bg-surface-2"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                    Academic Year
                  </span>
                  <span className="rounded-full bg-primary/10 border border-primary/20 px-2 py-0.5 font-mono text-[10px] text-primary font-bold">
                    {events2026_27.length > 0 ? `${events2026_27.length} Events` : "Upcoming Tenure"}
                  </span>
                </div>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                  Tenure 2026–2027
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Upcoming events, national hackathons, Praxis 2026 and new technical initiatives.
                </p>
              </div>
              <span
                className={`grid size-10 place-items-center border border-border bg-background font-mono text-lg transition-transform duration-300 ${
                  open2026_27 ? "rotate-180" : ""
                }`}
              >
                ↓
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open2026_27 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden border-t border-border bg-background p-6 sm:p-10"
                >
                  {events2026_27.length === 0 ? (
                    <div className="flex flex-col items-center justify-center rounded border border-dashed border-border py-16 px-6 text-center">
                      <div className="size-12 rounded-full border border-primary/30 bg-primary/10 grid place-items-center font-mono text-primary text-base font-bold">
                        ✦
                      </div>
                      <h3 className="mt-4 font-display text-2xl font-bold text-foreground">
                        Tenure 2026–2027 In Preparation
                      </h3>
                      <p className="mt-2 max-w-md text-sm text-muted-foreground leading-relaxed">
                        Upcoming event logs, photographs, and overviews for the 2026–27 academic year will be documented here as they are conducted.
                      </p>
                      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                        <span className="rounded bg-surface px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground border border-border">
                          Praxis 2026
                        </span>
                        <span className="rounded bg-surface px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground border border-border">
                          BruteForge 2.0
                        </span>
                        <span className="rounded bg-surface px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground border border-border">
                          Techroom 3.0
                        </span>
                        <span className="rounded bg-surface px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground border border-border">
                          IEEE DevCon
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-20">
                      {events2026_27.map((e, i) => {
                        const flip = i % 2 === 1;
                        return (
                          <Reveal key={e.id}>
                            <article
                              className={`grid items-center gap-8 border-t border-foreground/20 pt-8 lg:grid-cols-2 ${
                                flip ? "lg:[&>figure]:order-2" : ""
                              }`}
                            >
                              <figure
                                onClick={() =>
                                  e.images && e.images.length > 0 &&
                                  setActiveLightbox({
                                    eventName: e.name,
                                    images: e.images,
                                    currentIndex: 0,
                                  })
                                }
                                className="group relative overflow-hidden rounded bg-surface-2 cursor-zoom-in border border-border"
                              >
                                {e.images?.[0] ? (
                                  <img
                                    src={e.images[0]}
                                    alt={e.name}
                                    loading="lazy"
                                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                  />
                                ) : (
                                  <div className="grid aspect-[16/10] w-full place-items-center font-display text-5xl font-extrabold text-outline">
                                    ITSA
                                  </div>
                                )}
                                <figcaption className="absolute bottom-0 left-0 bg-primary px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground">
                                  {e.date}
                                </figcaption>
                                {e.images && e.images.length > 0 && (
                                  <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-mono text-white opacity-0 transition-opacity backdrop-blur-sm group-hover:opacity-100">
                                    <svg className="size-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                    </svg>
                                    <span>Expand</span>
                                  </div>
                                )}
                              </figure>

                              <div className={flip ? "lg:pr-8" : "lg:pl-8"}>
                                <div className="flex items-center gap-3">
                                  <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                                    LOG {String(i + 1).padStart(2, "0")}
                                  </p>
                                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary">
                                    {getEventCategory(e.name, e.overview)}
                                  </span>
                                </div>
                                <SplitWords text={e.name} className="mt-3 display-md" />
                                <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                                  {e.overview}
                                </p>

                                {e.images && e.images.length > 1 ? (
                                  <div className="mt-6">
                                    <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                                      Gallery ({e.images.length} photos) — Click to expand
                                    </p>
                                    <div className="flex gap-2.5 overflow-x-auto pb-2">
                                      {e.images.map((src, si) => (
                                        <button
                                          key={`${e.id}-${si}`}
                                          type="button"
                                          onClick={() =>
                                            setActiveLightbox({
                                              eventName: e.name,
                                              images: e.images!,
                                              currentIndex: si,
                                            })
                                          }
                                          className="group relative size-20 shrink-0 overflow-hidden rounded border border-border cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary"
                                        >
                                          <img
                                            src={src}
                                            alt=""
                                            loading="lazy"
                                            className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
                                          />
                                          <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/25 flex items-center justify-center">
                                            <span className="text-white text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                                              +{si + 1}
                                            </span>
                                          </div>
                                        </button>
                                      ))}
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                            </article>
                          </Reveal>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ──────────────────────────────────────────────────────────
              DROPDOWN SECTION: TENURE 2025–26 (Placed Below)
              ────────────────────────────────────────────────────────── */}
          <div className="border border-border bg-surface overflow-hidden">
            <button
              type="button"
              onClick={() => setOpen2025_26((v) => !v)}
              className="flex w-full items-center justify-between p-6 sm:p-8 text-left transition-colors hover:bg-surface-2"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                    Academic Year
                  </span>
                  <span className="rounded-full bg-primary/10 border border-primary/20 px-2 py-0.5 font-mono text-[10px] text-primary font-bold">
                    {events2025_26.length} Events
                  </span>
                </div>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                  Tenure 2025–2026
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Competitions, expert workshops, NSS social drives and technical training.
                </p>
              </div>
              <span
                className={`grid size-10 place-items-center border border-border bg-background font-mono text-lg transition-transform duration-300 ${
                  open2025_26 ? "rotate-180" : ""
                }`}
              >
                ↓
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open2025_26 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden border-t border-border bg-background p-6 sm:p-10"
                >
                  {events2025_26.length === 0 ? (
                    <div className="py-12 text-center text-muted-foreground font-mono text-xs">
                      No events in 2025–26 match your search criteria.
                    </div>
                  ) : (
                    <div className="space-y-20">
                      {events2025_26.map((e, i) => {
                        const flip = i % 2 === 1;
                        return (
                          <Reveal key={e.id}>
                            <article
                              className={`grid items-center gap-8 border-t border-foreground/20 pt-8 lg:grid-cols-2 ${
                                flip ? "lg:[&>figure]:order-2" : ""
                              }`}
                            >
                              <figure
                                onClick={() =>
                                  e.images && e.images.length > 0 &&
                                  setActiveLightbox({
                                    eventName: e.name,
                                    images: e.images,
                                    currentIndex: 0,
                                  })
                                }
                                className="group relative overflow-hidden rounded bg-surface-2 cursor-zoom-in border border-border"
                              >
                                {e.images?.[0] ? (
                                  <img
                                    src={e.images[0]}
                                    alt={e.name}
                                    loading="lazy"
                                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                  />
                                ) : (
                                  <div className="grid aspect-[16/10] w-full place-items-center font-display text-5xl font-extrabold text-outline">
                                    ITSA
                                  </div>
                                )}
                                <figcaption className="absolute bottom-0 left-0 bg-primary px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground">
                                  {e.date}
                                </figcaption>
                                {e.images && e.images.length > 0 && (
                                  <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-mono text-white opacity-0 transition-opacity backdrop-blur-sm group-hover:opacity-100">
                                    <svg className="size-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                    </svg>
                                    <span>Expand</span>
                                  </div>
                                )}
                              </figure>

                              <div className={flip ? "lg:pr-8" : "lg:pl-8"}>
                                <div className="flex items-center gap-3">
                                  <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                                    LOG {String(i + 1).padStart(2, "0")}
                                  </p>
                                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary">
                                    {getEventCategory(e.name, e.overview)}
                                  </span>
                                </div>
                                <SplitWords text={e.name} className="mt-3 display-md" />
                                <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                                  {e.overview}
                                </p>

                                {e.images && e.images.length > 1 ? (
                                  <div className="mt-6">
                                    <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                                      Gallery ({e.images.length} photos) — Click to expand
                                    </p>
                                    <div className="flex gap-2.5 overflow-x-auto pb-2">
                                      {e.images.map((src, si) => (
                                        <button
                                          key={`${e.id}-${si}`}
                                          type="button"
                                          onClick={() =>
                                            setActiveLightbox({
                                              eventName: e.name,
                                              images: e.images!,
                                              currentIndex: si,
                                            })
                                          }
                                          className="group relative size-20 shrink-0 overflow-hidden rounded border border-border cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary"
                                        >
                                          <img
                                            src={src}
                                            alt=""
                                            loading="lazy"
                                            className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
                                          />
                                          <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/25 flex items-center justify-center">
                                            <span className="text-white text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                                              +{si + 1}
                                            </span>
                                          </div>
                                        </button>
                                      ))}
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                            </article>
                          </Reveal>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          LIGHTBOX / FULLSCREEN IMAGE MODAL
          ════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={() => setActiveLightbox(null)}
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-xl cursor-zoom-out select-none"
          >
            {/* Top Toolbar */}
            <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-30 pointer-events-none">
              <div className="flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md border border-white/15 pointer-events-auto">
                <span className="size-2 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-xs font-semibold text-white tracking-wide">
                  {activeLightbox.eventName}
                </span>
                <span className="text-white/40">|</span>
                <span className="font-mono text-xs text-white/70">
                  {activeLightbox.currentIndex + 1} / {activeLightbox.images.length}
                </span>
              </div>

              {/* Close button */}
              <button
                type="button"
                onClick={() => setActiveLightbox(null)}
                className="pointer-events-auto flex size-10 items-center justify-center rounded-full bg-white/15 text-white transition-all hover:bg-white/30 hover:scale-105 focus:outline-none shadow-lg"
                aria-label="Close image preview"
              >
                <span className="font-mono text-2xl font-light leading-none">×</span>
              </button>
            </div>

            {/* Centered Main Image Presentation Container — Guaranteed Fixed & Symmetrical */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative flex items-center justify-center max-h-[75vh] max-w-[92vw] cursor-default my-auto"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeLightbox.images[activeLightbox.currentIndex]}
                  src={activeLightbox.images[activeLightbox.currentIndex]}
                  alt={`${activeLightbox.eventName} photo ${activeLightbox.currentIndex + 1}`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="max-h-[72vh] max-w-[90vw] object-contain rounded-lg border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
                />
              </AnimatePresence>
            </div>

            {/* Navigation Arrows for multi-photo sets */}
            {activeLightbox.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveLightbox((prev) =>
                      prev
                        ? {
                            ...prev,
                            currentIndex:
                              (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
                          }
                        : null
                    );
                  }}
                  className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 flex size-12 items-center justify-center rounded-full bg-white/15 text-white text-2xl font-light transition-all hover:bg-white/30 hover:scale-110 focus:outline-none shadow-lg"
                  aria-label="Previous photo"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveLightbox((prev) =>
                      prev
                        ? {
                            ...prev,
                            currentIndex:
                              (prev.currentIndex + 1) % prev.images.length,
                          }
                        : null
                    );
                  }}
                  className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex size-12 items-center justify-center rounded-full bg-white/15 text-white text-2xl font-light transition-all hover:bg-white/30 hover:scale-110 focus:outline-none shadow-lg"
                  aria-label="Next photo"
                >
                  ›
                </button>

                {/* Bottom Thumbnail Strip */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute bottom-4 z-30 flex gap-2.5 overflow-x-auto max-w-[92vw] rounded-xl bg-black/80 p-2 backdrop-blur-md border border-white/15 shadow-xl"
                >
                  {activeLightbox.images.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() =>
                        setActiveLightbox((prev) => (prev ? { ...prev, currentIndex: idx } : null))
                      }
                      className={`size-12 shrink-0 overflow-hidden rounded-md transition-all ${
                        idx === activeLightbox.currentIndex
                          ? "ring-2 ring-primary scale-105 opacity-100"
                          : "opacity-45 hover:opacity-80"
                      }`}
                    >
                      <img src={imgUrl} alt="" className="size-full object-cover" />
                    </button>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


