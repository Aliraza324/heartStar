import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { classNames } from "../../utils/helpers";
import { buttonHover } from "../../animations/motionVariants";
import Icon from "./Icon";

const variants = {
  primary:
    "bg-gold-500 text-white hover:bg-gold-400 focus-visible:bg-gold-400 active:bg-gold-600 disabled:bg-gold-500/40",
  dark:
    "bg-ink-900 text-white hover:bg-ink-700 focus-visible:bg-ink-700 active:bg-ink-950 disabled:bg-ink-900/40",
  outline:
    "bg-transparent text-white border border-white/25 hover:border-gold-400 hover:text-gold-300 focus-visible:border-gold-400 active:border-gold-500 disabled:border-white/10 disabled:text-white/40",
  ghost:
    "bg-white/90 text-ink-900 hover:bg-white focus-visible:bg-white active:bg-white/80 disabled:bg-white/40",
};

const sizes = {
  sm: "px-5 py-2.5 text-xs gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-sm gap-2.5",
};

const MotionLink = motion.create ? motion.create(Link) : motion(Link);

/**
 * Shared CTA button. Renders a react-router <Link> for internal `to`,
 * an <a> for external `href`, or a <button> otherwise.
 */
const Button = forwardRef(function Button(
  {
    children,
    variant = "primary",
    size = "md",
    icon = "arrow-right",
    iconPosition = "right",
    to,
    href,
    className,
    disabled,
    type = "button",
    ...rest
  },
  ref
) {
  const classes = classNames(
    "group relative inline-flex select-none items-center justify-center rounded-full font-bold uppercase tracking-wide",
    "transition-colors duration-250 cursor-pointer",
    "disabled:cursor-not-allowed disabled:pointer-events-none",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <Icon name={icon} className="size-3.5 transition-transform duration-250 group-hover:-translate-x-0.5" />
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <Icon name={icon} className="size-3.5 transition-transform duration-250 group-hover:translate-x-0.5" />
      )}
    </>
  );

  const motionProps = disabled
    ? {}
    : {
        variants: buttonHover,
        initial: "rest",
        whileHover: "hover",
        whileTap: "tap",
      };

  if (to && !disabled) {
    return (
      <MotionLink ref={ref} to={to} className={classes} {...motionProps} {...rest}>
        {content}
      </MotionLink>
    );
  }

  if (href && !disabled) {
    const MotionA = motion.a;
    return (
      <MotionA
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...motionProps}
        {...rest}
      >
        {content}
      </MotionA>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      className={classes}
      disabled={disabled}
      {...motionProps}
      {...rest}
    >
      {content}
    </motion.button>
  );
});

export default Button;
