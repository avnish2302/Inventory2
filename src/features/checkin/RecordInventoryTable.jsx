import { useState } from "react";
import Table from "../../components/Table";

export default function RecordInventoryTable() {
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

  /* ---------------- INPUT TABLE ---------------- */

  const handleChange = (i, key, value) => {
    const copy = [...rows];
    copy[i][key] = value;
    setRows(copy);
  };

  const addRow = () => setRows([...rows, { ...emptyRow }]);

  const deleteRow = (i) =>
    setRows(rows.filter((_, idx) => idx !== i));

  const isValid = () =>
    rows.every((r) =>
      Object.values(r).every((v) => v !== "")
    );

  const save = () => {
    if (!isValid()) {
      alert("Fill all fields first");
      return;
    }

    setSaved([...saved, ...rows]);
    setRows([{ ...emptyRow }]);
  };

  /* ---------------- SAVED TABLE ---------------- */

  const handleSavedChange = (i, key, value) => {
    const copy = [...saved];
    copy[i][key] = value;
    setSaved(copy);
  };

  const handleDeleteSaved = (i) => {
    setSaved(saved.filter((_, idx) => idx !== i));
  };

  const handleSaveEdit = () => {
    setEditIndex(null);
  };

  return (
    <div className="space-y-4">

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
                    value={row[key]}
                    onChange={(e) =>
                      handleChange(i, key, e.target.value)
                    }
                  />
                </Table.Cell>
              ))}

              <Table.Cell>
                <Table.Button
                  variant="delete"
                  onClick={() => deleteRow(i)}
                >
                  Delete
                </Table.Button>
              </Table.Cell>
            </Table.Row>
          )}
        />
      </Table>

      {/* BUTTONS */}
      <div className="flex gap-3">
        <Table.Button size ="md" onClick={addRow}>
          Add Row
        </Table.Button>

        <Table.Button size="md" onClick={save}>
          Save
        </Table.Button>
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
                    <Table.Button
                      variant="save"
                      onClick={handleSaveEdit}
                    >
                      Save Edit
                    </Table.Button>
                  ) : (
                    <Table.Button
                      variant="edit"
                      onClick={() => setEditIndex(i)}
                    >
                      Edit
                    </Table.Button>
                  )}

                  <Table.Button
                    variant="delete"
                    onClick={() => handleDeleteSaved(i)}
                  >
                    Delete
                  </Table.Button>
                </Table.Cell>
              </Table.Row>
            )}
          />
        </Table>
      )}
    </div>
  );
}
