import { classNames } from "../../utils/helpers";
import Icon from "./Icon";

/**
 * Small eyebrow / tagline label used above section headings.
 * variant "plain" — gold uppercase text only (Programs, Pillars, Podcast)
 * variant "star"  — star icon + gold uppercase text (WhyUs, HowItWorks, Testimonials, FAQ, Insights)
 * variant "pill"  — gradient pill with dot + white text (About)
 */
export default function Badge({ variant = "plain", children, className }) {
  if (variant === "pill") {
    return (
      <span
        className={classNames(
          "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-4 py-2 text-xs font-bold text-white shadow-badge",
          className
        )}
      >
        <span className="size-1.5 rounded-full bg-white" aria-hidden="true" />
        {children}
      </span>
    );
  }

  if (variant === "star") {
    return (
      <span
        className={classNames(
          "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-gold-400",
          className
        )}
      >
        <Icon name="star" className="size-3 fill-gold-400 text-gold-400" />
        {children}
      </span>
    );
  }

  return (
    <span
      className={classNames(
        "inline-block text-xs font-bold uppercase tracking-[0.15em] text-gold-400",
        className
      )}
    >
      {children}
    </span>
  );
}
