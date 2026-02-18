import { useState } from "react";
import Table from "../../components/Table";
import Button from "../../components/Button";

export default function AssetAssignmentTable() {

  const emptyRow = {
    brand: "",
    asset: "",
    remarks: "",
    image: null,
  };

  const [rows, setRows] = useState([{ ...emptyRow }]);
  const [saved, setSaved] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [fileKey, setFileKey] = useState(0);

  /* ---------------- INPUT TABLE ---------------- */

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

  const handleAddToSaved = () => {
    if (!isValid()) return;

    setSaved([...saved, ...rows]);
    setRows([{ ...emptyRow }]);

    // reset file input
    setFileKey(p => p + 1);
  };

  /* ---------------- SAVED TABLE ---------------- */

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

  /* ---------------- UI ---------------- */

  return (
    <div className="space-y-6">

      {/* Add Row */}
      <div className="flex justify-end">
        <Button variant="neutral" size="md" onClick={addRow}>
          Add Row
        </Button>
      </div>

      {/* INPUT TABLE */}
      <Table>
        <Table.Header>
          <Table.Cell>Brand</Table.Cell>
          <Table.Cell>Asset</Table.Cell>
          <Table.Cell>Remarks</Table.Cell>
          <Table.Cell>Image</Table.Cell>
          <Table.Cell>Action</Table.Cell>
        </Table.Header>

        <Table.Body
          data={rows}
          render={(row, i) => (
            <Table.Row key={i}>

              <Table.Cell>
                <Table.Input
                  value={row.brand}
                  onChange={e =>
                    updateRow(i, "brand", e.target.value)
                  }
                />
              </Table.Cell>

              <Table.Cell>
                <Table.Input
                  value={row.asset}
                  onChange={e =>
                    updateRow(i, "asset", e.target.value)
                  }
                />
              </Table.Cell>

              <Table.Cell>
                <Table.Input
                  value={row.remarks}
                  onChange={e =>
                    updateRow(i, "remarks", e.target.value)
                  }
                />
              </Table.Cell>

              <Table.Cell>
                <input
                  key={fileKey}
                  type="file"
                  onChange={e =>
                    updateRow(i, "image", e.target.files[0])
                  }
                />
              </Table.Cell>

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

      {/* Add to Saved */}
      <div className="flex justify-center">
      <Button
        size="md"
        variant="primary"
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
            <Table.Cell>Brand</Table.Cell>
            <Table.Cell>Asset</Table.Cell>
            <Table.Cell>Remarks</Table.Cell>
            <Table.Cell>Image</Table.Cell>
            <Table.Cell>Actions</Table.Cell>
          </Table.Header>

          <Table.Body
            data={saved}
            render={(row, i) => (
              <Table.Row key={i}>

                <Table.Cell>
                  {editIndex === i ? (
                    <Table.Input
                      value={row.brand}
                      onChange={e =>
                        handleSavedChange(i, "brand", e.target.value)
                      }
                    />
                  ) : (
                    row.brand
                  )}
                </Table.Cell>

                <Table.Cell>
                  {editIndex === i ? (
                    <Table.Input
                      value={row.asset}
                      onChange={e =>
                        handleSavedChange(i, "asset", e.target.value)
                      }
                    />
                  ) : (
                    row.asset
                  )}
                </Table.Cell>

                <Table.Cell>
                  {editIndex === i ? (
                    <Table.Input
                      value={row.remarks}
                      onChange={e =>
                        handleSavedChange(i, "remarks", e.target.value)
                      }
                    />
                  ) : (
                    row.remarks
                  )}
                </Table.Cell>

                <Table.Cell>
                  {row.image?.name || "Image"}
                </Table.Cell>

                <Table.Cell className="flex gap-2">
                  {editIndex === i ? (
                    <Button
                      variant="saveEdit"
                      onClick={handleSaveEdit}
                    >
                      Save Edit
                    </Button>
                  ) : (
                    <Button
                      variant="edit"
                      onClick={() => setEditIndex(i)}
                    >
                      Edit
                    </Button>
                  )}

                  <Button
                    variant="delete"
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

      {/* SAVE TO DB */}
      {saved.length > 0 && (
        <div className="flex justify-center">
          <Button variant="primary" size="md" onClick={handleSaveToDatabase}>
            Save
          </Button>
        </div>
      )}

    </div>
  );
}
