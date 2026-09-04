import { Link, createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { Marquee } from "@/components/fx/marquee";
import { Magnetic, Reveal, SplitWords } from "@/components/fx/motion-primitives";
import { clubs } from "@/data/clubs";
import { itsa } from "@/data/itsa";

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
            <div className="mt-10 border border-foreground/20 bg-surface/50">
              <div className="flex items-center justify-between border-b border-foreground/20 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span>Mission Directives</span>
                <span>PCCoE IT Department</span>
              </div>
              <ul className="divide-y divide-foreground/15">
                {itsa.mission.slice(0, 3).map((m, i) => (
                  <Reveal key={m} delay={i * 0.06}>
                    <li className="flex items-baseline gap-4 px-4 py-3.5 transition-colors hover:bg-foreground/[0.03]">
                      <span className="shrink-0 font-mono text-[10px] font-bold text-foreground">
                        M{i + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-muted-foreground">{m}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CLUB ECOSYSTEM MATRIX */}
      <section className="border-t border-foreground/20 bg-surface px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="label-mono">02 — The ecosystem</p>
              <h2 className="mt-3 display-md">Six wings, one association.</h2>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            {clubs.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.04}>
                <article
                  className="ink-card group relative flex h-full flex-col justify-between border border-foreground/20 bg-card/70 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-foreground hover:bg-card hover:offset-shadow"
                >
                  {/* Subtle corner marker */}
                  <span
                    aria-hidden="true"
                    className="absolute right-3 top-3 select-none font-mono text-[10px] text-foreground/20 transition-colors group-hover:text-foreground/70"
                  >
                    +
                  </span>

                  <div>
                    {/* Top code badge & index */}
                    <div className="flex items-center justify-between border-b border-foreground/10 pb-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="size-1.5 rounded-full bg-foreground/60 transition-colors group-hover:bg-foreground" />
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/80">
                          {c.code}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-foreground/30 transition-colors group-hover:text-foreground/60">
                        0{i + 1}
                      </span>
                    </div>

                    {/* Title & Domain */}
                    <div className="mt-3.5">
                      <h3 className="font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-[1.65rem]">
                        {c.short}
                      </h3>
                      <p className="mt-0.5 font-mono text-[11px] text-muted-foreground line-clamp-1">
                        {c.domain}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-2 sm:line-clamp-3">
                    {c.description}
                  </p>
                </article>
              </Reveal>
            ))}
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
