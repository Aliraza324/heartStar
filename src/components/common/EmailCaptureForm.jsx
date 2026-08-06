import { useState } from "react";
import { motion } from "framer-motion";
import Input from "../ui/Input";
import Icon from "../ui/Icon";
import { classNames } from "../../utils/helpers";

/**
 * variant "split"  — pill input + separate labeled gold button (Final CTA)
 * variant "inline" — dark pill input with an inline circular gold submit icon (Footer)
 */
export default function EmailCaptureForm({ variant = "split", placeholder = "Enter Your E-mail", buttonLabel = "Submit", id }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  }

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className="flex w-full items-center rounded-full bg-white/10 pr-1.5 backdrop-blur-sm">
        <Input
          id={id}
          type="email"
          required
          label={placeholder}
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-0 bg-transparent text-white placeholder:text-white/50 focus-visible:ring-0"
        />
        <motion.button
          type="submit"
          aria-label="Submit email"
          whileHover={{ scale: 1.08, rotate: 8 }}
          whileTap={{ scale: 0.94 }}
          className="inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-gold-500 text-white transition-colors duration-200 hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300"
        >
          <Icon name="arrow-up-right" className="size-4" />
        </motion.button>
        {submitted && (
          <span className="sr-only" role="status">
            Thanks — we'll be in touch.
          </span>
        )}
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3 sm:flex-row">
      <Input
        id={id}
        type="email"
        required
        label={placeholder}
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white sm:flex-1"
      />
      <motion.button
        type="submit"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={classNames(
          "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-xs font-bold uppercase tracking-wide text-white",
          "transition-colors duration-200 hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300"
        )}
      >
        {buttonLabel}
        <Icon name="arrow-right" className="size-3.5" />
      </motion.button>
      {submitted && (
        <span className="sr-only" role="status">
          Thanks — we'll be in touch.
        </span>
      )}
    </form>
  );
}
