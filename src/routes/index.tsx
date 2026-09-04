import { Link, createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { Marquee } from "@/components/fx/marquee";
import { Magnetic, Reveal, SplitWords } from "@/components/fx/motion-primitives";
import { Cloud, Code2, Globe, HeartHandshake, Layers, Palette } from "lucide-react";

import { clubs } from "@/data/clubs";
import { itsa, PLACEHOLDER } from "@/data/itsa";

const clubIcons = {
  itsa: Layers,
  ieee: Globe,
  mlsc: Cloud,
  gdgc: Code2,
  nss: HeartHandshake,
  "art-circle": Palette,
} as const;

const title = "ITSA — Information Technology Students' Association, PCCoE Pune";
const description =
  "The digital headquarters of ITSA, PCCoE Pune: events, clubs, teams and achievements of the Information Technology Students' Association.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const shift = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "-8%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, reduced ? 1 : 0.25]);


  return (
    <>
      {/* HERO — asymmetric editorial slab */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden pt-24">
        <div aria-hidden className="grid-paper pointer-events-none absolute inset-0" />

        <motion.div style={{ y: shift, opacity: fade }} className="relative">
          <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-foreground/20 pb-3">
              <p className="label-mono">Est. Department of Information Technology</p>
              <p className="label-mono">PCCoE · Pune · India</p>
            </div>

            <div className="grid gap-8 pt-8 lg:grid-cols-[1.6fr_1fr]">
              <div>
                <SplitWords as="h1" text="Information Technology" className="display-xl" />
                <div className="relative">
                  <SplitWords
                    as="h1"
                    text="Students' Association"
                    delay={0.18}
                    className="display-xl text-outline"
                  />
                </div>
                <motion.div
                  initial={reduced ? false : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "left" }}
                  className="mt-6 h-[6px] w-full bg-acid"
                />
              </div>

              <Reveal delay={0.3} className="flex flex-col justify-end">
                <p className="text-lg leading-relaxed text-muted-foreground">{itsa.tagline}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Magnetic>
                    <Link
                      to="/events"
                      className="group inline-flex items-center gap-3 bg-foreground px-6 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-background"
                    >
                      Explore events
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </Magnetic>

                </div>

                <div className="mt-10 border-l-[6px] border-primary pl-4">
                  <p className="label-mono">Next up</p>
                  <p className="mt-2 font-display text-3xl font-extrabold tracking-tight">
                    {itsa.highlight.name}
                  </p>
                  <p className="mt-1 font-mono text-xs text-primary">{itsa.highlight.date}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{itsa.highlight.detail}</p>
                </div>
              </Reveal>
            </div>
          </div>

          <Marquee
            className="mt-14 border-y border-foreground/20 bg-foreground py-3 font-mono text-[11px] uppercase tracking-[0.3em] text-background"
            speed={34}
            items={[
              "18+ events",
              "66 active members",
              "14 specialised teams",
              "IEEE · MLSC · GDGC · NSS",
              "$5000 IEEE grant",
            ]}
          />
        </motion.div>
      </section>

      {/* MANIFESTO */}
      <section className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr]">
          <div>
            <p className="label-mono">01 — Who we are</p>
            <p className="mt-5 font-mono text-xs text-muted-foreground">
              Student-run · Faculty-guided
            </p>
          </div>
          <div>
            <SplitWords
              text="A student-run engine for technology, research and responsibility."
              className="display-md"
            />
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {itsa.intro}
            </p>
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {itsa.mission.slice(0, 3).map((m, i) => (
                <Reveal key={m} delay={i * 0.06}>
                  <li className="flex items-baseline gap-5 py-4">
                    <span className="font-mono text-[10px] text-primary">M{i + 1}</span>
                    <span className="text-sm text-muted-foreground">{m}</span>
                  </li>
                </Reveal>
              ))}
            </ul>

          </div>
        </div>
      </section>

      {/* CLUB BENTO */}
      <section className="border-t border-foreground/20 bg-surface px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="label-mono">02 — The ecosystem</p>
              <h2 className="mt-4 display-md">Six wings, one association.</h2>
            </div>

          </div>

          <div className="mt-12 grid auto-rows-[minmax(220px,auto)] gap-5 md:grid-cols-3">
            {clubs.map((c, i) => {
              const Icon = clubIcons[c.id as keyof typeof clubIcons] ?? Layers;
              const isMain = i === 0;

              if (isMain) {
                return (
                  <Reveal
                    key={c.id}
                    delay={0.05}
                    className="md:col-span-2 md:row-span-2"
                  >
                    <article className="ink-card group relative flex h-full flex-col justify-between overflow-hidden border border-foreground/20 p-8 sm:p-10 hover:border-foreground hover:offset-shadow transition-all duration-300">
                      {/* Typographic ghost watermark */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-4 -top-8 select-none font-display text-[170px] font-black leading-none text-foreground/[0.03] dark:text-foreground/[0.05]"
                      >
                        ITSA
                      </span>

                      <div>
                        {/* Top Meta Bar */}
                        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-5">
                          <div className="flex items-center gap-2">
                            <span className="inline-block size-2 rounded-full bg-foreground animate-pulse" />
                            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-foreground">
                              {c.code}
                            </span>
                          </div>
                          <span className="border border-foreground/20 bg-foreground/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground">
                            Flagship Student Body
                          </span>
                        </div>

                        {/* Title & Identity */}
                        <div className="mt-7">
                          <div className="flex items-center gap-4">
                            <div className="grid size-12 place-items-center bg-foreground font-mono text-xs font-bold text-background">
                              IT
                            </div>
                            <div>
                              <h3 className="font-display text-4xl font-black tracking-tight sm:text-6xl text-foreground">
                                {c.short}
                              </h3>
                              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                                {c.name}
                              </p>
                            </div>
                          </div>
                          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                            {c.description}
                          </p>
                        </div>

                        {/* 3 Structured Pillars Grid */}
                        <div className="mt-8 grid gap-3 sm:grid-cols-3">
                          <div className="border border-border/70 bg-background/60 p-4 transition-colors group-hover:border-foreground/40">
                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Department Teams</p>
                            <p className="mt-2 font-display text-2xl font-black tracking-tight text-foreground">14 Teams</p>
                            <p className="mt-1 text-xs text-muted-foreground">Technical, web, media, sponsorship &amp; ops</p>
                          </div>
                          <div className="border border-border/70 bg-background/60 p-4 transition-colors group-hover:border-foreground/40">
                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Ecosystem</p>
                            <p className="mt-2 font-display text-2xl font-black tracking-tight text-foreground">6 Wings</p>
                            <p className="mt-1 text-xs text-muted-foreground">IEEE, MLSC, GDGC, NSS, Art &amp; Core</p>
                          </div>
                          <div className="border border-border/70 bg-background/60 p-4 transition-colors group-hover:border-foreground/40">
                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Annual Summit</p>
                            <p className="mt-2 font-display text-2xl font-black tracking-tight text-foreground">Praxis 2026</p>
                            <p className="mt-1 text-xs text-muted-foreground">Flagship conference in October</p>
                          </div>
                        </div>

                        {/* Key Responsibilities & Operations */}
                        <div className="mt-6 border-t border-border/60 pt-5">
                          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                            Key Responsibilities &amp; Operations
                          </p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {c.activities.map((act) => (
                              <span
                                key={act}
                                className="inline-flex items-center gap-1.5 border border-foreground/15 bg-foreground/[0.03] px-3 py-1.5 font-mono text-[11px] text-foreground"
                              >
                                <span className="text-[10px] text-foreground/60">■</span> {act}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Leadership Footer */}
                      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-4 font-mono text-[11px] text-muted-foreground">
                        <div>
                          <span className="text-foreground font-semibold">Faculty:</span> {c.facultyCoordinator}
                        </div>
                        <div>
                          <span className="text-foreground font-semibold">Leadership:</span> {c.studentCoordinator}
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              }

              return (
                <Reveal
                  key={c.id}
                  delay={i * 0.05}
                  className="h-full"
                >
                  <article className="ink-card group relative flex h-full flex-col justify-between overflow-hidden border border-foreground/20 p-6 sm:p-7 hover:border-foreground hover:offset-shadow transition-all duration-300">
                    {/* Ghost watermark */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-7xl font-black leading-none text-foreground/[0.03] dark:text-foreground/[0.05]"
                    >
                      {c.short}
                    </span>

                    <div>
                      {/* Top Bar with code and monochrome icon */}
                      <div className="flex items-center justify-between gap-2 border-b border-border/60 pb-3">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-foreground">
                          {c.code}
                        </span>
                        <div className="grid size-7 place-items-center border border-foreground/20 bg-foreground/5 text-foreground transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                          <Icon className="size-3.5" />
                        </div>
                      </div>

                      {/* Title & Domain */}
                      <div className="mt-4">
                        <h3 className="font-display text-3xl font-extrabold tracking-tight text-foreground">
                          {c.short}
                        </h3>
                        <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                          {c.name}
                        </p>
                        <div className="mt-2.5 inline-block border-l-2 border-foreground pl-2 font-mono text-[11px] text-foreground/90">
                          {c.domain}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                        {c.description}
                      </p>

                      {/* Key Activities */}
                      <div className="mt-5 border-t border-border/40 pt-4">
                        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                          Key Initiatives
                        </p>
                        <ul className="mt-2.5 space-y-1.5">
                          {c.activities.map((act) => (
                            <li key={act} className="flex items-start gap-2 font-mono text-[11px] text-foreground/90">
                              <span className="text-foreground/50 mt-0.5 text-[9px]">▸</span>
                              <span className="leading-snug">{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Card Footer: Coordinator / Status */}
                    <div className="mt-6 border-t border-border/60 pt-3 font-mono text-[10px] text-muted-foreground">
                      {c.studentCoordinator !== PLACEHOLDER ? (
                        <p className="truncate">
                          <span className="text-foreground font-semibold">Lead:</span> {c.studentCoordinator}
                        </p>
                      ) : c.facultyCoordinator !== PLACEHOLDER ? (
                        <p className="truncate">
                          <span className="text-foreground font-semibold">Coord:</span> {c.facultyCoordinator}
                        </p>
                      ) : (
                        <p className="flex items-center gap-1.5 text-foreground/70">
                          <span className="size-1.5 rounded-full bg-foreground/70" />
                          <span>Official Chapter Wing · Active</span>
                        </p>
                      )}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* VISION SLAB */}
      <section className="border-y border-foreground/20 bg-foreground px-5 py-24 text-background sm:px-8">
        <div className="mx-auto max-w-[1600px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] opacity-70">Vision</p>
          <SplitWords text={itsa.vision} className="mt-6 max-w-[24ch] display-md" />
        </div>
      </section>
    </>
  );
}
