import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useReducedMotion, t as useInView } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/motion-primitives-DPFHSY-I.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Reveal({ children, delay = 0, y = 28, className }) {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: reduced ? false : {
			opacity: 0,
			y,
			filter: "blur(8px)"
		},
		whileInView: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)"
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .75,
			delay,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		children
	});
}
/** Word-by-word editorial reveal for headlines. */
function SplitWords({ text, className, delay = 0, as: Tag = "h2" }) {
	const reduced = useReducedMotion();
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-40px"
	});
	const words = text.split(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className,
		children: words.map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-block overflow-hidden pb-[0.24em] align-bottom [margin-bottom:-0.24em]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
				className: "inline-block",
				initial: reduced ? false : {
					y: "110%",
					opacity: 0
				},
				animate: inView || reduced ? {
					y: "0%",
					opacity: 1
				} : {
					y: "110%",
					opacity: 0
				},
				transition: {
					duration: .7,
					delay: delay + i * .045,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				children: [word, i < words.length - 1 ? "\xA0" : ""]
			})
		}, `${word}-${i}`))
	});
}
function Counter({ value, suffix = "", className }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-60px"
	});
	const reduced = useReducedMotion();
	const [display, setDisplay] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		if (reduced) {
			setDisplay(value);
			return;
		}
		let frame = 0;
		const total = 60;
		const tick = () => {
			frame += 1;
			const p = 1 - Math.pow(1 - frame / total, 3);
			setDisplay(Math.round(value * p));
			if (frame < total) raf = requestAnimationFrame(tick);
		};
		let raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		inView,
		reduced,
		value
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className,
		children: [display, suffix]
	});
}
/** Button/link wrapper that leans toward the pointer. */
function Magnetic({ children, className, strength = .28 }) {
	const ref = (0, import_react.useRef)(null);
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref,
		className: cn("inline-block will-change-transform", className),
		onMouseMove: (e) => {
			const el = ref.current;
			if (!el || reduced) return;
			const r = el.getBoundingClientRect();
			el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * strength}px, ${(e.clientY - (r.top + r.height / 2)) * strength}px)`;
		},
		onMouseLeave: () => {
			const el = ref.current;
			if (el) el.style.transform = "translate(0px, 0px)";
		},
		style: { transition: "transform 350ms cubic-bezier(0.16,1,0.3,1)" },
		children
	});
}
//#endregion
export { SplitWords as i, Magnetic as n, Reveal as r, Counter as t };
