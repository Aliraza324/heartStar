import { motion } from "framer-motion";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import StarRating from "../ui/StarRating";
import { FadeUp, FadeLeft, FadeRight, Stagger, StaggerItem } from "../../animations/AnimatedWrappers";
import { whyUsContent, whyUsFeatures } from "../../data/whyUs";
import avatarClient1 from "../../assets/images/about/avatar-client-1.jpg";

export default function WhyUs() {
  return (
    <section id="framework" className="bg-ink-900 py-20 sm:py-24 lg:py-28">
      <div className="container-page grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <FadeRight className="flex flex-col items-start gap-6">
          <Badge variant="star">{whyUsContent.eyebrow}</Badge>
          <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl">{whyUsContent.heading}</h2>
          <p className="max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">{whyUsContent.description}</p>

          <Stagger className="flex flex-col gap-5 pt-2" staggerChildren={0.1}>
            {whyUsFeatures.map((feature) => (
              <StaggerItem key={feature.title} className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-ink-700 text-gold-400">
                  <Icon name="check-circle" className="size-4" />
                </span>
                <div>
                  <p className="text-base font-bold text-white sm:text-lg">{feature.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/60 sm:text-base">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeUp delay={0.2} className="pt-2">
            <Button to="/#contact">Discover Your Path</Button>
          </FadeUp>
        </FadeRight>

        <FadeLeft delay={0.15} className="relative">
          <div className="group relative overflow-hidden rounded-[32px] shadow-card">
            <img
              src={whyUsContent.video.image}
              alt="Andreas guiding a small-group session in a warm, plant-filled living room"
              className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:aspect-square lg:aspect-4/5"
              loading="lazy"
            />
            <motion.button
              type="button"
              aria-label="Play intro video"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-1/2 top-1/2 inline-flex size-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-ink-900 shadow-panel backdrop-blur-sm transition-colors duration-200 hover:bg-white"
            >
              <Icon name="play" className="size-6 translate-x-0.5 fill-ink-900" />
            </motion.button>
          </div>

          <div className="absolute -bottom-8 left-4 w-[calc(100%-2rem)] max-w-xs rounded-3xl bg-ink-700/95 p-5 shadow-panel backdrop-blur-xl sm:left-8">
            <StarRating count={5} />
            <p className="mt-3 text-sm italic leading-relaxed text-white/80">“{whyUsContent.video.quote}”</p>
            <div className="mt-4 flex items-center gap-3">
              <img src={avatarClient1} alt="" className="size-9 rounded-full object-cover" loading="lazy" />
              <p className="text-sm font-semibold text-white">{whyUsContent.video.author}</p>
            </div>
          </div>
        </FadeLeft>
      </div>
    </section>
  );
}
