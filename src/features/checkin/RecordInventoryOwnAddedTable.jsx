import Button from "../../components/Button";

export default function RecordInventoryOwnAddedTable({ own }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-fixed border border-zinc-600 border-collapse text-sm">
        <thead>
          <tr className="bg-zinc-800 text-white">
            <th className="border border-zinc-700 py-2 px-3 text-center">
              Product
            </th>
            <th className="border border-zinc-700 py-2 px-3 text-center">
              Receipt
            </th>
            <th className="border border-zinc-700 py-2 px-3 text-center">
              Cases Warm
            </th>
            <th className="border border-zinc-700 py-2 px-3 text-center">
              Cases Cold
            </th>
            <th className="border border-zinc-700 py-2 px-3 text-center">
              Bottles Warm
            </th>
            <th className="border border-zinc-700 py-2 px-3 text-center">
              Bottles Cold
            </th>
            <th className="border border-zinc-700 py-2 px-3 text-center">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {own.saved.map((r, i) => (
            <tr key={i} className="text-center">
              <td className="border py-2 px-3 border-zinc-700">
                {r.product}
              </td>

              {[
                "receipt",
                "casesWarm",
                "casesCold",
                "bottlesWarm",
                "bottlesCold",
              ].map((field) => (
                <td key={field} className="border py-2 px-3 border-zinc-700">
                  {own.editIndex === i ? (
                    <input
                      type="number"
                      value={r[field]}
                      onChange={(e) =>
                        own.handleSavedChange(i, field, e.target.value)
                      }
                      className="bg-zinc-800 w-full py-2 px-2 outline-none text-center rounded"
                    />
                  ) : (
                    r[field]
                  )}
                </td>
              ))}

              <td className="border py-2 px-3 border-zinc-700 space-x-2">
                {own.editIndex === i ? (
                  <Button
                    variant="saveEdit"
                    size="sm"
                    onClick={own.handleSaveEdit}
                  >
                    Save Edit
                  </Button>
                ) : (
                  <Button
                    variant="edit"
                    size="sm"
                    onClick={() => own.setEditIndex(i)}
                  >
                    Edit
                  </Button>
                )}

                <Button
                  variant="delete"
                  size="sm"
                  onClick={() => own.handleDeleteSaved(i)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
