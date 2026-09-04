import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { i as SplitWords } from "./motion-primitives-DPFHSY-I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-header-CArvpyvR.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Shared editorial masthead. Each page passes its own index number and
* metadata row so the tabs read as separate publications.
*/
function PageHeader({ index, kicker, title, lede, meta }) {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "relative overflow-hidden border-b border-foreground/20 px-5 pb-10 pt-28 sm:px-8 sm:pb-14 sm:pt-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "grid-paper pointer-events-none absolute inset-0 opacity-70"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-[1600px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-[clamp(2.5rem,8vw,7rem)] font-extrabold leading-none text-primary",
						children: index
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label-mono",
						children: kicker
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, {
					as: "h1",
					text: title,
					className: "mt-6 max-w-[18ch] display-lg"
				}),
				lede ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: reduced ? false : {
						opacity: 0,
						y: 14
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: .35,
						duration: .6
					},
					className: "mt-6 max-w-2xl text-lg text-muted-foreground",
					children: lede
				}) : null,
				meta?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-10 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4",
					children: meta.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-background px-4 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "label-mono text-[9px]",
							children: m.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 font-display text-xl font-bold",
							children: m.value
						})]
					}, m.label))
				}) : null
			]
		})]
	});
}
//#endregion
export { PageHeader as t };
