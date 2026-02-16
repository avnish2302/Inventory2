export default function Table({ children }) {
  return (
    <div className="overflow-x-auto">
      <table
        className="
          w-full
          border border-zinc-700
          border-collapse
          text-sm
          table-fixed
          bg-zinc-900
        "
      >
        {children}
      </table>
    </div>
  );
}

/* ---------- HEADER ---------- */

function Header({ children }) {
  return (
    <thead className="bg-zinc-800 text-white">
      <tr>{children}</tr>
    </thead>
  );
}


/* ---------- BODY ---------- */

function Body({ data, render }) {
  return <tbody>{data.map(render)}</tbody>;
}

/* ---------- ROW ---------- */

function Row({ children }) {
  return (
    <tr className="
      text-center
      bg-zinc-900
    ">
      {children}
    </tr>
  );
}


/* ---------- CELL ---------- */

function Cell({ children }) {
  return (
    <td
      className="      
        border border-zinc-700
        h-12
        px-2
      "
    >
      <div className="flex items-center justify-center gap-2 h-full">
        {children}
      </div>
    </td>
  );
}


/* ---------- INPUT (Styled) ---------- */

function Input(props) {
  return (
    <input
      {...props}
      className="
        w-full
        h-9
        px-3
        bg-zinc-800       
        rounded-md
        text-center
        outline-none
        focus:border-amber-700
      "
    />
  );
}

/* ---------- BUTTON (Styled) ---------- */

function Button({
  children,
  variant = "primary",
  size = "sm",
  ...props
}) {
  const variants = {
    primary: "bg-amber-800 text-white",

    edit: "bg-blue-900 text-blue-100",
    save: "bg-green-900 text-green-100",
    delete: "bg-red-900 text-red-100",

    neutral: "bg-zinc-700 text-white",
  };

  const sizes = {
    sm: "px-3 py-1 text-xs",   // table buttons
    md: "px-4 py-2 text-sm",   // Add/Save buttons
  };

  return (
    <button
      {...props}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        rounded
      `}
    >
      {children}
    </button>
  );
}



/* ---------- EXPORT ---------- */

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;
Table.Input = Input;
Table.Button = Button;
