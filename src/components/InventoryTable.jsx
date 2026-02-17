export default function InventoryTable({
  data,
  onChange,
  onEdit,
  onDelete,
  editableIndex = null,
}) {
  return (
    <div className="overflow-x-auto">
      <table
        className="
          w-full
          min-w-[900px]
          border border-zinc-600
          border-collapse
          text-sm
          table-fixed
        "
      >
        {/* HEADER */}
        <thead>
          <tr className="bg-zinc-800 text-white">
            <th className="border border-zinc-700 px-3 py-3 h-12 whitespace-nowrap">
              Product
            </th>

            <th className="border border-zinc-700 px-3 py-3 h-12 whitespace-nowrap">
              Receipt
            </th>

            <th className="border border-zinc-700 px-3 py-3 h-12 whitespace-nowrap">
              Cases
            </th>

            <th className="border border-zinc-700 px-3 py-3 h-12 whitespace-nowrap"></th>

            <th className="border border-zinc-700 px-3 py-3 h-12 whitespace-nowrap">
              Bottles
            </th>

            <th className="border border-zinc-700 px-3 py-3 h-12 whitespace-nowrap"></th>

            <th className="border border-zinc-700 px-3 py-3 h-12 whitespace-nowrap">
              Actions
            </th>
          </tr>

          <tr className="bg-zinc-800 text-white">
            <th className="border border-zinc-700 px-3 py-3 h-12">-</th>
            <th className="border border-zinc-700 px-3 py-3 h-12">-</th>
            <th className="border border-zinc-700 px-3 py-3 h-12">Warm</th>
            <th className="border border-zinc-700 px-3 py-3 h-12">Cold</th>
            <th className="border border-zinc-700 px-3 py-3 h-12">Warm</th>
            <th className="border border-zinc-700 px-3 py-3 h-12">Cold</th>
            <th className="border border-zinc-700 px-3 py-3 h-12"></th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {data.map((row, i) => {
            const isEditing = editableIndex === i;

            return (
              <tr key={i} className="text-center">

                {/* PRODUCT */}
                <td className="border border-zinc-700 h-12 break-all">
                  {row.product}
                </td>

                {/* FIELDS */}
                {[
                  "receipt",
                  "casesWarm",
                  "casesCold",
                  "bottlesWarm",
                  "bottlesCold",
                ].map((field) => (
                  <td
                    key={field}
                    className="border border-zinc-700 h-12"
                  >
                    <div className="flex items-center justify-center h-full">
                      {isEditing ? (
                        <div className="w-20 h-8">
                          <input
                            type="number"
                            value={row[field]}
                            onChange={(e) =>
                              onChange(i, field, e.target.value)
                            }
                            className="
                              w-full
                              h-full
                              bg-zinc-800
                              border border-zinc-700
                              rounded
                              text-center
                              outline-none
                            "
                          />
                        </div>
                      ) : (
                        <div className="w-20 text-center">
                          {row[field]}
                        </div>
                      )}
                    </div>
                  </td>
                ))}

                {/* ACTIONS */}
                <td className="border border-zinc-700 h-12 space-x-2">
                  {isEditing ? (
                    <button
                      onClick={() => onEdit(null)}
                      className="
                        bg-green-900
                        text-green-100
                        px-3 py-1
                        rounded
                        text-xs
                      "
                    >
                      Save Edit
                    </button>
                  ) : (
                    <button
                      onClick={() => onEdit(i)}
                      className="
                        bg-blue-900
                        text-blue-100
                        px-3 py-1
                        rounded
                        text-xs
                      "
                    >
                      Edit
                    </button>
                  )}

                  <button
                    onClick={() => onDelete(i)}
                    className="
                      bg-red-900
                      text-red-100
                      px-3 py-1
                      rounded
                      text-xs
                    "
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
