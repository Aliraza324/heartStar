import Button from "../ui/Button";
import { FadeRight, FadeLeft } from "../../animations/AnimatedWrappers";
import { liveStageCard, podcastCard } from "../../data/promo";

export default function PromoRow() {
  return (
    <section className="bg-ink-800 py-20 sm:py-24 lg:py-28">
      <div className="container-page grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr]">
        <FadeRight className="overflow-hidden rounded-[28px] shadow-card">
          <img
            src={liveStageCard.image}
            alt="Andreas delivering a keynote on stage under dramatic lighting"
            className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-full"
            loading="lazy"
          />
        </FadeRight>

        <FadeLeft
          delay={0.1}
          className="relative flex min-h-64 flex-col justify-center gap-4 overflow-hidden rounded-[28px] border border-gold-700/40 p-8 sm:min-h-full sm:p-12"
        >
          <img
            src={podcastCard.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 size-full object-cover opacity-30"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink-900/90 via-ink-900/70 to-gold-900/40" />
          <div className="relative flex flex-col items-start gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">{podcastCard.eyebrow}</span>
            <h2 className="font-sans text-3xl font-light text-white sm:text-4xl">{podcastCard.heading}</h2>
            <p className="text-base text-white/70">{podcastCard.description}</p>
            <Button to="/#resources" icon={null} className="mt-2">
              {podcastCard.cta.label}
            </Button>
          </div>
        </FadeLeft>
      </div>
    </section>
  );
}
