import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as itsa } from "./router-BSwpajmA.mjs";
import { i as SplitWords, r as Reveal, t as Counter } from "./motion-primitives-DPFHSY-I.mjs";
import { t as PageHeader } from "./page-header-CArvpyvR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/achievements-BlV9MFwe.js
var import_jsx_runtime = require_jsx_runtime();
var achievements = [
	{
		"id": 1,
		"title": "Volleyball Champions - Girls Team",
		"emoji": "🏐",
		"subtitle": "Second Position - Inter-Collegiate Competition",
		"description": "Our Girls Volleyball Team secured 2nd position in the Inter-Collegiate Volleyball Competition organized by College of Pharmacy, Saswad under Pune District Zonal Sports Committee, SPPU.",
		"highlights": [
			"3 students selected for Pune District Team",
			"Ms. Saloni Khandelwal from IT Department contributed significantly",
			"First-ever volleyball trophy for college girls' team"
		],
		"image": null
	},
	{
		"id": 2,
		"title": "IEEE Grant Awarded",
		"emoji": "💰",
		"subtitle": "USD $5000 Funding - CodeBhoomi Project",
		"description": "Successfully secured IEEE Computer Society TCSE Community D&I Initiatives 2025 grant worth $5000 for our innovative CodeBhoomi project.",
		"highlights": [
			"Project Chair: Er. Rakshit Jain (Associate Analyst, PTC)",
			"Project Vice-Chair: Dr. Anuja R. Jadhav",
			"Focus: Diversity & Inclusion in Computer Science"
		],
		"image": null
	},
	{
		"id": 3,
		"title": "Vikas Bhamare - University Selection",
		"emoji": "🏆",
		"subtitle": "SPPU Representative - West Zone Tournament",
		"description": "Final-year B.Tech IT student Vikas Bhamare selected to represent Savitribai Phule Pune University in West Zone Volleyball Tournament (Bhopal) and Krida Mohotsav Ashwamed (Nanded).",
		"highlights": [
			"University-level representation",
			"West Zone Tournament - Bhopal, MP",
			"Krida Mohotsav (Ashwamed) - Nanded"
		],
		"image": null
	},
	{
		"id": 4,
		"title": "The Hustlers - InventPitch Winners",
		"emoji": "🎯",
		"subtitle": "3rd Prize - IEEE Pune Section Competition",
		"description": "Team The Hustlers (Madhav Khobare, Atharva Lokhande, Om Bharambe, Sidhant Mattoo, Ojas Barhate) secured 3rd Prize in Round 2 of InventPitch Competition 2025.",
		"highlights": [
			"Innovation & Entrepreneurship showcase",
			"SY IT A students representation",
			"IEEE Pune Section recognition"
		],
		"image": null
	}
];
function Achievements() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			index: "05",
			kicker: "Hall of record",
			title: "What the department has won.",
			lede: "Grants, championships and competition results earned by ITSA students and teams.",
			meta: itsa.achievementStats.map((s) => ({
				label: s.label,
				value: `${s.value}${s.suffix}`
			}))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-foreground/20 bg-foreground text-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-[1600px] grid-cols-2 sm:grid-cols-4",
				children: itsa.achievementStats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * .06,
					className: "border-r border-background/20 px-6 py-12 last:border-r-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
						value: s.value,
						suffix: s.suffix,
						className: "block font-display text-5xl font-extrabold tracking-tighter"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-mono text-[10px] uppercase tracking-[0.2em] opacity-70",
						children: s.label
					})]
				}, s.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-[1600px] px-5 py-20 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 lg:grid-cols-2",
				children: achievements.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "ink-card flex h-full flex-col p-8 hover:-translate-y-1 hover:offset-shadow-primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "text-4xl",
									children: a.emoji
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] text-muted-foreground",
									children: String(i + 1).padStart(2, "0")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, {
								text: a.title,
								as: "h2",
								className: "mt-6 display-md"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-primary",
								children: a.subtitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 leading-relaxed text-muted-foreground",
								children: a.description
							}),
							a.highlights?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-2 border-t border-border pt-5",
								children: a.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-px w-5 shrink-0 bg-primary" }), h]
								}, h))
							}) : null,
							a.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: a.image,
								alt: a.title,
								loading: "lazy",
								className: "mt-6 aspect-[16/9] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
							}) : null
						]
					})
				}, a.id))
			})
		})
	] });
}
//#endregion
export { Achievements as component };
