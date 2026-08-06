import aboutImg1 from "../../assets/images/about/about-img-1.jpg";
import aboutImg2 from "../../assets/images/about/about-img-2.jpg";
import avatar1 from "../../assets/images/about/avatar-client-1.jpg";
import avatar2 from "../../assets/images/about/avatar-client-2.jpg";
import avatar3 from "../../assets/images/about/avatar-client-3.jpg";
import avatar4 from "../../assets/images/about/avatar-client-4.jpg";
import avatar5 from "../../assets/images/about/avatar-client-5.jpg";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import IconCircle from "../ui/IconCircle";
import { FadeUp, FadeLeft, FadeRight } from "../../animations/AnimatedWrappers";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

export default function About() {
  return (
    <section id="about" className="bg-ink-800 py-20 sm:py-24 lg:py-28">
      <div className="container-page grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <FadeRight className="relative flex justify-center lg:justify-start">
          <span
            className="hidden -rotate-90 whitespace-nowrap text-xs font-bold uppercase tracking-[0.3em] text-white/60 lg:absolute lg:-left-10 lg:top-1/2 lg:block lg:-translate-y-1/2"
            aria-hidden="true"
          >
            5200+ Five Star Reviews
          </span>

          <div className="relative w-full max-w-md">
            <img
              src={aboutImg1}
              alt="Andreas leading a private somatic coaching session in a softly lit studio"
              className="w-full rounded-[32px] object-cover shadow-card transition-transform duration-500 hover:scale-[1.02]"
              loading="lazy"
            />

            <div className="absolute -left-6 top-6 flex w-48 flex-col gap-3 rounded-3xl bg-gradient-to-br from-gold-600 to-gold-400 p-5 shadow-gold-lg sm:-left-10">
              <IconCircle icon="award" tone="white" size="sm" />
              <p className="font-sans text-lg font-bold leading-snug text-white">30 + years of experience</p>
            </div>

            <img
              src={aboutImg2}
              alt="A client in an outdoor integration session, seated and present"
              className="absolute -bottom-10 right-0 w-40 rounded-3xl border-4 border-ink-800 object-cover shadow-card sm:w-48"
              loading="lazy"
            />
          </div>
        </FadeRight>

        <FadeLeft delay={0.1} className="flex flex-col items-start gap-6">
          <Badge variant="pill">About us</Badge>
          <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl">Your Journey Begins Within</h2>
          <p className="max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
            Real transformation doesn't start by changing the world around you—it begins by changing the way you
            experience it. Whether you're seeking clarity, confidence, or a greater sense of purpose, every step is
            designed to help you move forward with intention.
          </p>

          <ul className="flex flex-col gap-3">
            {[
              "We helps individuals reconnect with themselves",
              "Develop deeper awareness, and create lasting personal growth",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                <span className="text-base font-semibold text-white sm:text-lg">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-8 pt-2">
            <div className="flex flex-col gap-2">
              <div className="flex -space-x-3">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="size-10 rounded-full border-2 border-ink-800 object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
              <p className="text-sm text-white/60">Join our 5000+ satisfied client</p>
            </div>

            <div className="flex items-center gap-3">
              <IconCircle icon="sparkles" tone="gold-solid" size="sm" />
              <div className="leading-tight">
                <p className="text-base font-bold text-white">Creative Result</p>
                <p className="text-sm text-white/60">Award wining</p>
              </div>
            </div>
          </div>

          <div className="h-px w-full max-w-lg bg-white/10" aria-hidden="true" />

          <FadeUp>
            <Button to="/#contact" variant="primary" icon="arrow-up-right">
              Get In Touch
            </Button>
          </FadeUp>
        </FadeLeft>
      </div>
    </section>
  );
}
