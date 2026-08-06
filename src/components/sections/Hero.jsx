import { motion } from "framer-motion";
import heroBg from "../../assets/images/hero/hero-background.jpg";
import avatar1 from "../../assets/images/hero/avatar-1.jpg";
import avatar2 from "../../assets/images/hero/avatar-2.jpg";
import Button from "../ui/Button";
import IconCircle from "../ui/IconCircle";
import Icon from "../ui/Icon";
import { FadeUp, FadeRight, FadeLeft, Stagger, StaggerItem } from "../../animations/AnimatedWrappers";
import { heroStats, heroWorkshopBadge, livesImpactedWidget } from "../../data/hero";

const avatarMap = { "avatar-1": avatar1, "avatar-2": avatar2, "avatar-3": avatar1 };

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-ink-900 pb-24 pt-36 sm:pb-28 sm:pt-40 lg:pb-32 lg:pt-44">
      <img
        src={heroBg}
        alt="A client standing at the edge of a mountain overlook at sunset, arms open, symbolizing sovereign clarity"
        className="absolute inset-0 size-full object-cover object-[85%_center]"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/40" />

      <div className="container-page relative">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="flex flex-col items-start gap-6 lg:col-span-7">
            <FadeUp as="h1" className="font-hero text-4xl leading-[1.1] text-white text-balance sm:text-5xl lg:text-[64px]">
              Rewrite how
              <br />
              you show up
              <br />
              when it <span className="text-gold-500">matters</span> most.
            </FadeUp>

            <FadeUp delay={0.1} className="max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
              Step into your highest capacity, led from within, and create impact that lasts. Experience custom
              tailored sovereign coaching.
            </FadeUp>

            <FadeUp delay={0.2} className="flex flex-wrap items-center gap-5 pt-2">
              <Button to="/#contact" size="lg">
                Book Your Conversation
              </Button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex cursor-pointer items-center gap-3 text-sm font-semibold text-white transition-colors duration-200 hover:text-gold-300"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-colors duration-200 group-hover:bg-white/25">
                  <Icon name="play" className="size-4 translate-x-0.5 fill-white" />
                </span>
                Watch Intro
              </motion.button>
            </FadeUp>
          </div>
        </div>

        {/* Floating badges over the photo (desktop) */}
        <FadeRight delay={0.3} className="mt-10 hidden max-w-xs lg:absolute lg:right-0 lg:top-[8%] lg:mt-0 lg:block">
          <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-ink-900/60 p-4 shadow-panel backdrop-blur-xl">
            <IconCircle icon={heroWorkshopBadge.icon} tone="dark" />
            <div className="leading-tight">
              <p className="font-sans text-xl font-extrabold text-white">{heroWorkshopBadge.value}</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-200">{heroWorkshopBadge.label}</p>
            </div>
          </div>
        </FadeRight>

        <FadeLeft delay={0.4} className="mt-6 max-w-[220px] lg:absolute lg:bottom-[26%] lg:right-0 lg:mt-0">
          <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-ink-900/60 p-4 shadow-panel backdrop-blur-xl">
            <p className="text-sm text-white/80">{livesImpactedWidget.label}</p>
            <p className="font-sans text-3xl font-extrabold text-cream-100">{livesImpactedWidget.value}</p>
            <div className="flex items-center -space-x-2">
              {livesImpactedWidget.avatars.map((key) => (
                <img
                  key={key}
                  src={avatarMap[key]}
                  alt=""
                  className="size-6 rounded-full border-2 border-ink-900 object-cover"
                  loading="lazy"
                />
              ))}
              <span className="flex size-6 items-center justify-center rounded-full border-2 border-ink-900 bg-gold-500 text-[10px] font-bold text-white">
                +
              </span>
            </div>
          </div>
        </FadeLeft>

        <Stagger
          className="relative mt-12 grid grid-cols-1 gap-6 rounded-3xl border border-white/10 bg-ink-900/60 p-6 shadow-panel backdrop-blur-xl sm:grid-cols-3 lg:max-w-3xl lg:p-8"
          staggerChildren={0.1}
        >
          {heroStats.map((stat, i) => (
            <StaggerItem key={stat.label} className="flex items-center gap-4">
              <IconCircle icon={stat.icon} tone="dark" />
              <div className="leading-tight">
                <p className="font-sans text-2xl font-extrabold text-white">{stat.value}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-200">{stat.label}</p>
              </div>
              {i < heroStats.length - 1 && (
                <span className="ml-auto hidden h-12 w-px bg-white/10 sm:block" aria-hidden="true" />
              )}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
