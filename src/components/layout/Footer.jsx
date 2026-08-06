import { Link } from "react-router-dom";
import logoMark from "../../assets/logo/logo-mark.png";
import codesincLogo from "../../assets/logo/logo-wordmark.png";
import footerBg from "../../assets/images/footer/footer-bg.jpg";
import EmailCaptureForm from "../common/EmailCaptureForm";
import SocialIcon from "../ui/SocialIcon";
import { footerExploreLinks, socialLinks } from "../../data/navigation";
import { contactInfo, footerCta } from "../../data/contact";
import { FadeUp, Stagger, StaggerItem } from "../../animations/AnimatedWrappers";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-ink-900 text-white">
      <img src={footerBg} alt="" aria-hidden="true" className="absolute inset-0 size-full object-cover opacity-70" loading="lazy" />
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-0 w-64 opacity-[0.06] sm:w-80"
        loading="lazy"
      />

      <div className="container-page relative py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr]">
          <FadeUp className="flex flex-col items-start gap-4">
            <img src={logoMark} alt="Heartstar Dynamics" width={110} height={104} className="h-24 w-auto" />
            <div className="leading-none">
              <p className="font-sans text-2xl font-extrabold tracking-wide text-white">HEART STAR</p>
              <p className="font-sans text-sm font-semibold tracking-[0.25em] text-gold-500">DYNAMICS</p>
            </div>
          </FadeUp>

          <div className="flex flex-col gap-10">
            <FadeUp className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">{footerCta.heading}</h2>
              <div className="w-full max-w-md">
                <EmailCaptureForm variant="inline" placeholder={footerCta.placeholder} id="footer-email" />
              </div>
            </FadeUp>

            <div className="h-px w-full bg-white/10" aria-hidden="true" />

            <Stagger className="grid grid-cols-1 gap-8 sm:grid-cols-3" staggerChildren={0.1}>
              <StaggerItem className="border-white/10 sm:border-r sm:pr-8">
                <h3 className="font-footer-heading text-lg font-semibold text-white">{contactInfo.address.label}</h3>
                <p className="mt-4 font-footer-body text-base leading-relaxed text-white/60">
                  {contactInfo.address.lines[0]}
                  <br />
                  {contactInfo.address.lines[1]}
                </p>
              </StaggerItem>

              <StaggerItem className="border-white/10 sm:border-r sm:pr-8">
                <h3 className="font-footer-heading text-lg font-semibold text-white">{contactInfo.contact.label}</h3>
                <div className="mt-4 flex flex-col gap-2 font-footer-body text-base text-white/60">
                  <a href={`mailto:${contactInfo.contact.email}`} className="cursor-pointer transition-colors duration-200 hover:text-gold-400">
                    {contactInfo.contact.email}
                  </a>
                  <a href={`tel:${contactInfo.contact.phone.replace(/[^+\d]/g, "")}`} className="cursor-pointer transition-colors duration-200 hover:text-gold-400">
                    {contactInfo.contact.phone}
                  </a>
                </div>
              </StaggerItem>

              <StaggerItem>
                <h3 className="font-footer-heading text-lg font-semibold text-white">{contactInfo.socials.label}</h3>
                <div className="mt-4 flex items-center gap-3">
                  {socialLinks.map((s) => (
                    <SocialIcon key={s.label} {...s} />
                  ))}
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-6 border-t border-white/10 pt-8 sm:mt-16 sm:pt-10 lg:flex-row lg:justify-between">
          <a
            href="https://www.codes-inc.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="order-2 flex items-center gap-2 opacity-80 transition-opacity duration-200 hover:opacity-100 lg:order-1"
          >
            <img src={codesincLogo} alt="Designed and hosted by Codesinc." className="h-6 w-auto" />
          </a>

          <p className="order-3 font-footer-body text-sm text-white/50 lg:order-2">
            Copyright © 2026 HeartStar. All rights reserved.
          </p>

          <nav aria-label="Footer" className="order-1 lg:order-3">
            <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 font-footer-body text-sm text-white/70">
              {footerExploreLinks.map((link, i) => (
                <li key={link.label} className="flex items-center gap-2">
                  <Link to={link.href} className="cursor-pointer transition-colors duration-200 hover:text-gold-400">
                    {link.label}
                  </Link>
                  {i < footerExploreLinks.length - 1 && <span className="text-white/20">•</span>}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
