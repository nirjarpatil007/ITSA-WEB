import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as useReducedMotion, s as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { i as __exportAll } from "./server-FuWQGeOg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BSwpajmA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DDQp-TR9.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var LETTERS = [
	"I",
	"T",
	"S",
	"A"
];
/**
* Opening sequence: four ink slabs slide in, the wordmark locks, then the
* panel splits and wipes away. Plays once per browser session.
*/
function IntroSequence() {
	const reduced = useReducedMotion();
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (reduced) return;
		try {
			if (sessionStorage.getItem("itsa-intro-v2") === "done") return;
		} catch {
			return;
		}
		setShow(true);
		document.body.style.overflow = "hidden";
		const t = setTimeout(() => {
			try {
				sessionStorage.setItem("itsa-intro-v2", "done");
			} catch {}
			setShow(false);
		}, 2200);
		return () => {
			clearTimeout(t);
			document.body.style.overflow = "";
		};
	}, [reduced]);
	(0, import_react.useEffect)(() => {
		if (!show) document.body.style.overflow = "";
	}, [show]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: show && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "fixed inset-0 z-[200] grid grid-rows-2",
		exit: { opacity: 1 },
		transition: { duration: .9 },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "grain relative overflow-hidden bg-foreground",
			exit: { y: "-100%" },
			transition: {
				duration: .85,
				ease: [
					.83,
					0,
					.17,
					1
				]
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-1/2",
				children: LETTERS.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					initial: {
						y: "120%",
						opacity: 0
					},
					animate: {
						y: "0%",
						opacity: 1
					},
					transition: {
						delay: .15 + i * .09,
						duration: .8,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "block font-display text-[clamp(4rem,20vw,15rem)] font-extrabold leading-[0.8] tracking-[-0.06em] text-background",
					children: l
				}, l))
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			className: "grain relative overflow-hidden bg-foreground",
			exit: { y: "100%" },
			transition: {
				duration: .85,
				ease: [
					.83,
					0,
					.17,
					1
				]
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: .9,
					duration: .5
				},
				className: "absolute left-1/2 top-[max(4.5rem,14vh)] w-full -translate-x-1/2 text-center font-mono text-[10px] uppercase tracking-[0.4em] text-background/70",
				children: "Information Technology Students' Association · PCCoE Pune"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { scaleX: 0 },
				animate: { scaleX: 1 },
				transition: {
					delay: .5,
					duration: 1.5,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				style: { transformOrigin: "left" },
				className: "absolute bottom-10 left-6 right-6 h-[3px] bg-acid"
			})]
		})]
	}, "intro") });
}
var ROUTE_KEYS = {
	"/": "index",
	"/about": "about",
	"/clubs": "clubs",
	"/teams": "teams",
	"/events": "events",
	"/achievements": "achievements",
	"/contact": "contact"
};
/** Ink-slab wipe between routes plus per-route accent identity. */
function PageTransition({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const reduced = useReducedMotion();
	const key = ROUTE_KEYS[pathname] ?? "index";
	(0, import_react.useEffect)(() => {
		document.documentElement.dataset["route"] = key;
	}, [key]);
	if (reduced) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
		mode: "wait",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 18,
				filter: "blur(6px)"
			},
			animate: {
				opacity: 1,
				y: 0,
				filter: "blur(0px)"
			},
			exit: {
				opacity: 0,
				y: -10,
				filter: "blur(4px)"
			},
			transition: {
				duration: .45,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				"aria-hidden": true,
				initial: { scaleY: 1 },
				animate: { scaleY: 0 },
				transition: {
					duration: .6,
					ease: [
						.83,
						0,
						.17,
						1
					]
				},
				style: { transformOrigin: "top" },
				className: "pointer-events-none fixed inset-0 z-[120] bg-primary"
			}), children]
		}, pathname)
	});
}
var STORAGE_KEY = "itsa-theme";
/** Inline script string: applies the stored theme before first paint. */
var themeBootScript = `(function(){try{var t=localStorage.getItem("${STORAGE_KEY}");if(!t){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}document.documentElement.classList.toggle("dark",t==="dark");}catch(e){}})();`;
function ThemeToggle({ className }) {
	const reduced = useReducedMotion();
	const [theme, setTheme] = (0, import_react.useState)("light");
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
		setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
	}, []);
	const toggle = (0, import_react.useCallback)(() => {
		setTheme((prev) => {
			const next = prev === "dark" ? "light" : "dark";
			document.documentElement.classList.toggle("dark", next === "dark");
			try {
				localStorage.setItem(STORAGE_KEY, next);
			} catch {}
			return next;
		});
	}, []);
	const dark = mounted && theme === "dark";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: toggle,
		"aria-label": dark ? "Switch to light theme" : "Switch to dark theme",
		title: dark ? "Light mode" : "Dark mode",
		className: `group relative inline-flex h-9 w-[68px] items-center border border-foreground/25 bg-surface px-1 transition-colors hover:border-foreground/60 ${className ?? ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				"aria-hidden": true,
				layout: true,
				transition: reduced ? { duration: 0 } : {
					type: "spring",
					stiffness: 480,
					damping: 34
				},
				className: "absolute h-7 w-7 bg-foreground",
				style: { left: dark ? "calc(100% - 32px)" : "4px" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: `relative z-10 grid h-7 w-7 place-items-center font-mono text-[10px] transition-colors ${dark ? "text-muted-foreground" : "text-background"}`,
				children: "☀"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: `relative z-10 ml-auto grid h-7 w-7 place-items-center font-mono text-[10px] transition-colors ${dark ? "text-background" : "text-muted-foreground"}`,
				children: "☾"
			})
		]
	});
}
var links = [
	{
		to: "/",
		label: "Index"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/clubs",
		label: "Clubs"
	},
	{
		to: "/teams",
		label: "Teams"
	},
	{
		to: "/events",
		label: "Events"
	},
	{
		to: "/achievements",
		label: "Wins"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteNav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => setOpen(false), [pathname]);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `border-b transition-all duration-300 ${scrolled ? "border-border bg-background/85 backdrop-blur-xl" : "border-transparent bg-transparent"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 py-3 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "group flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-8 place-items-center bg-foreground font-mono text-[10px] font-bold text-background transition-transform duration-300 group-hover:rotate-90",
							children: "IT"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "leading-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-base font-extrabold tracking-tight",
								children: "ITSA"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "label-mono block text-[8px]",
								children: "PCCoE · Pune"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center lg:flex",
						children: links.map((l, i) => {
							const active = pathname === l.to;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: l.to,
								className: "group relative block overflow-hidden px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-x-3 bottom-1 h-px origin-right scale-x-0 bg-foreground transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" }),
									active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
										layoutId: "nav-active",
										className: "absolute inset-x-3 bottom-1 h-[3px] bg-primary",
										transition: {
											type: "spring",
											stiffness: 400,
											damping: 34
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: active ? "text-foreground" : "text-muted-foreground",
										"aria-hidden": false,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mr-1 text-[9px] opacity-50",
											children: ["0", i + 1]
										}), l.label]
									})
								]
							}, l.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-label": open ? "Close menu" : "Open menu",
							"aria-expanded": open,
							onClick: () => setOpen((v) => !v),
							className: "flex size-9 flex-col items-center justify-center gap-1.5 border border-foreground/25 bg-surface lg:hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-px w-4 bg-foreground transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-px w-4 bg-foreground transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}` })]
						})]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { clipPath: "inset(0 0 100% 0)" },
			animate: { clipPath: "inset(0 0 0% 0)" },
			exit: { clipPath: "inset(0 0 100% 0)" },
			transition: {
				duration: .5,
				ease: [
					.83,
					0,
					.17,
					1
				]
			},
			className: "grain fixed inset-0 -z-10 bg-background px-5 pb-10 pt-24 lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col",
				children: links.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.li, {
					initial: {
						opacity: 0,
						y: 22
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: .1 + i * .05,
						duration: .4
					},
					className: "border-b border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: l.to,
						className: "flex items-baseline justify-between py-4 font-display text-4xl font-extrabold tracking-tight",
						children: [l.label, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "label-mono",
							children: ["0", i + 1]
						})]
					})
				}, l.to))
			})
		}) })]
	});
}
/**
* Infinite horizontal ticker. Children are duplicated so the CSS animation
* can loop seamlessly at -50%.
*/
function Marquee({ items, className, separator = "◆", reverse = false, speed = 26 }) {
	const row = [...items, ...items];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `relative overflow-hidden ${className ?? ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track",
			style: {
				animationDuration: `${speed}s`,
				animationDirection: reverse ? "reverse" : "normal"
			},
			children: row.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex shrink-0 items-center gap-8 pr-8",
				children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "text-[0.6em] opacity-60",
					children: separator
				})]
			}, i))
		})
	});
}
/**
* Core ITSA facts, sourced from the official ITSA site (praxis2026.online).
* Anything not published there is marked `PLACEHOLDER` so it is obvious
* what still needs official confirmation.
*/
var PLACEHOLDER = "PLACEHOLDER — awaiting official information";
var itsa = {
	shortName: "ITSA",
	fullName: "Information Technology Students' Association",
	department: "Information Technology Department, PCCoE, Pune",
	tagline: "A student-run engine for technology, research and responsibility.",
	intro: "ITSA is the Information Technology Students' Association of the IT Department at PCCoE, Pune. It runs the department's technical, academic, cultural and social-responsibility activities together with the IEEE Student Branch, MLSC and GDGC chapters.",
	vision: "To develop competent, ethical, and socially responsible Information Technology professionals by promoting academic excellence, technological innovation, leadership, and holistic student development in line with national and global standards.",
	mission: [
		"Strengthen industry–academia interaction through professional chapters",
		"Support higher studies, research, and lifelong learning",
		"Encourage social responsibility through ISR and NSS activities",
		"Promote cultural, creative, and ethical values",
		"Ensure student welfare, inclusivity, and leadership development"
	],
	presidentGoals: [
		"Effective leadership and strategic direction aligned with institutional objectives",
		"Innovation and research orientation through workshops and project-based learning",
		"Strengthen collaboration among IEEE, MLSC, and GDGC chapters",
		"Promote social responsibility through ISR and NSS activities",
		"Support higher studies and research aspirations with mentorship programs",
		"Ensure inclusive participation and maintain NAAC/NBA quality standards",
		"Committed to excellence in IT education and professional development"
	],
	stats: [
		{
			value: 18,
			suffix: "+",
			label: "Events held"
		},
		{
			value: 66,
			suffix: "",
			label: "Active members"
		},
		{
			value: 41,
			suffix: "",
			label: "SY members"
		},
		{
			value: 25,
			suffix: "",
			label: "TY members"
		}
	],
	achievementStats: [
		{
			value: 18,
			suffix: "+",
			label: "Awards"
		},
		{
			value: 8,
			suffix: "+",
			label: "Sports wins"
		},
		{
			value: 5e3,
			suffix: "+",
			label: "USD funding"
		},
		{
			value: 150,
			suffix: "+",
			label: "Members reached"
		}
	],
	leadership: [
		{
			name: "Dr. Jayashree Katti",
			role: "Head of Department"
		},
		{
			name: "Mrs. Tanuja Patankar",
			role: "SDW Coordinator"
		},
		{
			name: "Mrs. Shraddha Tawade",
			role: "ITSA Coordinator"
		}
	],
	highlight: {
		name: "Innoveda 2026",
		date: "18th March 2026",
		detail: "Young Researcher Conference 2025-26"
	},
	contact: {
		email: "itsadept@college.edu",
		phone: "+91 9834330401",
		address: "Information Technology Department, PCCoE, Pune",
		social: PLACEHOLDER
	}
};
var storyChapters = [
	{
		key: "who",
		kicker: "Who we are",
		title: "The students' association of the IT Department at PCCoE.",
		body: itsa.intro
	},
	{
		key: "what",
		kicker: "What we do",
		title: "Competitions, workshops, research drives and community work.",
		body: "From BRUTEFORGE and WebCrafter to AI expert sessions, GATE/GRE guidance, NSS drives and Techroom training, ITSA runs the department's calendar end to end across 14 specialised teams."
	},
	{
		key: "why",
		kicker: "Why we exist",
		title: "Competent, ethical and socially responsible IT professionals.",
		body: itsa.mission.join(" · ")
	},
	{
		key: "where",
		kicker: "Where we are going",
		title: "Research orientation, industry links and inclusive leadership.",
		body: itsa.presidentGoals.slice(0, 4).join(" · ")
	}
];
var columns = [{
	title: "Navigate",
	links: [
		{
			to: "/about",
			label: "About"
		},
		{
			to: "/clubs",
			label: "Clubs"
		},
		{
			to: "/teams",
			label: "Teams"
		}
	]
}, {
	title: "Activity",
	links: [
		{
			to: "/events",
			label: "Events"
		},
		{
			to: "/achievements",
			label: "Achievements"
		},
		{
			to: "/contact",
			label: "Contact"
		}
	]
}];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 border-t border-foreground/20 bg-surface",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {
				className: "border-b border-foreground/20 py-3 font-display text-2xl font-extrabold uppercase tracking-tight sm:text-3xl",
				speed: 30,
				items: [
					"Information Technology Students' Association",
					"PCCoE Pune",
					"Build · Compete · Serve"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-[1600px] gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "display-md",
						children: "ITSA"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm text-sm text-muted-foreground",
						children: itsa.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-1 font-mono text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: itsa.contact.email }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: itsa.contact.phone }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: itsa.contact.address })
						]
					})
				] }), columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-mono",
					children: col.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-2",
					children: col.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: l.to,
						className: "group inline-flex items-center gap-2 font-display text-xl font-bold tracking-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-px w-0 bg-foreground transition-all duration-300 group-hover:w-6" }), l.label]
					}) }, l.to))
				})] }, col.title))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3 px-5 py-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ITSA · IT Department, PCCoE"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Student-run · Pune, India" })]
				})
			})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-xl",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center bg-foreground px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-background",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center bg-foreground px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-background",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center border border-foreground/30 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "ITSA — IT Students' Association, PCCoE Pune" },
			{
				name: "description",
				content: "The student-run Information Technology Students' Association of PCCoE, Pune — events, clubs, teams and achievements."
			},
			{
				name: "author",
				content: "ITSA, PCCoE Pune"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&family=IBM+Plex+Mono:wght@400;500&family=Manrope:wght@400;500;700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: themeBootScript } })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntroSequence, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTransition, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var $$splitComponentImporter$6 = () => import("./routes-CKecOSl2.mjs");
var title$6 = "ITSA — Information Technology Students' Association, PCCoE Pune";
var description$6 = "The digital headquarters of ITSA, PCCoE Pune: events, clubs, teams and achievements of the Information Technology Students' Association.";
var Route$6 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: title$6 },
		{
			name: "description",
			content: description$6
		},
		{
			property: "og:title",
			content: title$6
		},
		{
			property: "og:description",
			content: description$6
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./about-CtLiGd_Y.mjs");
var title$5 = "About ITSA — Vision, Mission & Leadership | PCCoE Pune";
var description$5 = "How the Information Technology Students' Association at PCCoE Pune is organised: vision, mission, president's goals and faculty leadership.";
var Route$5 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: title$5 },
		{
			name: "description",
			content: description$5
		},
		{
			property: "og:title",
			content: title$5
		},
		{
			property: "og:description",
			content: description$5
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./achievements-BlV9MFwe.mjs");
var title$4 = "Achievements — Awards, Grants & Wins | ITSA PCCoE Pune";
var description$4 = "Recognition earned by the IT Department at PCCoE Pune: the IEEE $5000 grant, sports championships and competition wins.";
var Route$4 = createFileRoute("/achievements")({
	head: () => ({ meta: [
		{ title: title$4 },
		{
			name: "description",
			content: description$4
		},
		{
			property: "og:title",
			content: title$4
		},
		{
			property: "og:description",
			content: description$4
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./clubs-BSyLj3_i.mjs");
var title$3 = "Clubs & Chapters — IEEE, MLSC, GDGC | ITSA PCCoE";
var description$3 = "The six wings operating under ITSA at PCCoE Pune: IEEE Student Branch, MLSC, GDGC, NSS and the ITSA core body, with their domains and activities.";
var Route$3 = createFileRoute("/clubs")({
	head: () => ({ meta: [
		{ title: title$3 },
		{
			name: "description",
			content: description$3
		},
		{
			property: "og:title",
			content: title$3
		},
		{
			property: "og:description",
			content: description$3
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-CpPr8lRw.mjs");
var title$2 = "Contact ITSA — IT Department, PCCoE Pune";
var description$2 = "Reach the Information Technology Students' Association at PCCoE Pune: department email, phone, address and faculty coordinators.";
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: title$2 },
		{
			name: "description",
			content: description$2
		},
		{
			property: "og:title",
			content: title$2
		},
		{
			property: "og:description",
			content: description$2
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./events-uywdGq37.mjs");
var title$1 = "Events — Competitions, Workshops & Drives | ITSA PCCoE";
var description$1 = "Every ITSA event at PCCoE Pune: BRUTEFORGE, WebCrafter, AI expert sessions, higher-studies guidance, NSS drives and more.";
var Route$1 = createFileRoute("/events")({
	head: () => ({ meta: [
		{ title: title$1 },
		{
			name: "description",
			content: description$1
		},
		{
			property: "og:title",
			content: title$1
		},
		{
			property: "og:description",
			content: description$1
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./teams-EnOnmPJP.mjs");
/** Leads, co-leads and members flattened into one ordered roster. */
var title = "Teams — 14 Committees of ITSA | PCCoE Pune";
var description = "The people behind ITSA at PCCoE Pune: core team, technical, webmasters, publicity, sports, NSS and every other committee.";
var Route = createFileRoute("/teams")({
	head: () => ({ meta: [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute: Route$5.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$7
	}),
	AchievementsRoute: Route$4.update({
		id: "/achievements",
		path: "/achievements",
		getParentRoute: () => Route$7
	}),
	ClubsRoute: Route$3.update({
		id: "/clubs",
		path: "/clubs",
		getParentRoute: () => Route$7
	}),
	ContactRoute: Route$2.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$7
	}),
	EventsRoute: Route$1.update({
		id: "/events",
		path: "/events",
		getParentRoute: () => Route$7
	}),
	TeamsRoute: Route.update({
		id: "/teams",
		path: "/teams",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { Marquee as a, storyChapters as i, PLACEHOLDER as n, itsa as r, router_exports as t };
