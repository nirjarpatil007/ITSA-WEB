import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, r as useSpring } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { i as storyChapters, r as itsa } from "./router-BSwpajmA.mjs";
import { i as SplitWords, r as Reveal } from "./motion-primitives-DPFHSY-I.mjs";
import { t as PageHeader } from "./page-header-CArvpyvR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CtLiGd_Y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function About() {
	const trackRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: trackRef,
		offset: ["start 0.9", "end 0.4"]
	});
	const progress = useSpring(scrollYProgress, {
		stiffness: 90,
		damping: 26,
		mass: .4
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			index: "01",
			kicker: "About the association",
			title: "A department, organised.",
			lede: itsa.intro,
			meta: [
				{
					label: "Department",
					value: "Information Technology"
				},
				{
					label: "Institute",
					value: "PCCoE, Pune"
				},
				{
					label: "Teams",
					value: "14"
				},
				{
					label: "Members",
					value: "66"
				}
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref: trackRef,
			className: "relative mx-auto max-w-[1600px] px-5 py-24 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[80px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sticky top-32 h-[50vh] w-px bg-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							style: {
								scaleY: progress,
								transformOrigin: "top"
							},
							className: "h-full w-[3px] -translate-x-px bg-primary"
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-24",
					children: storyChapters.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "grid gap-6 md:grid-cols-[auto_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-6xl font-extrabold leading-none text-outline",
							children: ["0", i + 1]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label-mono",
								children: c.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, {
								text: c.title,
								className: "mt-4 display-md max-w-[22ch]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground",
								children: c.body
							})
						] })]
					}, c.key))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-foreground/20 bg-foreground px-5 py-24 text-background sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1600px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-[0.22em] opacity-70",
					children: "Vision"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, {
					text: itsa.vision,
					className: "mt-6 max-w-[24ch] display-md"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1600px] px-5 py-24 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "label-mono",
				children: "Mission"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-px bg-border md:grid-cols-2",
				children: itsa.mission.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * .05,
					className: "bg-background p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-[10px] text-primary",
						children: ["M", i + 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-snug",
						children: m
					})]
				}, m))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-foreground/20 bg-surface px-5 py-24 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1600px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-md",
					children: "President's goals"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 divide-y divide-border border-y border-border",
					children: itsa.presidentGoals.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "group flex items-baseline gap-6 py-5 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-primary",
							children: String(i + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg transition-transform duration-300 group-hover:translate-x-2",
							children: g
						})]
					}, g))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1600px] px-5 py-24 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "label-mono",
				children: "Faculty leadership"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 md:grid-cols-3",
				children: itsa.leadership.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .07,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "ink-card p-8 hover:-translate-y-1 hover:offset-shadow-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl font-extrabold tracking-tight",
							children: l.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary",
							children: l.role
						})]
					})
				}, l.name))
			})]
		})
	] });
}
//#endregion
export { About as component };
