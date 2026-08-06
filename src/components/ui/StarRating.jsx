import { classNames } from "../../utils/helpers";
import Icon from "./Icon";

export default function StarRating({ count = 5, className }) {
  return (
    <div className={classNames("flex items-center gap-1", className)} role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          className={classNames("size-3.5", i < count ? "fill-gold-400 text-gold-400" : "fill-transparent text-white/20")}
        />
      ))}
    </div>
  );
}
