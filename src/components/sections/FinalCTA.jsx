import ctaBg from "../../assets/images/cta/final-cta-bg.jpg";
import EmailCaptureForm from "../common/EmailCaptureForm";
import { Scale, FadeUp } from "../../animations/AnimatedWrappers";
import { finalCtaContent } from "../../data/contact";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <img
        src={ctaBg}
        alt="A misty mountain lake at sunset, evoking calm sovereign clarity"
        className="absolute inset-0 size-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-ink-900/50" />

      <div className="container-page relative flex justify-center">
        <Scale className="w-full max-w-2xl rounded-[32px] border border-white/10 bg-white/10 p-8 text-center shadow-panel backdrop-blur-xl sm:p-12">
          <FadeUp as="h2" className="font-display text-3xl leading-tight text-white sm:text-4xl">
            {finalCtaContent.heading}
          </FadeUp>
          <FadeUp delay={0.08} className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/80">
            {finalCtaContent.description}
          </FadeUp>
          <FadeUp delay={0.16} className="mt-8">
            <EmailCaptureForm
              variant="split"
              placeholder={finalCtaContent.placeholder}
              buttonLabel={finalCtaContent.cta.label}
              id="final-cta-email"
            />
          </FadeUp>
        </Scale>
      </div>
    </section>
  );
}
