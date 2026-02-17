import { useState } from "react";
import Table from "../../components/Table";
import Button from "../../components/Button";

export default function ShowcaseTable() {
  const emptyRow = {
    category: "",
    product: "",
    image: null,
  };

  const [rows, setRows] = useState([{ ...emptyRow }]);
  const [saved, setSaved] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // to reset image name in browser
 const [fileKey, setFileKey] = useState(0);

  /* -------- INPUT TABLE LOGIC -------- */

  const addRow = () => setRows([...rows, { ...emptyRow }]);

  const deleteRow = (index) => setRows(rows.filter((_, i) => i !== index));

  const updateRow = (index, key, value) => {
    const copy = [...rows];
    copy[index][key] = value;
    setRows(copy);
  };

  const isValid = () => rows.every((r) => r.category && r.product && r.image);

  const handleAddToSaved = () => {
    if (!isValid()) {
      return;
    }

    setSaved([...saved, ...rows]);
    setRows([{ ...emptyRow }]);

    // force file input reset
    setFileKey((prev) => prev + 1);
  };

  /* -------- SAVED TABLE LOGIC -------- */

  const handleSavedChange = (i, key, value) => {
    const copy = [...saved];
    copy[i][key] = value;
    setSaved(copy);
  };

  const handleDeleteSaved = (i) =>
    setSaved(saved.filter((_, idx) => idx !== i));

  const handleSaveEdit = () => setEditIndex(null);

const handleSaveToDatabase = () => {
  console.log(saved)
}

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button variant="neutral" size="md" onClick={addRow}>
          Add Row
        </Button>
      </div>

      {/* INPUT TABLE */}
      <Table>
        <Table.Header>
          <Table.Cell>Category</Table.Cell>
          <Table.Cell>Product</Table.Cell>
          <Table.Cell>Image</Table.Cell>
          <Table.Cell>Action</Table.Cell>
        </Table.Header>

        <Table.Body
          data={rows}
          render={(row, i) => (
            <Table.Row key={i}>
              <Table.Cell>
                <Table.Input
                  value={row.category}
                  onChange={(e) => updateRow(i, "category", e.target.value)}
                />
              </Table.Cell>

              <Table.Cell>
                <Table.Input
                  value={row.product}
                  onChange={(e) => updateRow(i, "product", e.target.value)}
                />
              </Table.Cell>

              <Table.Cell>
                <input
                  key={fileKey}
                  type="file"
                  onChange={(e) => updateRow(i, "image", e.target.files[0])}
                />
              </Table.Cell>

              <Table.Cell>
                <Button variant="delete" onClick={() => deleteRow(i)}>
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          )}
        />
      </Table>

      {/* BUTTONS */}
      <div className="flex gap-3">
        <Button variant="primary" size="md" onClick={handleAddToSaved} disabled={!isValid()}>
          Add
        </Button>
      </div>

      {/* SAVED TABLE */}
      {saved.length > 0 && (
        <Table>
          <Table.Header>
            <Table.Cell>Category</Table.Cell>
            <Table.Cell>Product</Table.Cell>
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
                      value={row.category}
                      onChange={(e) =>
                        handleSavedChange(i, "category", e.target.value)
                      }
                    />
                  ) : (
                    row.category
                  )}
                </Table.Cell>

                <Table.Cell>
                  {editIndex === i ? (
                    <Table.Input
                      value={row.product}
                      onChange={(e) =>
                        handleSavedChange(i, "product", e.target.value)
                      }
                    />
                  ) : (
                    row.product
                  )}
                </Table.Cell>

                <Table.Cell>{row.image?.name || "Image"}</Table.Cell>

                <Table.Cell>
                  {editIndex === i ? (
                    <Button variant="saveEdit" size="sm" onClick={handleSaveEdit}>Save Edit</Button>
                  ) : (
                    <Button variant="edit" size ="sm" onClick={() => setEditIndex(i)}>Edit</Button>
                  )}

                  <Button variant="delete" onClick={() => handleDeleteSaved(i)}>
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            )}
          />
        </Table>
      )}
      {saved.length > 0 && (
  <div >
    <Button
      variant="primary"
      size="md"
      onClick={handleSaveToDatabase}
    >
      Save to Database
    </Button>
  </div>
)}
    </div>
  );
}
