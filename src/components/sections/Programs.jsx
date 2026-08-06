import { Link } from "react-router-dom";
import Badge from "../ui/Badge";
import IconCircle from "../ui/IconCircle";
import Icon from "../ui/Icon";
import Card from "../ui/Card";
import { FadeUp, FadeLeft, Stagger, StaggerItem } from "../../animations/AnimatedWrappers";
import { programs, programsContent } from "../../data/programs";

function ProgramCard({ program }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-[28px] bg-ink-700/60 shadow-card-soft ring-1 ring-white/5">
      <div className="relative h-56">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={program.image}
            alt=""
            loading="lazy"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute -bottom-6 left-6">
          <IconCircle icon={program.icon} tone="white" />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-6 pb-6 pt-10">
        <h3 className="font-serif text-2xl text-white">{program.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-white/60">{program.description}</p>
        <Link
          to="/#programs"
          className="inline-flex w-fit cursor-pointer items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-gold-400 transition-colors duration-200 hover:text-gold-300"
        >
          Learn More
          <Icon name="chevron-up" className="size-3 rotate-90" />
        </Link>
      </div>
    </Card>
  );
}

export default function Programs() {
  return (
    <section id="programs" className="bg-ink-800 py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <FadeUp className="flex flex-col gap-4">
            <Badge variant="plain">{programsContent.eyebrow}</Badge>
            <h2 className="font-serif text-4xl text-white sm:text-5xl">{programsContent.heading}</h2>
          </FadeUp>
          <FadeLeft delay={0.1} className="max-w-sm text-base leading-relaxed text-white/60">
            {programsContent.description}
          </FadeLeft>
        </div>

        <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerChildren={0.12}>
          {programs.map((program) => (
            <StaggerItem key={program.id} className="h-full">
              <ProgramCard program={program} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
