import { motion } from "framer-motion";
import Badge from "../ui/Badge";
import Icon from "../ui/Icon";
import StarRating from "../ui/StarRating";
import Card from "../ui/Card";
import { FadeUp, Scale, Stagger, StaggerItem } from "../../animations/AnimatedWrappers";
import { testimonials, testimonialsContent, featuredTestimonial } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-ink-700 py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <FadeUp>
            <Badge variant="star">{testimonialsContent.eyebrow}</Badge>
          </FadeUp>
          <FadeUp as="h2" delay={0.05} className="font-display text-3xl text-white sm:text-4xl lg:text-5xl">
            {testimonialsContent.heading}
          </FadeUp>
          <FadeUp delay={0.1} className="text-base leading-relaxed text-white/60 sm:text-lg">
            {testimonialsContent.description}
          </FadeUp>
        </div>

        <Scale className="relative mt-14 overflow-hidden rounded-[32px] shadow-card">
          <img
            src={featuredTestimonial.image}
            alt={`${featuredTestimonial.name}, ${featuredTestimonial.title}, in conversation over coffee`}
            className="h-[280px] w-full object-cover sm:h-[380px] lg:h-[460px]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
          <motion.button
            type="button"
            aria-label="Play testimonial video"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-1/2 top-1/2 inline-flex size-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-ink-900 shadow-panel backdrop-blur-sm transition-colors duration-200 hover:bg-white"
          >
            <Icon name="play" className="size-6 translate-x-0.5 fill-ink-900" />
          </motion.button>
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10">
            <p className="font-display text-xl text-white sm:text-2xl">{featuredTestimonial.name}</p>
            <p className="text-sm text-white/70 sm:text-base">{featuredTestimonial.title}</p>
          </div>
        </Scale>

        <Stagger className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3" staggerChildren={0.12}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <Card className="relative flex h-56 items-end overflow-hidden rounded-[28px] shadow-card-soft sm:h-64">
                <img
                  src={t.image}
                  alt={`${t.name}, ${t.title}`}
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/20 to-transparent" />
                <div className="relative flex flex-col gap-1 p-5">
                  <StarRating count={t.rating} />
                  <p className="font-display text-lg text-white">{t.name}</p>
                  <p className="text-xs text-white/70">{t.title}</p>
                  <span className="mt-2 inline-flex w-fit cursor-pointer items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-gold-400 transition-colors duration-200 hover:text-gold-300">
                    Watch Video Story
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
