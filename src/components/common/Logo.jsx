import { Link } from "react-router-dom";
import logoMark from "../../assets/logo/logo-mark.png";
import { classNames } from "../../utils/helpers";

export default function Logo({ className, markClassName }) {
  return (
    <Link
      to="/"
      aria-label="Heartstar Dynamics — go to homepage"
      className={classNames("group inline-flex items-center gap-2.5 cursor-pointer", className)}
    >
      <img
        src={logoMark}
        alt=""
        width={35}
        height={33}
        className={classNames("h-8 w-auto transition-transform duration-300 group-hover:scale-110", markClassName)}
      />
      <span className="flex flex-col leading-none">
        <span className="font-sans text-base font-extrabold tracking-wide text-white">HEART STAR</span>
        <span className="font-sans text-[10px] font-semibold tracking-[0.2em] text-gold-500">DYNAMICS</span>
      </span>
    </Link>
  );
}
