import { classNames } from "../../utils/helpers";
import Icon from "./Icon";

const sizes = {
  sm: "size-8 [&>svg]:size-3.5",
  md: "size-12 [&>svg]:size-5",
  lg: "size-14 [&>svg]:size-6",
};

const tones = {
  gold: "bg-gold-500/15 text-gold-400",
  dark: "bg-ink-900/60 text-gold-400",
  white: "bg-white text-gold-500",
  "gold-solid": "bg-gold-500 text-white",
};

export default function IconCircle({ icon, size = "md", tone = "dark", className }) {
  return (
    <span
      className={classNames(
        "inline-flex shrink-0 items-center justify-center rounded-full transition-transform duration-300",
        sizes[size],
        tones[tone],
        className
      )}
    >
      <Icon name={icon} />
    </span>
  );
}
