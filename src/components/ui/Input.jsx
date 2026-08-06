import { forwardRef } from "react";
import { classNames } from "../../utils/helpers";

const Input = forwardRef(function Input({ label, id, className, ...rest }, ref) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        className={classNames(
          "w-full rounded-full border border-transparent px-5 py-3.5 text-sm text-ink-900 placeholder:text-ink-700/50",
          "transition-all duration-200 focus:outline-none focus-visible:border-gold-400 focus-visible:ring-2 focus-visible:ring-gold-400/40",
          className
        )}
        {...rest}
      />
    </div>
  );
});

export default Input;
