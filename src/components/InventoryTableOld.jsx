import Button from "./Button";

/* ================= ROOT ================= */

export default function InventoryTable({ children }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-zinc-700 border-collapse text-sm bg-zinc-900">
        {children}
      </table>
    </div>
  );
}

/* ================= HEADER ================= */

function Header() {
  return (
    <thead className="bg-zinc-800 text-white">

      {/* HEADER ROW 1 */}
      <tr>
        <Th>Product</Th>
        <Th>Receipt</Th>

        <Th colSpan={2}>Cases</Th>
        <Th colSpan={2}>Bottles</Th>

        <Th>Action</Th>
      </tr>

      {/* HEADER ROW 2 */}
      <tr>
        <Th>-</Th>
        <Th>-</Th>

        <Th>Warm</Th>
        <Th>Cold</Th>

        <Th>Warm</Th>
        <Th>Cold</Th>

        <Th></Th>
      </tr>
    </thead>
  );
}

/* ================= BODY ================= */

function Body({ data, render }) {
  return <tbody>{data.map(render)}</tbody>;
}

/* ================= ROW ================= */

function Row({ children }) {
  return <tr className="text-center">{children}</tr>;
}

/* ================= CELLS ================= */

function Th({ children, colSpan }) {
  return (
    <th
      colSpan={colSpan}
      className="border border-zinc-700 px-3 py-2"
    >
      {children}
    </th>
  );
}

function Td({ children }) {
  return (
    <td className="border border-zinc-700 px-2 py-2">
      <div className="flex justify-center items-center h-full">
        {children}
      </div>
    </td>
  );
}

/* ================= INPUT ================= */

function Input(props) {
  return (
    <input
      {...props}
      className="
        w-24
        h-9
        bg-zinc-800
        border border-zinc-700
        rounded
        text-center
        outline-none
      "
    />
  );
}

/* ================= EXPORT ================= */

InventoryTable.Header = Header;
InventoryTable.Body = Body;
InventoryTable.Row = Row;
InventoryTable.Td = Td;
InventoryTable.Input = Input;
