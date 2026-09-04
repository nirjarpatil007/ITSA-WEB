import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { s as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { r as Reveal } from "./motion-primitives-DPFHSY-I.mjs";
import { t as PageHeader } from "./page-header-CArvpyvR.mjs";
import { t as clubs } from "./clubs-CbtmO5xF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/clubs-BSyLj3_i.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Clubs() {
	const [open, setOpen] = (0, import_react.useState)(clubs[0]?.id ?? "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			index: "02",
			kicker: "Ecosystem",
			title: "Wings of the association.",
			lede: "Each chapter runs its own calendar, but shares one department, one committee structure and one goal.",
			meta: [{
				label: "Chapters",
				value: String(clubs.length)
			}]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-[1600px] px-5 py-16 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-foreground/20",
				children: clubs.map((c, i) => {
					const isOpen = open === c.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-foreground/20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOpen(isOpen ? "" : c.id),
							"aria-expanded": isOpen,
							className: "group flex w-full items-center gap-5 py-7 text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] text-primary",
									children: String(i + 1).padStart(2, "0")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `font-display text-[clamp(1.8rem,5.5vw,4.2rem)] font-extrabold leading-none tracking-tighter transition-all duration-500 ${isOpen ? "text-primary" : "group-hover:text-outline"}`,
									children: c.short
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-auto hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:block",
									children: c.domain
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									animate: { rotate: isOpen ? 45 : 0 },
									transition: {
										duration: .35,
										ease: [
											.16,
											1,
											.3,
											1
										]
									},
									className: "text-2xl",
									"aria-hidden": true,
									children: "+"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							initial: false,
							children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									height: 0,
									opacity: 0
								},
								animate: {
									height: "auto",
									opacity: 1
								},
								exit: {
									height: 0,
									opacity: 0
								},
								transition: {
									duration: .5,
									ease: [
										.16,
										1,
										.3,
										1
									]
								},
								className: "overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-8 pb-10 md:grid-cols-[1.3fr_1fr]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-[10px] tracking-[0.2em] text-primary",
											children: c.code
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground",
											children: c.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-6 font-display text-xl font-bold",
											children: c.name
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "label-mono text-[9px]",
											children: "Activities"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-3 space-y-2",
											children: c.activities.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex gap-3 text-sm text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-px w-5 shrink-0 bg-primary" }), a]
											}, a))
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-4 sm:grid-cols-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "ink-card p-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "label-mono text-[9px]",
													children: "Faculty"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm",
													children: c.facultyCoordinator
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "ink-card p-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "label-mono text-[9px]",
													children: "Student lead"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm",
													children: c.studentCoordinator
												})]
											})]
										})]
									})]
								})
							}) : null
						})]
					}, c.id);
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-[1600px] px-5 pb-24 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-3xl border-l-[6px] border-primary pl-5 text-sm text-muted-foreground",
				children: "Fields marked as placeholders are awaiting official confirmation from the department; everything else is published information."
			}) })
		})
	] });
}
//#endregion
export { Clubs as component };
