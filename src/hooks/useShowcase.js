import { useState } from "react";

export function useShowcase() {
  const emptyRow = {
    category: "",
    product: "",
    image: null,
  };

  const [rows, setRows] = useState([{ ...emptyRow }]);
  const [saved, setSaved] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [fileKey, setFileKey] = useState(0);

  /* ---------- INPUT ---------- */

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
    rows.every(r => r.category && r.product && r.image);

  const handleAdd = () => {
    if (!isValid()) return;

    setSaved([...saved, ...rows]);
    setRows([{ ...emptyRow }]);
    setFileKey(prev => prev + 1);
  };

  /* ---------- SAVED ---------- */

  const handleSavedChange = (i, key, value) => {
    const copy = [...saved];
    copy[i][key] = value;
    setSaved(copy);
  };

  const handleDeleteSaved = (i) =>
    setSaved(saved.filter((_, idx) => idx !== i));

  const handleSaveEdit = () =>
    setEditIndex(null);

  const handleSaveToDatabase = () => {
    console.log(saved);
  };

  return {
    rows,
    saved,
    editIndex,
    fileKey,

    addRow,
    deleteRow,
    updateRow,
    handleAdd,
    isValid,

    handleSavedChange,
    handleDeleteSaved,
    handleSaveEdit,
    setEditIndex,

    handleSaveToDatabase,
  };
}
