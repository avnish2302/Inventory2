import Button from "../../components/Button";

export default function RecordInventoryOwnTable({ own }) {
  return (
    <div className="space-y-6">

      {/* CATEGORY */}
      <select
        value={own.category}
        onChange={(e) => own.setCategory(e.target.value)}
        className="bg-zinc-800 p-2 rounded border border-zinc-700 w-full"
      >
        <option value="">Select Category</option>
        <option>Beer</option>
        <option>Whisky</option>
      </select>

      {/* PRODUCT + ADD ROW */}
      <div className="flex gap-2">
        <select
          value={own.product}
          onChange={(e) => own.setProduct(e.target.value)}
          className="bg-zinc-800 p-2 rounded border border-zinc-700 w-full"
        >
          <option value="">Select Product</option>
          <option>Kibba 650 ml</option>
          <option>Kibba 500</option>
        </select>

        <Button
          variant="neutral"
          size="md"
          onClick={own.handleAddRow}
          disabled={!own.category || !own.product}
        >
          Add Row
        </Button>
      </div>

      {/* INPUT TABLE */}
      {own.rows.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border border-zinc-600 border-collapse text-sm">
            <thead>
              <tr className="bg-zinc-800 text-white">
                <th className="border border-zinc-700 py-2 px-3 text-center">
                  Product
                </th>
                <th className="border border-zinc-700 py-2 px-3 text-center">
                  Receipt
                </th>
                <th colSpan="2" className="border border-zinc-700 py-2 px-3 text-center">
                  Cases
                </th>
                <th colSpan="2" className="border border-zinc-700 py-2 px-3 text-center">
                  Bottles
                </th>
                <th className="border border-zinc-700 py-2 px-3 text-center">
                  Action
                </th>
              </tr>

              <tr className="bg-zinc-800 text-white">
                <th className="border border-zinc-700 py-2 px-3">—</th>
                <th className="border border-zinc-700 py-2 px-3">—</th>
                <th className="border border-zinc-700 py-2 px-3 text-center">
                  Warm
                </th>
                <th className="border border-zinc-700 py-2 px-3 text-center">
                  Cold
                </th>
                <th className="border border-zinc-700 py-2 px-3 text-center">
                  Warm
                </th>
                <th className="border border-zinc-700 py-2 px-3 text-center">
                  Cold
                </th>
                <th className="border border-zinc-700">—</th>
              </tr>
            </thead>

            <tbody>
              {own.rows.map((r, i) => (
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
                    <td
                      key={field}
                      className="border py-2 px-3 border-zinc-700"
                    >
                      <input
                        type="number"
                        value={r[field]}
                        onChange={(e) =>
                          own.handleChange(i, field, e.target.value)
                        }
                        className="bg-zinc-800 w-full py-2 px-2 outline-none text-center rounded"
                      />
                    </td>
                  ))}

                  <td className="border py-2 px-3 border-zinc-700">
                    <Button
                      variant="delete"
                      size="sm"
                      onClick={() => own.handleDeleteRow(i)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
