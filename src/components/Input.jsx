import { forwardRef } from "react";

const Input = forwardRef(
  ({ label, textarea, ...props }, ref) => {
    return (
      <div className="flex justify-between items-start gap-3">
        <label className="text-sm w-32 mt-2">
          {label}
        </label>

        {textarea ? (
          <textarea
            ref={ref}
            {...props}
            rows={4}
            className="
              bg-zinc-800
              border border-zinc-700
              px-3 py-2
              rounded
              w-full
              resize-none
            "
          />
        ) : (
          <input
            ref={ref}
            {...props}
            className="
              bg-zinc-800
              border border-zinc-700
              px-3 py-2
              rounded
              w-full
            "
          />
        )}
      </div>
    );
  }
);

export default Input;
