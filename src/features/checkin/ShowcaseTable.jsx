import { useState } from "react";
import Table from "../../components/Table";

export default function ShowcaseTable({
  rows,
  saved,
  onAddRow,
  onDeleteRow,
  onChange,
  onSave,
  setSaved,
}) {
  const [editIndex, setEditIndex] = useState(null);

  /* -------- SAVED TABLE ACTIONS -------- */

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

      {/* -------- INPUT TABLE -------- */}
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
                  onChange={(e) =>
                    onChange(i, "category", e.target.value)
                  }
                />
              </Table.Cell>

              <Table.Cell>
                <Table.Input
                  value={row.product}
                  onChange={(e) =>
                    onChange(i, "product", e.target.value)
                  }
                />
              </Table.Cell>

              <Table.Cell>
                <input
                  type="file"
                  onChange={(e) =>
                    onChange(
                      i,
                      "image",
                      e.target.files[0]
                    )
                  }
                />
              </Table.Cell>

              <Table.Cell>
                <Table.Button
                  variant="delete"
                  onClick={() => onDeleteRow(i)}
                >
                  delete
                </Table.Button>
              </Table.Cell>
            </Table.Row>
          )}
        />
      </Table>

      {/* -------- BUTTONS -------- */}
      <div className="flex gap-3">
        <Table.Button onClick={onAddRow}>
          Add Row
        </Table.Button>

        <Table.Button onClick={onSave}>
          Save
        </Table.Button>
      </div>

      {/* -------- SAVED TABLE -------- */}
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
                        handleSavedChange(
                          i,
                          "category",
                          e.target.value
                        )
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
                        handleSavedChange(
                          i,
                          "product",
                          e.target.value
                        )
                      }
                    />
                  ) : (
                    row.product
                  )}
                </Table.Cell>

                <Table.Cell>
                  {row.image?.name || "Image"}
                </Table.Cell>

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
