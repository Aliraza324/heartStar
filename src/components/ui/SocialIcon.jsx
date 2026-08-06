import { FaDribbble, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { classNames } from "../../utils/helpers";

const registry = {
  dribbble: FaDribbble,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
};

export default function SocialIcon({ icon, label, href, className }) {
  const Cmp = registry[icon];
  if (!Cmp) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={classNames(
        "inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-white",
        "transition-all duration-250 hover:-translate-y-1 hover:border-gold-400 hover:bg-gold-500 hover:text-white",
        "focus-visible:-translate-y-1 focus-visible:border-gold-400 focus-visible:bg-gold-500",
        "active:translate-y-0 cursor-pointer",
        className
      )}
    >
      <Cmp className="size-4" aria-hidden="true" />
    </a>
  );
}
