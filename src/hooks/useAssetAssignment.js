import { useState } from "react";

export function useAssetAssignment() {
  const emptyRow = {
    brand: "",
    asset: "",
    remarks: "",
    image: null,
  };

  const [rows, setRows] = useState([{ ...emptyRow }]);
  const [saved, setSaved] = useState([]);
  const [editIndex, setEditIndex] = useState(null);


  /* INPUT LOGIC */

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
      r.brand &&
      r.asset &&
      r.remarks &&
      r.image
    );

  const handleAdd = () => {
    if (!isValid()) return;

    setSaved([...saved, ...rows]);
    setRows([{ ...emptyRow }]);
  };

  /* SAVED LOGIC */

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
    console.log("Saving to DB:", saved);
  };

  return {
    rows,
    saved,
    editIndex,

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
