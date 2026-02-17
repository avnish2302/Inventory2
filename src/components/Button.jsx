export default function Button({
  children,
  variant = "primary",
  size = "sm",
  ...props
}) {
  const variants = {
    primary: "bg-amber-800 text-white",
    edit: "bg-blue-900 text-blue-100",
    saveEdit: "bg-green-900 text-green-100",
    delete: "bg-red-900 text-red-100",
    neutral: "bg-zinc-700 text-white",
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
        disabled:cursor-not-allowed   
      `}
    >
      {children}
    </button>
  );
}
