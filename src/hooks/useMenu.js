import { useState } from "react";

export function useMenu() {
  const emptyRow = {
    category: "",
    product: "",
    price: "",
    image: null,
  };

  const [rows, setRows] = useState([{ ...emptyRow }]);
  const [saved, setSaved] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [fileKey, setFileKey] = useState(0);

  /* ---------- helpers ---------- */

  const formatPrice = (value) =>
    value.replace(/[^0-9.]/g, "");

  const isValid = () =>
    rows.every(
      (r) =>
        r.category &&
        r.product &&
        r.price &&
        r.image
    );

  /* ---------- input table ---------- */

  const addRow = () =>
    setRows([...rows, { ...emptyRow }]);

  const deleteRow = (index) =>
    setRows(rows.filter((_, i) => i !== index));

  const updateRow = (index, key, value) => {
    const copy = [...rows];

    if (key === "price") {
      value = formatPrice(value);
    }

    copy[index][key] = value;
    setRows(copy);
  };

  const handleAdd = () => {
    if (!isValid()) return;

    setSaved([...saved, ...rows]);
    setRows([{ ...emptyRow }]);
    setFileKey((p) => p + 1);
  };

  /* ---------- saved table ---------- */

  const handleSavedChange = (i, key, value) => {
    const copy = [...saved];

    if (key === "price") {
      value = formatPrice(value);
    }

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
