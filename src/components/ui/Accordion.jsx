import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { classNames } from "../../utils/helpers";
import Icon from "./Icon";

/**
 * Single-open accordion. `items` = [{ question, answer }].
 */
export default function Accordion({ items, defaultOpenIndex = -1 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);
  const baseId = useId();

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div
            key={item.question}
            className={classNames(
              "rounded-3xl border bg-ink-800/60 transition-colors duration-300",
              isOpen ? "border-gold-400/60" : "border-white/10 hover:border-white/20"
            )}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 sm:px-7 sm:py-6"
              >
                <span className="text-base font-bold text-white sm:text-lg">{item.question}</span>
                <Icon
                  name={isOpen ? "chevron-up" : "chevron-down"}
                  className="size-4 shrink-0 text-white transition-transform duration-300"
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-sm leading-relaxed text-white/60 sm:px-7 sm:text-base">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
