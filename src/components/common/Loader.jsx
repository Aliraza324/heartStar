import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logoMark from "../../assets/logo/logo-mark.png";

const MIN_DISPLAY_MS = 900;

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const start = Date.now();

    function finish() {
      const remaining = Math.max(MIN_DISPLAY_MS - (Date.now() - start), 0);
      window.setTimeout(() => setLoading(false), remaining);
    }

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
      return () => window.removeEventListener("load", finish);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-ink-900"
        >
          <div className="flex flex-col items-center gap-7">
            <motion.img
              src={logoMark}
              alt="Heartstar Dynamics"
              className="h-12 w-auto"
              animate={{ scale: [1, 1.08, 1], opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="size-9 animate-spin rounded-full border-2 border-white/10 border-t-gold-500" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
