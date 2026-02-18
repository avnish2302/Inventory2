import { useState } from "react";
import Button from "../../components/Button";

export default function Own() {
  const emptyRow = {
    receipt: "",
    casesWarm: "",
    casesCold: "",
    bottlesWarm: "",
    bottlesCold: "",
    product: "", // Product will now be part of the row
  };

  const [category, setCategory] = useState("");
  const [product, setProduct] = useState(""); // Store selected product
  const [editIndex, setEditIndex] = useState(null);
  const [rows, setRows] = useState([]); // Start with an empty rows array
  const [saved, setSaved] = useState([]);

  /* ---------------- ADD PRODUCT ROW ---------------- */
  const handleAdd = () => {
    if (!product || !category) return; // Don't allow adding empty product/category
    const newRow = { ...emptyRow, product }; // Add the selected product to the row
    setRows([...rows, newRow]); // Add new row with the selected product
  };

  /* ---------------- UPDATE CELL ---------------- */
  const handleChange = (i, field, value) => {
    const updated = [...rows];
    updated[i][field] = value === "" ? "" : Number(value);
    setRows(updated);
  };

  /* ---------------- VALIDATION ---------------- */
  const isValid =
    rows.length > 0 &&
    rows.every((r) => Object.values(r).every((v) => v !== "" && v !== null));

  /* ---------------- MOVE TO SAVED ---------------- */
  const handleAddToSaved = () => {
    if (!isValid) return;
    setSaved([...saved, ...rows]);
    setRows([]); // Reset rows after adding to saved
  };

  /* ---------------- SAVED ACTIONS ---------------- */
  const handleEdit = (i) => setEditIndex(i);

  const handleSavedChange = (i, field, value) => {
    const updated = [...saved];
    updated[i][field] = value;
    setSaved(updated);
  };

  const handleDelete = (i) => setSaved(saved.filter((_, idx) => idx !== i));

  const handleSaveToDB = () => {
    console.log("Saving to DB", saved);
    // Add your API call to save here
  };

  return (
    <div  className="bg-zinc-900 p-6 rounded border border-zinc-800 space-y-4">
      {/* Shop Category Selection */}
      <p className="text-zinc-400">
        Shop: <span className="text-white">(Shop name here...)</span>
      </p>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="bg-zinc-800 p-2 rounded border border-zinc-700 w-full"
      >
        <option value="">Select Category</option>
        <option>Beer</option>
        <option>Whisky</option>
      </select>

      {/* Product + Add Row */}
      <div className="flex gap-2">
        <select
          value={product}
          onChange={(e) => setProduct(e.target.value)} // Update the product state when selection changes
          className="bg-zinc-800 p-2 rounded border border-zinc-700 w-full"
        >
          <option value="">Select Product</option>
          <option>Kibba 650 ml</option>
          <option>Kibba 500</option>
        </select>

        <Button
          variant="neutral"
          size="md"
          onClick={handleAdd}
          disabled={!category || !product} // Enable button only when category and product are selected
        >
          Add Row
        </Button>
      </div>

      {/* Table to Add and Save Rows */}
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
              <th
                colSpan="2"
                className="border border-zinc-700 py-2 px-3 text-center"
              >
                Cases
              </th>
              <th
                colSpan="2"
                className="border border-zinc-700 py-2 px-3 text-center"
              >
                Bottles
              </th>
            </tr>
            <tr className="bg-zinc-800 text-white">
              <th className="border border-zinc-700 py-2 px-3">-</th>
              <th className="border border-zinc-700 py-2 px-3">-</th>
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
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="text-center">
                {/* Product */}
                <td className="border py-2 px-3 align-middle border border-zinc-700">
                  {r.product}
                </td>

                {/* Input Cells */}
                {[
                  "receipt",
                  "casesWarm",
                  "casesCold",
                  "bottlesWarm",
                  "bottlesCold",
                ].map((field) => (
                  <td
                    key={field}
                    className="border py-2 px-3 border border-zinc-700"
                  >
                    <input
                      type="number"
                      value={r[field]}
                      onChange={(e) => handleChange(i, field, e.target.value)}
                      className="bg-zinc-800 w-full py-2 px-2 outline-none text-center rounded"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Rows Button */}
      <div className="flex justify-center">
        <Button
          variant="primary"
          size="md"
          onClick={handleAddToSaved}
          disabled={!isValid}
        >
          Add
        </Button>
      </div>
      {/* Saved Records Section */}

      {saved.length > 0 && (
        <>
          <div className="overflow-x-auto mt-20">
            <table className="w-full border border-zinc-600 border-collapse text-sm">
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
                {saved.map((r, i) => (
                  <tr key={i} className="text-center">
                    {/* Product */}
                    <td className="border py-2 px-3 align-middle border border-zinc-700">
                      {r.product}
                    </td>

                    {/* Receipt */}
                    <td className="border py-2 px-3 border border-zinc-700">
                      {editIndex === i ? (
                        <input
                          type="number"
                          value={r.receipt}
                          onChange={(e) =>
                            handleSavedChange(i, "receipt", e.target.value)
                          }
                          className="bg-zinc-800 w-full py-2 px-2 outline-none text-center rounded"
                        />
                      ) : (
                        r.receipt
                      )}
                    </td>

                    {/* Cases Warm */}
                    <td className="border py-2 px-3 border border-zinc-700">
                      {editIndex === i ? (
                        <input
                          type="number"
                          value={r.casesWarm}
                          onChange={(e) =>
                            handleSavedChange(i, "casesWarm", e.target.value)
                          }
                          className="bg-zinc-800 w-full py-2 px-2 outline-none text-center rounded"
                        />
                      ) : (
                        r.casesWarm
                      )}
                    </td>

                    {/* Cases Cold */}
                    <td className="border py-2 px-3 border border-zinc-700">
                      {editIndex === i ? (
                        <input
                          type="number"
                          value={r.casesCold}
                          onChange={(e) =>
                            handleSavedChange(i, "casesCold", e.target.value)
                          }
                          className="bg-zinc-800 w-full py-2 px-2 outline-none text-center rounded"
                        />
                      ) : (
                        r.casesCold
                      )}
                    </td>

                    {/* Bottles Warm */}
                    <td className="border py-2 px-3 border border-zinc-700">
                      {editIndex === i ? (
                        <input
                          type="number"
                          value={r.bottlesWarm}
                          onChange={(e) =>
                            handleSavedChange(i, "bottlesWarm", e.target.value)
                          }
                          className="bg-zinc-800 w-full py-2 px-2 outline-none text-center rounded"
                        />
                      ) : (
                        r.bottlesWarm
                      )}
                    </td>

                    {/* Bottles Cold */}
                    <td className="border py-2 px-3 border border-zinc-700">
                      {editIndex === i ? (
                        <input
                          type="number"
                          value={r.bottlesCold}
                          onChange={(e) =>
                            handleSavedChange(i, "bottlesCold", e.target.value)
                          }
                          className="bg-zinc-800 w-full py-2 px-2 outline-none text-center rounded"
                        />
                      ) : (
                        r.bottlesCold
                      )}
                    </td>

                    {/* Actions */}
                    <td className="border py-2 px-3 border-zinc-700 space-x-2">
                      {editIndex === i ? (
                        <Button
                          variant="saveEdit"
                          size="sm"
                          onClick={() => setEditIndex(null)} // Save edit and exit edit mode
                        >
                          Save Edit
                        </Button>
                      ) : (
                        <Button
                          variant="edit"
                          size="sm"
                          onClick={() => handleEdit(i)} // Enable editing the row
                        >
                          Edit
                        </Button>
                      )}

                      <Button
                        variant="delete"
                        size="sm"
                        onClick={() => handleDelete(i)} // Delete the row
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Save to DB Button */}
          <div className="flex justify-center">
            <Button variant="primary" size="md" onClick={handleSaveToDB}>
              Save
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
