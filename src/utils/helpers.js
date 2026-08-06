/**
 * Merge conditional class names, filtering out falsy values.
 * Usage: classNames("btn", isActive && "btn-active", className)
 */
export function classNames(...values) {
  return values.filter(Boolean).join(" ");
}

/**
 * Smooth-scrolls to an element by id, accounting for the fixed header height.
 */
export function scrollToSection(id, offset = 96) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

/**
 * Truncates text to a max length, appending an ellipsis if needed.
 */
export function formatText(text, maxLength) {
  if (!text) return "";
  if (!maxLength || text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}

/**
 * Formats a large number with a compact suffix (1200 -> "1.2K").
 */
export function formatCompactNumber(value) {
  return new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(value);
}

/**
 * Clamp a number between min and max.
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
