import Icon from "../ui/Icon";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import { Stagger, StaggerItem } from "../../animations/AnimatedWrappers";
import { insights, insightsContent } from "../../data/insights";

export default function Insights() {
  return (
    <section id="resources" className="bg-ink-700 py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <SectionTitle
          align="center"
          eyebrow={insightsContent.eyebrow}
          heading={insightsContent.heading}
          description={insightsContent.description}
          className="mx-auto max-w-2xl"
        />

        <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerChildren={0.12}>
          {insights.map((item) => (
            <StaggerItem key={item.id}>
              <Card className="flex h-full flex-col overflow-hidden rounded-[28px] bg-ink-800 shadow-card-soft ring-1 ring-white/5">
                <div className="h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="text-xs font-bold uppercase tracking-wide text-gold-400">{item.eyebrow}</span>
                  <h3 className="font-display text-xl leading-snug text-white">{item.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-white/60">{item.description}</p>
                  <span className="mt-1 inline-flex w-fit cursor-pointer items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-gold-400 transition-colors duration-200 hover:text-gold-300">
                    {item.cta}
                    <Icon name="arrow-right" className="size-3" />
                  </span>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
