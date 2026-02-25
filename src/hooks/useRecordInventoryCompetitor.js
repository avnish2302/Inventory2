import { useState } from "react";
import { toast } from "react-toastify";

export function useRecordInventoryCompetitor() {
  const emptyRow = {
    category: "",
    product: "",
    sku: "",
    caseQty: "",
    bottleQty: "",
  };

  const [rows, setRows] = useState([{ ...emptyRow }]);
  const [saved, setSaved] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  /* ---------- HELPERS ---------- */

  const formatValue = (key, value) => {
    if (key === "caseQty" || key === "bottleQty") {
      return value.replace(/[^0-9]/g, "");
    }
    return value;
  };

  const isValid = () =>
    rows.every((r) =>
      Object.values(r).every((v) => v !== "")
    );

  /* ---------- INPUT TABLE ---------- */

  const handleChange = (i, key, value) => {
    const copy = [...rows];
    copy[i][key] = formatValue(key, value);
    setRows(copy);
  };

  const addRow = () =>
    setRows([...rows, { ...emptyRow }]);

  const deleteRow = (i) =>
    setRows(rows.filter((_, idx) => idx !== i));

  const handleAdd = () => {
    if (!isValid()) return;

    setSaved([...saved, ...rows]);
    setRows([{ ...emptyRow }]);
  };

  /* ---------- SAVED TABLE ---------- */

  const handleSavedChange = (i, key, value) => {
    const copy = [...saved];
    copy[i][key] = formatValue(key, value);
    setSaved(copy);
  };

  const handleDeleteSaved = (i) =>
    setSaved(saved.filter((_, idx) => idx !== i));

  const handleSaveEdit = () =>
    setEditIndex(null);

  /* ---------- SAVE TO DB ---------- */

  const handleSaveToDatabase = () => {
    const formatted = saved.map((row) => ({
      ...row,
      caseQty: Number(row.caseQty),
      bottleQty: Number(row.bottleQty),
    }));

    console.log(formatted);
    toast.success("Saved successfully!");
  };

  return {
    emptyRow,
    rows,
    saved,
    editIndex,

    handleChange,
    addRow,
    deleteRow,
    handleAdd,
    isValid,

    handleSavedChange,
    handleDeleteSaved,
    handleSaveEdit,
    setEditIndex,

    handleSaveToDatabase,
  };
}
