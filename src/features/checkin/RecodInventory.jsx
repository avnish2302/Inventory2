import { useState } from "react";
import RecordInventoryTable from "./RecordInventoryTable";

export default function RecordInventory() {
  const emptyRow = {
    category: "",
    product: "",
    sku: "",
    caseQty: "",
    bottleQty: "",
  };

  const [rows, setRows] = useState([{ ...emptyRow }]);
  const [saved, setSaved] = useState([]);

  const addRow = () =>
    setRows([...rows, { ...emptyRow }]);

  const deleteRow = (index) =>
    setRows(rows.filter((_, i) => i !== index));

  const updateRow = (index, key, value) => {
    const copy = [...rows];
    copy[index][key] = value;
    setRows(copy);
  };

  const isValid = () =>
    rows.every(r =>
      Object.values(r).every(v => v !== "")
    );

  const handleSave = () => {
    if (!isValid()) {
      alert("Fill all fields first");
      return;
    }

    setSaved([...saved, ...rows]);
    setRows([{ ...emptyRow }]);
  };

  return (
    <RecordInventoryTable
      rows={rows}
      saved={saved}
      onAddRow={addRow}
      onDeleteRow={deleteRow}
      onChange={updateRow}
      onSave={handleSave}
    />
  );
}
