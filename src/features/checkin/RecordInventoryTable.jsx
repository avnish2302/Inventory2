import { useState } from "react";
import Table from "../../components/Table";
import Button from "../../components/Button";

export default function RecordInventoryTable() {
  const emptyRow = {
    category: "",
    product: "",
    sku: "",
    caseQty: "",
    bottleQty: "",
  };

  /* ---------------- STATE ---------------- */

  const [rows, setRows] = useState([{ ...emptyRow }]);
  const [saved, setSaved] = useState([]);
  const [editIndex, setEditIndex] = useState(null);


  /* ---------------- HELPERS ---------------- */

  // Allow only numbers for qty fields
  const formatValue = (key, value) => {
    if (key === "caseQty" || key === "bottleQty") {
      return value.replace(/[^0-9]/g, "");
    }
    return value;
  };

  /* ---------------- INPUT TABLE ---------------- */

  const handleChange = (i, key, value) => {
    const copy = [...rows];
    copy[i][key] = formatValue(key, value);
    setRows(copy);
  };

  const addRow = () => setRows([...rows, { ...emptyRow }]);

  const deleteRow = (i) =>
    setRows(rows.filter((_, idx) => idx !== i));

  const isValid = () =>
    rows.every((r) =>
      Object.values(r).every((v) => v !== "")
    );

     const handleAddToSaved = () => {
    if (!isValid()) {
      return;
    }

    setSaved([...saved, ...rows]);
    setRows([{ ...emptyRow }]);
  };

  /* ---------------- SAVED TABLE ---------------- */

  const handleSavedChange = (i, key, value) => {
    const copy = [...saved];
    copy[i][key] = formatValue(key, value);
    setSaved(copy);
  };

  const handleDeleteSaved = (i) =>
    setSaved(saved.filter((_, idx) => idx !== i));

  const handleSaveEdit = () => setEditIndex(null);

  /* ---------------- SAVE TO DB ---------------- */

  const formatted = saved.map(row => ({
  ...row,
  caseQty: Number(row.caseQty),
  bottleQty: Number(row.bottleQty),
}));

  const handleSaveToDatabase = () => {
    console.log(formatted);
  };


  return (
    <div className="space-y-4">

      {/* Add Row Button Right */}
      <div className="flex justify-end">
        <Button
          variant="neutral"
          size="md"
          onClick={addRow}
        >
          Add Row
        </Button>
      </div>

      {/* INPUT TABLE */}
      <Table>
        <Table.Header>
          <Table.Cell>Category</Table.Cell>
          <Table.Cell>Product</Table.Cell>
          <Table.Cell>SKU</Table.Cell>
          <Table.Cell>Case (Qty)</Table.Cell>
          <Table.Cell>Bottle (Qty)</Table.Cell>
          <Table.Cell>Action</Table.Cell>
        </Table.Header>

        <Table.Body
          data={rows}
          render={(row, i) => (
            <Table.Row key={i}>
              {Object.keys(emptyRow).map((key) => (
                <Table.Cell key={key}>
                  <Table.Input
                    type={
                      key === "caseQty" || key === "bottleQty"
                        ? "number"
                        : "text"
                    }
                    value={row[key]}
                    onChange={(e) =>
                      handleChange(i, key, e.target.value)
                    }
                  />
                </Table.Cell>
              ))}

              <Table.Cell>
                <Button
                  variant="delete"
                  onClick={() => deleteRow(i)}
                >
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          )}
        />
      </Table>

      {/* ADD BUTTON */}
      <div className="mb-8 flex justify-center">
        <Button
          variant="primary"
          size="md"
          onClick={handleAddToSaved}
          disabled={!isValid()}
        >
          Add
        </Button>
      </div>

      {/* SAVED TABLE */}
      {saved.length > 0 && (
        <Table>
          <Table.Header>
            <Table.Cell>Category</Table.Cell>
            <Table.Cell>Product</Table.Cell>
            <Table.Cell>SKU</Table.Cell>
            <Table.Cell>Case</Table.Cell>
            <Table.Cell>Bottle</Table.Cell>
            <Table.Cell>Actions</Table.Cell>
          </Table.Header>

          <Table.Body
            data={saved}
            render={(row, i) => (
              <Table.Row key={i}>
                {Object.keys(emptyRow).map((key) => (
                  <Table.Cell key={key}>
                    {editIndex === i ? (
                      <Table.Input
                        type={
                          key === "caseQty" ||
                          key === "bottleQty"
                            ? "number"
                            : "text"
                        }
                        value={row[key]}
                        onChange={(e) =>
                          handleSavedChange(
                            i,
                            key,
                            e.target.value
                          )
                        }
                      />
                    ) : (
                      row[key]
                    )}
                  </Table.Cell>
                ))}

                <Table.Cell>
                  {editIndex === i ? (
                    <Button
                      variant="saveEdit"
                      size="sm"
                      onClick={handleSaveEdit}
                    >
                      Save Edit
                    </Button>
                  ) : (
                    <Button
                      variant="edit"
                      size="sm"
                      onClick={() => setEditIndex(i)}
                    >
                      Edit
                    </Button>
                  )}

                  <Button
                    variant="delete"
                    size="sm"
                    onClick={() => handleDeleteSaved(i)}
                  >
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            )}
          />
        </Table>
      )}

      {/* SAVE TO DB BUTTON */}
      {saved.length > 0 && (
        <div className="flex justify-center">
          <Button
            variant="primary"
            size="md"
            onClick={handleSaveToDatabase}
          >
            Save
          </Button>
        </div>
      )}
    </div>
  );
}
