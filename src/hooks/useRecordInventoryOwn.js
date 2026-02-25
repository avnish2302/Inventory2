import { useState } from "react";
import { toast } from "react-toastify";



export function useRecordInventoryOwn() {


  const emptyRow = {
    receipt: "",
    casesWarm: "",
    casesCold: "",
    bottlesWarm: "",
    bottlesCold: "",
    product: "",
  };

  const [category, setCategory] = useState("");
  const [product, setProduct] = useState("");
  const [rows, setRows] = useState([]);
  const [saved, setSaved] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  /* ---------- ADD PRODUCT ROW ---------- */

  const handleAddRow = () => {
    if (!category || !product) return;
    setRows([...rows, { ...emptyRow, product }]);
  };

  const handleDeleteRow = (i) =>
    setRows(rows.filter((_, idx) => idx !== i));

  const handleChange = (i, field, value) => {
    const updated = [...rows];
    updated[i][field] = value === "" ? "" : Number(value);
    setRows(updated);
  };

  const isValid =
    rows.length > 0 &&
    rows.every((r) =>
      Object.values(r).every((v) => v !== "" && v !== null)
    );

  const handleAdd = () => {
    if (!isValid) return;
    setSaved([...saved, ...rows]);
    setRows([]);

  };

  /* ---------- SAVED ---------- */

  const handleSavedChange = (i, field, value) => {
    const updated = [...saved];
    updated[i][field] = value;
    setSaved(updated);
  };

  const handleDeleteSaved = (i) =>
    setSaved(saved.filter((_, idx) => idx !== i));

  const handleSaveEdit = () =>
    setEditIndex(null);

  const handleSaveToDB = () => {

    toast.success("Saved Successfully")
  };

  return {
    category,
    setCategory,
    product,
    setProduct,

    rows,
    saved,
    editIndex,

    handleAddRow,
    handleDeleteRow,
    handleChange,
    handleAdd,
    isValid,

    handleSavedChange,
    handleDeleteSaved,
    handleSaveEdit,
    setEditIndex,

    handleSaveToDB,
  };
}
