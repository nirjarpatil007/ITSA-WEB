import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Marquee, r as itsa } from "./router-BSwpajmA.mjs";
import { i as SplitWords, n as Magnetic, r as Reveal } from "./motion-primitives-DPFHSY-I.mjs";
import { t as PageHeader } from "./page-header-CArvpyvR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CpPr8lRw.js
var import_jsx_runtime = require_jsx_runtime();
var channels = [
	{
		label: "Email",
		value: itsa.contact.email,
		href: `mailto:${itsa.contact.email}`
	},
	{
		label: "Phone",
		value: itsa.contact.phone,
		href: `tel:${itsa.contact.phone.replace(/\s/g, "")}`
	},
	{
		label: "Address",
		value: itsa.contact.address,
		href: null
	}
];
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			index: "06",
			kicker: "Get in touch",
			title: "Talk to the association.",
			lede: "Questions about an event, a collaboration, or joining a team? Reach the department directly."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-[1600px] gap-px bg-border px-0 py-0 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-background px-5 py-16 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-mono",
					children: "Channels"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-8 divide-y divide-border border-y border-border",
					children: channels.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
							children: c.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2",
							children: c.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: c.href,
								className: "font-display text-2xl font-extrabold tracking-tight text-primary underline-offset-8 hover:underline sm:text-3xl",
								children: c.value
							}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl font-extrabold tracking-tight sm:text-3xl",
								children: c.value
							})
						})]
					}, c.label))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-surface px-5 py-16 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-mono",
						children: "Faculty coordinators"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 space-y-4",
						children: itsa.leadership.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .07,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ink-card flex items-baseline justify-between gap-4 p-6 hover:-translate-y-1 hover:offset-shadow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl font-extrabold tracking-tight",
									children: l.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] uppercase tracking-[0.18em] text-primary",
									children: l.role
								})]
							})
						}, l.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, {
						text: "Information Technology Department, PCCoE, Pune.",
						className: "mt-12 display-md max-w-[16ch]"
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {
			className: "border-y border-foreground/20 bg-foreground py-3 font-mono text-[11px] uppercase tracking-[0.3em] text-background",
			speed: 30,
			items: [
				"Say hello",
				"Collaborate",
				"Sponsor an event",
				"Join a team"
			]
		})
	] });
}
//#endregion
export { Contact as component };
