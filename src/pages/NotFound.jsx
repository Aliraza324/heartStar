import Button from "../components/ui/Button";
import SEO from "../components/common/SEO";
import { FadeUp } from "../animations/AnimatedWrappers";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-ink-800 px-6 py-24 text-center">
      <SEO title="Page Not Found — Heartstar Dynamics" description="The page you're looking for doesn't exist." path="/404" />
      <FadeUp>
        <span className="font-serif text-7xl text-gold-500 sm:text-8xl">404</span>
      </FadeUp>
      <FadeUp delay={0.08} as="h1" className="font-serif text-3xl text-white sm:text-4xl">
        This path hasn't been mapped yet.
      </FadeUp>
      <FadeUp delay={0.16} className="max-w-md text-base text-white/60">
        The page you're looking for may have moved. Let's get you back to solid ground.
      </FadeUp>
      <FadeUp delay={0.24}>
        <Button to="/">Back to Home</Button>
      </FadeUp>
    </section>
  );
}
