import { motion } from "framer-motion";
import { classNames } from "../../utils/helpers";
import { cardHover } from "../../animations/motionVariants";

/**
 * Generic hover-lift card shell. Compose section-specific card content inside.
 */
export default function Card({ as: Tag = "div", className, children, ...rest }) {
  const MotionTag = motion[Tag] ?? motion.div;
  return (
    <MotionTag
      className={classNames("group cursor-pointer", className)}
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
