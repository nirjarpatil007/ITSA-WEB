import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as SplitWords, r as Reveal } from "./motion-primitives-DPFHSY-I.mjs";
import { t as PageHeader } from "./page-header-CArvpyvR.mjs";
import { t as events_default } from "./events-DRqeLbLA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-uywdGq37.js
var import_jsx_runtime = require_jsx_runtime();
var events = events_default;
function Events() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		index: "04",
		kicker: "Calendar",
		title: "The record of the floor.",
		lede: "An event log of everything the association has run — competitions, workshops, sessions and community drives.",
		meta: [{
			label: "Logged events",
			value: String(events.length)
		}, {
			label: "Format",
			value: "Zigzag timeline"
		}]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-[1600px] px-5 py-16 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-20",
			children: events.map((e, i) => {
				const flip = i % 2 === 1;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `grid items-center gap-8 border-t border-foreground/20 pt-8 lg:grid-cols-2 ${flip ? "lg:[&>figure]:order-2" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "group relative overflow-hidden bg-surface-2",
						children: [e.images?.[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: e.images[0],
							alt: e.name,
							loading: "lazy",
							className: "aspect-[16/10] w-full object-cover grayscale transition-all duration-[900ms] group-hover:scale-105 group-hover:grayscale-0"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid aspect-[16/10] w-full place-items-center font-display text-5xl font-extrabold text-outline",
							children: "ITSA"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "absolute bottom-0 left-0 bg-primary px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground",
							children: e.date
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: flip ? "lg:pr-8" : "lg:pl-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[10px] tracking-[0.2em] text-muted-foreground",
								children: ["LOG ", String(i + 1).padStart(2, "0")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, {
								text: e.name,
								className: "mt-4 display-md"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl leading-relaxed text-muted-foreground",
								children: e.overview
							}),
							e.images && e.images.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex gap-2 overflow-x-auto pb-2",
								children: e.images.slice(1, 6).map((src, si) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src,
									alt: "",
									loading: "lazy",
									className: "size-20 shrink-0 object-cover grayscale transition-all duration-500 hover:grayscale-0"
								}, `${e.id}-${si}`))
							}) : null
						]
					})]
				}) }, e.id);
			})
		})
	})] });
}
//#endregion
export { Events as component };
