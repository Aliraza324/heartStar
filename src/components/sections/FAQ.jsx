import aboutImgFull from "../../assets/images/about/about-img-1-full.jpg";
import Badge from "../ui/Badge";
import Accordion from "../ui/Accordion";
import { FadeUp, FadeRight, FadeLeft } from "../../animations/AnimatedWrappers";
import { faqs, faqContent } from "../../data/faq";

export default function FAQ() {
  return (
    <section className="bg-ink-900 py-20 sm:py-24 lg:py-28">
      <div className="container-page grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-12">
        <FadeRight>
          <img
            src={aboutImgFull}
            alt="Andreas leading a barefoot, present-moment coaching session"
            className="w-full rounded-[32px] object-cover shadow-card lg:sticky lg:top-28"
            loading="lazy"
          />
        </FadeRight>

        <FadeLeft delay={0.1} className="flex flex-col gap-6">
          <Badge variant="star">{faqContent.eyebrow}</Badge>
          <FadeUp as="h2" className="font-serif text-4xl leading-tight text-white sm:text-5xl">
            {faqContent.heading}
          </FadeUp>
          <p className="max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">{faqContent.description}</p>

          <div className="pt-2">
            <Accordion items={faqs} defaultOpenIndex={1} />
          </div>
        </FadeLeft>
      </div>
    </section>
  );
}
