import { useState } from "react";
import ShowcaseTable from "./ShowcaseTable";

export default function Showcase() {
  const emptyRow = {
    category: "",
    product: "",
    image: null,
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
      r.category !== "" &&
      r.product !== "" &&
      r.image !== null
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
    <ShowcaseTable
      rows={rows}
      saved={saved}
      onAddRow={addRow}
      onDeleteRow={deleteRow}
      onChange={updateRow}
      onSave={handleSave}
      setSaved={setSaved}
    />
  );
}
