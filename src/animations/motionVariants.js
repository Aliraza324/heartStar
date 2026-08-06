/**
 * Centralized Framer Motion variants. Import from here — never hardcode
 * animation objects inline inside components.
 */

const easeOut = [0.16, 1, 0.3, 1];

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: easeOut } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
};

export const fadeRight = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
};

export const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easeOut } },
};

export const zoomOut = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easeOut } },
};

export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

export const scaleOnHover = {
  rest: { scale: 1 },
  hover: { scale: 1.04, transition: { duration: 0.25, ease: easeOut } },
  tap: { scale: 0.97 },
};

export const cardHover = {
  rest: { y: 0, scale: 1, transition: { duration: 0.3, ease: easeOut } },
  hover: { y: -8, scale: 1.015, transition: { duration: 0.3, ease: easeOut } },
};

export const buttonHover = {
  rest: { scale: 1, boxShadow: "0 8px 16px 0 rgb(197 155 39 / 0)" },
  hover: {
    scale: 1.035,
    boxShadow: "0 10px 26px 0 rgb(197 155 39 / 0.35)",
    transition: { duration: 0.25, ease: easeOut },
  },
  tap: { scale: 0.96 },
};

export const iconHover = {
  rest: { rotate: 0, scale: 1 },
  hover: { rotate: 8, scale: 1.12, transition: { duration: 0.25, ease: easeOut } },
};

export const imageReveal = {
  hidden: { opacity: 0, scale: 1.12, clipPath: "inset(8% round 24px)" },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: "inset(0% round 24px)",
    transition: { duration: 0.9, ease: easeOut },
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.35, ease: easeOut } },
};

export const sectionReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut, staggerChildren: 0.1 },
  },
};

export const navReveal = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export const underlineGrow = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.3, ease: easeOut } },
};

export const viewport = { once: true, amount: 0.2 };
export const viewportTight = { once: true, amount: 0.4 };
