/**
 * Central design tokens mirrored from the Tailwind v4 @theme block in src/index.css.
 * Use these in JS/Framer Motion contexts where a CSS class isn't available
 * (inline gradients, canvas, dynamically computed styles, etc).
 */

export const colors = {
  gold: {
    50: "#fbf6e7",
    100: "#f5e9c2",
    200: "#eeda98",
    300: "#dfb75c",
    400: "#d2a93d",
    500: "#c59b27",
    600: "#a77d18",
    700: "#86620f",
    800: "#654a0c",
    900: "#4d3b1b",
  },
  ink: {
    950: "#010101",
    900: "#0b0d0d",
    800: "#151818",
    700: "#191b1b",
    600: "#222222",
    500: "#2d1e0a",
  },
  cream: {
    50: "#fdfbf7",
    100: "#f2ebdf",
    200: "#ede9e1",
  },
  muted: {
    100: "#adb295",
    200: "#a5a8a8",
    300: "#8a8e8e",
    400: "#6e7171",
  },
  white: "#ffffff",
};

export const typography = {
  fontFamily: {
    sans: '"Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif',
    serif: '"Instrument Serif", ui-serif, Georgia, serif',
    hero: '"Playfair Display", ui-serif, Georgia, serif',
    display: '"PoetsenOne", "Poetsen One", ui-rounded, sans-serif',
    footerHeading: '"Mona Sans", ui-sans-serif, system-ui, sans-serif',
    footerBody: '"DM Sans", ui-sans-serif, system-ui, sans-serif',
  },
  weights: { regular: 400, medium: 500, semibold: 600, bold: 700, extrabold: 800 },
};

export const spacing = {
  section: { mobile: "4rem", desktop: "7rem" },
  containerMax: "1280px",
};

export const radius = {
  sm: "6px",
  md: "14px",
  lg: "20px",
  xl: "28px",
  "2xl": "32px",
  pill: "100px",
};

export const shadows = {
  card: "0 12px 24px 0 rgb(0 0 0 / 0.25)",
  cardSoft: "0 12px 24px 0 rgb(0 0 0 / 0.06)",
  panel: "0 8px 16px 0 rgb(0 0 0 / 0.13)",
  gold: "0 8px 16px 0 rgb(197 155 39 / 0.2)",
  goldLg: "0 8px 24px 0 rgb(223 183 92 / 0.25)",
  badge: "0 4px 10px 0 rgb(0 0 0 / 0.13)",
};

export const zIndex = {
  base: 0,
  content: 10,
  header: 50,
  overlay: 60,
  modal: 70,
  toast: 80,
};

export const transitions = {
  fast: "150ms",
  base: "250ms",
  slow: "400ms",
  slower: "600ms",
  easeOutSmooth: "cubic-bezier(0.16, 1, 0.3, 1)",
};

export const durations = {
  fast: 0.25,
  base: 0.4,
  slow: 0.6,
  slower: 0.9,
};

const theme = { colors, typography, spacing, radius, shadows, zIndex, transitions, durations };

export default theme;
