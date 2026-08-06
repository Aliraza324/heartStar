import IconCircle from "../ui/IconCircle";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import { Stagger, StaggerItem } from "../../animations/AnimatedWrappers";
import { pillars, pillarsContent } from "../../data/pillars";

export default function Pillars() {
  return (
    <section className="bg-ink-700 py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <SectionTitle
          align="center"
          badgeVariant="plain"
          eyebrow={pillarsContent.eyebrow}
          heading={pillarsContent.heading}
          className="mx-auto max-w-3xl"
        />

        <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerChildren={0.12}>
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <Card className="h-full rounded-[28px] bg-gradient-to-br from-gold-900 to-[#2d1e0a] p-8 ring-1 ring-white/5">
                <IconCircle icon={pillar.icon} tone="gold" size="lg" className="bg-gold-500/20" />
                <h3 className="mt-6 font-serif text-2xl text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">{pillar.description}</p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
