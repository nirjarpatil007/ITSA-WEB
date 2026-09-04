import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useScroll, i as useTransform, n as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as Marquee, r as itsa } from "./router-BSwpajmA.mjs";
import { i as SplitWords, n as Magnetic, r as Reveal, t as Counter } from "./motion-primitives-DPFHSY-I.mjs";
import { t as clubs } from "./clubs-CbtmO5xF.mjs";
import { t as events_default } from "./events-DRqeLbLA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CKecOSl2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Index() {
	const heroRef = (0, import_react.useRef)(null);
	const reduced = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"]
	});
	const shift = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "-8%"]);
	const fade = useTransform(scrollYProgress, [0, .85], [1, reduced ? 1 : .25]);
	const latest = events_default.slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			ref: heroRef,
			className: "relative min-h-[100svh] overflow-hidden pt-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "grid-paper pointer-events-none absolute inset-0"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: {
					y: shift,
					opacity: fade
				},
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1600px] px-5 sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3 border-b border-foreground/20 pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label-mono",
							children: "Est. Department of Information Technology"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label-mono",
							children: "PCCoE · Pune · India"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 pt-8 lg:grid-cols-[1.6fr_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, {
								as: "h1",
								text: "Information Technology",
								className: "display-xl"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, {
									as: "h1",
									text: "Students' Association",
									delay: .18,
									className: "display-xl text-outline"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: reduced ? false : { scaleX: 0 },
								animate: { scaleX: 1 },
								transition: {
									delay: .5,
									duration: 1.1,
									ease: [
										.16,
										1,
										.3,
										1
									]
								},
								style: { transformOrigin: "left" },
								className: "mt-6 h-[6px] w-full bg-acid"
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: .3,
							className: "flex flex-col justify-end",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lg leading-relaxed text-muted-foreground",
									children: itsa.tagline
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/events",
										className: "group inline-flex items-center gap-3 bg-foreground px-6 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-background",
										children: ["Explore events", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "transition-transform group-hover:translate-x-1",
											children: "→"
										})]
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/teams",
										className: "inline-flex items-center gap-3 border border-foreground/30 px-6 py-4 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:border-foreground",
										children: "Meet the teams"
									}) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 border-l-[6px] border-primary pl-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "label-mono",
											children: "Next up"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 font-display text-3xl font-extrabold tracking-tight",
											children: itsa.highlight.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 font-mono text-xs text-primary",
											children: itsa.highlight.date
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-muted-foreground",
											children: itsa.highlight.detail
										})
									]
								})
							]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {
					className: "mt-14 border-y border-foreground/20 bg-foreground py-3 font-mono text-[11px] uppercase tracking-[0.3em] text-background",
					speed: 34,
					items: [
						"18+ events",
						"66 active members",
						"14 specialised teams",
						"IEEE · MLSC · GDGC · NSS",
						"$5000 IEEE grant"
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-foreground/20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-[1600px] grid-cols-2 gap-px bg-border sm:grid-cols-4",
				children: itsa.stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * .06,
					className: "group bg-background px-6 py-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
						value: s.value,
						suffix: s.suffix,
						className: "block font-display text-6xl font-extrabold tracking-tighter text-primary"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-mono mt-4",
						children: s.label
					})]
				}, s.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[0.8fr_1.4fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-mono",
					children: "01 — Who we are"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 font-mono text-xs text-muted-foreground",
					children: "Student-run · Faculty-guided"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, {
						text: "A student-run engine for technology, research and responsibility.",
						className: "display-md"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground",
						children: itsa.intro
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-10 divide-y divide-border border-y border-border",
						children: itsa.mission.slice(0, 3).map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .06,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-baseline gap-5 py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-[10px] text-primary",
									children: ["M", i + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-muted-foreground",
									children: m
								})]
							})
						}, m))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						className: "mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary",
						children: "Read the full story →"
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-foreground/20 bg-surface px-5 py-24 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1600px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-mono",
						children: "02 — The ecosystem"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 display-md",
						children: "Six wings, one association."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/clubs",
						className: "font-mono text-[11px] uppercase tracking-[0.2em] text-primary",
						children: "Enter the ecosystem →"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid auto-rows-[minmax(180px,auto)] gap-4 md:grid-cols-3",
					children: clubs.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .05,
						className: i === 0 ? "md:col-span-2 md:row-span-2" : "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "ink-card group flex h-full flex-col justify-between p-7 hover:-translate-y-1 hover:offset-shadow-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] tracking-[0.2em] text-primary",
									children: c.code
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `mt-4 font-display font-extrabold tracking-tight ${i === 0 ? "text-5xl sm:text-7xl" : "text-3xl"}`,
									children: c.short
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: c.domain
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `mt-6 text-sm text-muted-foreground ${i === 0 ? "" : "line-clamp-3"}`,
								children: c.description
							})]
						})
					}, c.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-foreground/20 px-5 py-24 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1600px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-mono",
						children: "03 — Recent activity"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 display-md",
						children: "Latest from the department floor."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4",
						children: latest.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .07,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/events",
								className: "group block h-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "ink-card h-full overflow-hidden hover:-translate-y-1 hover:offset-shadow",
									children: [e.images?.[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "aspect-[4/3] overflow-hidden bg-surface-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: e.images[0],
											alt: e.name,
											loading: "lazy",
											className: "size-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
										})
									}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "label-mono text-[9px]",
											children: e.date
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 font-display text-lg font-bold leading-tight",
											children: e.name
										})]
									})]
								})
							})
						}, e.id))
					})
				]
			})
		})
	] });
}
//#endregion
export { Index as component };
