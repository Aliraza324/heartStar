import { classNames } from "../../utils/helpers";
import Badge from "./Badge";
import { FadeUp } from "../../animations/AnimatedWrappers";

/**
 * Composed eyebrow + heading + description block shared across sections.
 */
export default function SectionTitle({
  eyebrow,
  badgeVariant = "star",
  heading,
  headingFont = "font-serif",
  description,
  align = "left",
  theme = "dark",
  className,
  headingClassName,
  descriptionClassName,
}) {
  const isCenter = align === "center";

  return (
    <div className={classNames("flex flex-col gap-4", isCenter && "items-center text-center", className)}>
      {eyebrow && (
        <FadeUp as="div">
          <Badge variant={badgeVariant}>{eyebrow}</Badge>
        </FadeUp>
      )}
      {heading && (
        <FadeUp as="h2" delay={0.05}>
          <span
            className={classNames(
              headingFont,
              "text-balance text-3xl font-normal leading-tight sm:text-4xl lg:text-5xl",
              theme === "dark" ? "text-white" : "text-ink-900",
              headingClassName
            )}
          >
            {heading}
          </span>
        </FadeUp>
      )}
      {description && (
        <FadeUp delay={0.1}>
          <p
            className={classNames(
              "max-w-2xl text-base leading-relaxed sm:text-lg",
              theme === "dark" ? "text-muted-200" : "text-ink-700/80",
              descriptionClassName
            )}
          >
            {description}
          </p>
        </FadeUp>
      )}
    </div>
  );
}
