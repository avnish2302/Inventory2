export default function Table({ children }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-fixed border border-zinc-700 border-collapse text-sm bg-zinc-900">
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
    <tr
      className="
      text-center
      bg-zinc-900
    "
    >
      {children}
    </tr>
  );
}

/* ---------- CELL ---------- */

function Cell({ children }) {
  return (
    <td className="border border-zinc-700 px-3 py-2 text-center align-middle break-all">
      {children}
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

/* ---------- EXPORT ---------- */

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;
Table.Input = Input;
