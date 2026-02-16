export default function InventoryTable({
  data,
  onChange,
  onEdit,
  onDelete,
  editableIndex = null,
}) {
  return (
    <div className="overflow-x-auto">
<<<<<<< HEAD
      <table
        className=" w-full
  min-w-[900px]
  border border-zinc-600
  border-collapse
  text-sm
  table-fixed"
      >
        {/* HEADER */}
        <thead>
          <tr className="bg-zinc-800 text-white">
            <th
              className="border border-zinc-700
  px-3 py-3
  h-12
  whitespace-nowrap"
            >
              Product
            </th>
            <th
              className="border border-zinc-700
  px-3 py-3
  h-12
  whitespace-nowrap"
            >
              Receipt
            </th>

            <th
              className="border border-zinc-700
  px-3 py-3
  h-12
  whitespace-nowrap"
            >
              Cases
            </th>
            <th
              className="border border-zinc-700
  px-3 py-3
  h-12
  whitespace-nowrap"
            ></th>

            <th
              className="border border-zinc-700
  px-3 py-3
  h-12
  whitespace-nowrap"
            >
              Bottles
            </th>
            <th
              className="border border-zinc-700
  px-3 py-3
  h-12
  whitespace-nowrap"
            ></th>

            <th
              className="border border-zinc-700
  px-3 py-3
  h-12
  whitespace-nowrap"
            >
              Actions
            </th>
          </tr>

          <tr className="bg-zinc-800 text-white">
            <th
              className="border border-zinc-700
  px-3 py-3
  h-12
  whitespace-nowrap"
            >
              -
            </th>
            <th
              className="border border-zinc-700
  px-3 py-3
  h-12
  whitespace-nowrap"
            >
              -
            </th>
            <th
              className="border border-zinc-700
  px-3 py-3
  h-12
  whitespace-nowrap"
            >
              Warm
            </th>
            <th
              className="border border-zinc-700
  px-3 py-3
  h-12
  whitespace-nowrap"
            >
              Cold
            </th>
            <th
              className="border border-zinc-700
  px-3 py-3
  h-12
  whitespace-nowrap"
            >
              Warm
            </th>
            <th
              className="border border-zinc-700
  px-3 py-3
  h-12
  whitespace-nowrap"
            >
              Cold
            </th>
            <th
              className="border border-zinc-700
  px-3 py-3
  h-12
  whitespace-nowrap"
            ></th>
=======
      <table className="w-full border border-zinc-600 border-collapse text-sm">
        {/* HEADER */}
        <thead>
          <tr className="bg-zinc-800 text-white">
            <th className="border py-2 px-3">Product</th>
            <th className="border py-2 px-3">Receipt</th>
            <th className="border py-2 px-3" colSpan="2">
              Cases
            </th>
            <th className="border py-2 px-3" colSpan="2">
              Bottles
            </th>
            <th className="border py-2 px-3">Actions</th>
          </tr>

          <tr className="bg-zinc-800 text-white">
            <th className="border py-2 px-3">-</th>
            <th className="border py-2 px-3">-</th>
            <th className="border py-2 px-3">Warm</th>
            <th className="border py-2 px-3">Cold</th>
            <th className="border py-2 px-3">Warm</th>
            <th className="border py-2 px-3">Cold</th>
            <th className="border py-2 px-3"></th>
>>>>>>> ed06820a01d41180439ee8fc7c6e2424b2ac8da8
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {data.map((row, i) => {
            const isEditing = editableIndex === i;

            return (
              <tr key={i} className="text-center">
                {/* PRODUCT */}
<<<<<<< HEAD
                <td className="border border-zinc-700 h-12 break-all">
                  {row.product}
                </td>
=======
                <td className="border py-2 px-3">{row.product}</td>
>>>>>>> ed06820a01d41180439ee8fc7c6e2424b2ac8da8

                {/* FIELDS */}
                {[
                  "receipt",
                  "casesWarm",
                  "casesCold",
                  "bottlesWarm",
                  "bottlesCold",
                ].map((field) => (
<<<<<<< HEAD
                  <td key={field}
                   className="border border-zinc-700 h-12 break-all">
                    <div className="flex items-center justify-center h-full">
                      {isEditing ? (
                        <div className="w-20 h-8">
                          <input
                            type="number"
                            value={row[field]}
                            onChange={(e) => onChange(i, field, e.target.value)}
                            className="
            w-full
            h-full
            bg-zinc-800
            border border-zinc-900
            rounded
            text-center
            outline-none
          "
                          />
                        </div>
                      ) : (
                        <div className="w-20 text-center">{row[field]}</div>
                      )}
                    </div>
=======
                  <td key={field} className="border py-2 px-3">
                    {isEditing ? (
                      <input
                        type="number"
                        value={row[field]}
                        onChange={(e) => onChange(i, field, e.target.value)}
                        className="bg-zinc-800 w-full py-2 text-center rounded"
                      />
                    ) : (
                      row[field]
                    )}
>>>>>>> ed06820a01d41180439ee8fc7c6e2424b2ac8da8
                  </td>
                ))}

                {/* ACTIONS */}
<<<<<<< HEAD
                <td className="border border-zinc-700 h-12 space-x-2 break-all">
                  {isEditing ? (
                    <button
                      onClick={() => onEdit(null)}
                      className="bg-green-900 text-green-100 px-3 py-1 rounded text-xs"
=======
                <td className="border py-2 px-3 space-x-2">
                  {isEditing ? (
                    <button
                      onClick={() => onEdit(null)}
                      className=" bg-green-900
    text-green-100
    px-3 py-1
    rounded
    text-xs font-medium"
>>>>>>> ed06820a01d41180439ee8fc7c6e2424b2ac8da8
                    >
                      Save Edit
                    </button>
                  ) : (
                    <button
                      onClick={() => onEdit(i)}
<<<<<<< HEAD
                      className="bg-blue-900 text-blue-100 px-3 py-1 rounded text-xs"
=======
                      className="bg-blue-900
    text-blue-100
    px-3 py-1
    rounded
    text-xs font-medium"
>>>>>>> ed06820a01d41180439ee8fc7c6e2424b2ac8da8
                    >
                      Edit
                    </button>
                  )}

                  <button
                    onClick={() => onDelete(i)}
<<<<<<< HEAD
                    className="bg-red-900 text-red-100 px-3 py-1 rounded text-xs"
=======
                    className="bg-red-900
    text-red-100
    px-3 py-1
    rounded
    text-xs font-medium"
>>>>>>> ed06820a01d41180439ee8fc7c6e2424b2ac8da8
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
