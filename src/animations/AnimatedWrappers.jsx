import { motion } from "framer-motion";
import {
  fadeIn,
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  zoomIn,
  staggerContainer,
  viewport,
} from "./motionVariants";



export function FadeIn({ as = "div", className, delay = 0, children, viewportOptions = viewport, ...rest }) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={fadeIn}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function FadeUp({ as = "div", className, delay = 0, children, viewportOptions = viewport, ...rest }) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={fadeUp}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export const SlideUp = FadeUp;

export function FadeDown({ as = "div", className, delay = 0, children, viewportOptions = viewport, ...rest }) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={fadeDown}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function FadeLeft({ as = "div", className, delay = 0, children, viewportOptions = viewport, ...rest }) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={fadeLeft}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function FadeRight({ as = "div", className, delay = 0, children, viewportOptions = viewport, ...rest }) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={fadeRight}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function Reveal({ as = "div", className, delay = 0, children, viewportOptions = viewport, ...rest }) {
  return (
    <FadeUp as={as} className={className} delay={delay} viewportOptions={viewportOptions} {...rest}>
      {children}
    </FadeUp>
  );
}

export function Scale({ as = "div", className, delay = 0, children, viewportOptions = viewport, ...rest }) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={zoomIn}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function Stagger({
  as = "div",
  className,
  staggerChildren = 0.12,
  delayChildren = 0,
  children,
  viewportOptions = viewport,
  ...rest
}) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={staggerContainer(staggerChildren, delayChildren)}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({ as = "div", className, variants = fadeUp, children, ...rest }) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag className={className} variants={variants} {...rest}>
      {children}
    </MotionTag>
  );
}
