import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../common/Logo";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { navLinks } from "../../data/navigation";
import { classNames, scrollToSection } from "../../utils/helpers";
import useActiveSection from "../../hooks/useActiveSection";
import { navReveal } from "../../animations/motionVariants";

const sectionIds = navLinks.map((l) => l.sectionId);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  function handleNavClick(e, link) {
    if (link.sectionId === "hero") {
      if (window.location.pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setMenuOpen(false);
      return;
    }
    e.preventDefault();
    scrollToSection(link.sectionId);
    setMenuOpen(false);
  }

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navReveal}
      className="fixed inset-x-0 top-0 z-50 w-full pt-4 sm:pt-6"
    >
      <div className="container-page">
        <nav
          aria-label="Primary"
          className="flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-[#868080]/40 px-4 py-3 shadow-panel backdrop-blur-2xl sm:px-6 lg:px-8 lg:py-4"
        >
          <Logo />

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeId === link.sectionId;
              return (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={classNames(
                      "group relative inline-flex flex-col items-center gap-1 py-1 text-sm transition-colors duration-200 cursor-pointer",
                      isActive ? "font-bold text-white" : "font-medium text-white/85 hover:text-white"
                    )}
                  >
                    {link.label}
                    <span
                      className={classNames(
                        "h-0.5 w-4 origin-center rounded-full bg-gold-500 transition-transform duration-300",
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Button to="/#contact" size="sm" onClick={(e) => handleNavClick(e, { sectionId: "contact" })}>
              Book A Session
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full text-white transition-colors duration-200 hover:bg-white/10 focus-visible:bg-white/10 lg:hidden"
          >
            <Icon name={menuOpen ? "close" : "menu"} className="size-5" />
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-3 flex flex-col gap-1 rounded-3xl border border-white/10 bg-ink-900/95 p-4 shadow-panel backdrop-blur-2xl">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={classNames(
                      "cursor-pointer rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200",
                      activeId === link.sectionId ? "bg-white/10 text-gold-400" : "text-white/85 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-2 px-2">
                  <Button
                    to="/#contact"
                    size="sm"
                    className="w-full"
                    onClick={(e) => handleNavClick(e, { sectionId: "contact" })}
                  >
                    Book A Session
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
