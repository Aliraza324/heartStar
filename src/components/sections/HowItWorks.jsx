import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { FadeUp, FadeLeft, FadeRight, Stagger, StaggerItem } from "../../animations/AnimatedWrappers";
import { howItWorksContent, howItWorksSteps } from "../../data/howItWorks";

export default function HowItWorks() {
  return (
    <section id="coaching" className="bg-ink-900 py-20 sm:py-24 lg:py-28">
      <div className="container-page grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <FadeRight className="relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-sm">
            <img
              src={howItWorksContent.images.primary}
              alt="A coach mapping strategy on a glass whiteboard in a bright office"
              className="w-full rounded-[28px] object-cover shadow-card"
              loading="lazy"
            />
            <img
              src={howItWorksContent.images.secondary}
              alt="Andreas presenting to a small group in a warm living room setting"
              className="absolute -bottom-12 right-0 w-3/5 rounded-[28px] border-4 border-ink-900 object-cover shadow-card sm:-bottom-14"
              loading="lazy"
            />
          </div>
        </FadeRight>

        <FadeLeft delay={0.1} className="flex flex-col items-start gap-6 lg:pl-6">
          <Badge variant="star">{howItWorksContent.eyebrow}</Badge>
          <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl">{howItWorksContent.heading}</h2>
          <p className="max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">{howItWorksContent.description}</p>

          <Stagger className="flex flex-col pt-4" staggerChildren={0.12}>
            {howItWorksSteps.map((step, i) => (
              <StaggerItem key={step.number} className="relative flex gap-5 pb-10 last:pb-0">
                {i < howItWorksSteps.length - 1 && (
                  <span
                    className="absolute left-[19px] top-10 h-[calc(100%-1.5rem)] w-px border-l-2 border-dotted border-gold-600/50"
                    aria-hidden="true"
                  />
                )}
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold-500 text-sm font-bold text-white">
                  {step.number}
                </span>
                <div>
                  <p className="text-lg font-bold text-white">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/60 sm:text-base">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeUp delay={0.2}>
            <Button to="/#contact">{howItWorksContent.cta.label}</Button>
          </FadeUp>
        </FadeLeft>
      </div>
    </section>
  );
}
