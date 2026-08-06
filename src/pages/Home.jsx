import { motion } from "framer-motion";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Programs from "../components/sections/Programs";
import WhyUs from "../components/sections/WhyUs";
import Pillars from "../components/sections/Pillars";
import HowItWorks from "../components/sections/HowItWorks";
import Testimonials from "../components/sections/Testimonials";
import PromoRow from "../components/sections/PromoRow";
import FAQ from "../components/sections/FAQ";
import Insights from "../components/sections/Insights";
import FinalCTA from "../components/sections/FinalCTA";
import SEO from "../components/common/SEO";
import { pageTransition } from "../animations/motionVariants";

export default function Home() {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
      <SEO
        title="Heartstar Dynamics — Sovereign Coaching for Emotional Authority"
        description="Rewrite how you show up when it matters most. Custom tailored sovereign coaching, retreats, and keynotes built on clarity, embodiment, and resonance."
        path="/"
      />
      <Hero />
      <About />
      <Programs />
      <WhyUs />
      <Pillars />
      <HowItWorks />
      <Testimonials />
      <PromoRow />
      <FAQ />
      <Insights />
      <FinalCTA />
    </motion.div>
  );
}
