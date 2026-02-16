import { useState } from "react";
import InventoryTable from "../../components/InventoryTable";

export default function OwnInventory() {
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const [rows, setRows] = useState([]);
  const [saved, setSaved] = useState([]);

  const emptyRow = {
    receipt: "",
    casesWarm: "",
    casesCold: "",
    bottlesWarm: "",
    bottlesCold: "",
  };

  // ADD PRODUCT ROW
  const handleAdd = () => {
    if (!product) return;

    setRows([...rows, { product, ...emptyRow }]);
  };

  // UPDATE CELL
  const handleChange = (i, field, value) => {
    const updated = [...rows];
    updated[i][field] = value;
    setRows(updated);
  };

  // CHECK VALID
  const isValid =
    rows.length > 0 &&
    rows.every((r) => Object.values(r).every((v) => v !== ""));

  // SAVE

  const handleSave = () => {
    if (!isValid) return;

    setSaved([...saved, ...rows]);
    setRows([]);
  };

  // EDIT
  const handleEdit = (i) => {
  setEditIndex(i);
};


  // CHANGE
  const handleSavedChange = (i, field, value) => {
    const updated = [...saved];
    updated[i][field] = value;
    setSaved(updated);
  };

  // DELETE
  const handleDelete = (i) => {
    setSaved(saved.filter((_, idx) => idx !== i));
  };

  return (
    <div className="bg-zinc-900 p-6 rounded border border-zinc-800 space-y-4">
      {/* Shop */}
      <p className="text-zinc-400">
        Shop: <span className="text-white">(Shop name here...)</span>
      </p>

      {/* Category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="bg-zinc-800 p-2 rounded border w-full"
      >
        <option value="">Select Category</option>
        <option>Beer</option>
        <option>Whisky</option>
      </select>

      {/* Product + Add */}
      <div className="flex gap-2">
        <select
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="bg-zinc-800 p-2 rounded border w-full"
        >
          <option value="">Select Product</option>
          <option>Kibba (DD)</option>
        </select>

        <button
          onClick={handleAdd}
          disabled={!category || !product}
          className="
    bg-amber-800 px-4 rounded text-white
    disabled:opacity-40
    disabled:cursor-not-allowed
  "
        >
          Add
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full border border-zinc-600 border-collapse text-sm">
          <thead>
            <tr className="bg-zinc-800 text-white">
              <th className="border py-2 px-3 text-center">Product</th>
              <th className="border py-2 px-3 text-center">Receipt</th>
              <th className="border py-2 px-3 text-center" colSpan="2">
                Cases
              </th>
              <th className="border py-2 px-3 text-center" colSpan="2">
                Bottles
              </th>
            </tr>

            <tr className="bg-zinc-800 text-white">
              <th className="border py-2 px-3">-</th>
              <th className="border py-2 px-3">-</th>
              <th className="border py-2 px-3 text-center">Warm</th>
              <th className="border py-2 px-3 text-center">Cold</th>
              <th className="border py-2 px-3 text-center">Warm</th>
              <th className="border py-2 px-3 text-center">Cold</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="text-center">
                {/* Product */}
                <td className="border py-2 px-3 align-middle">{r.product}</td>

                {/* Inputs */}
                {[
                  "receipt",
                  "casesWarm",
                  "casesCold",
                  "bottlesWarm",
                  "bottlesCold",
                ].map((field) => (
                  <td key={field} className="border py-2 px-3">
                    <input
                      type="number"
                      value={r[field]}
                      onChange={(e) => handleChange(i, field, e.target.value)}
                      className="
                  bg-zinc-800
                  w-full
                  py-2
                  px-2
                  outline-none
                  text-center
                  rounded
                "
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* SAVE */}
      <button
        onClick={handleSave}
        disabled={!isValid}
        className="
          bg-amber-800 px-6 py-2 rounded text-white
          disabled:opacity-40
          disabled:cursor-not-allowed
        "
      >
        Save
      </button>

      {/* SAVED TABLE */}
      {/* SAVED TABLE */}
      {saved.length > 0 && (
        <div>
          <h3 className="text-amber-700 mt-4">Saved Records</h3>

          <InventoryTable
            data={saved}
            editableIndex={editIndex}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onChange={handleSavedChange}
          />
        </div>
      )}
    </div>
  );
}
