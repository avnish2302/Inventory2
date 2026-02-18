export default function Button({
  children,
  variant = "primary",
  size = "sm",
  ...props
}) {
  const variants = {
    primary:
      "bg-amber-800 text-white hover:bg-amber-900",

    edit:
      "bg-blue-900 text-blue-100 hover:bg-blue-950",

    saveEdit:
      "bg-green-900 text-green-100 hover:bg-green-950",

    delete:
      "bg-red-900 text-red-100 hover:bg-red-950",

    neutral:
      "bg-zinc-800 text-white hover:bg-zinc-700",
  };

  const sizes = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2 text-base",
  };

  return (
    <button
      {...props}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        rounded
        font-medium
        whitespace-nowrap

        cursor-pointer
        transition-colors duration-200       
        disabled:cursor-not-allowed
      `}
    >
      {children}
    </button>
  );
}
