import { useState } from "react";
import Table from "../../components/Table";
import Button from "../../components/Button";

export default function MenuTable() {

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

  /* ---------------- INPUT TABLE LOGIC ---------------- */

  const addRow = () =>
    setRows([...rows, { ...emptyRow }]);

  const deleteRow = (index) =>
    setRows(rows.filter((_, i) => i !== index));

  const updateRow = (index, key, value) => {
    const copy = [...rows];

    // Only numbers for price
    if (key === "price") {
      value = value.replace(/[^0-9.]/g, "");
    }

    copy[index][key] = value;
    setRows(copy);
  };

  const isValid = () =>
    rows.every(
      (r) =>
        r.category &&
        r.product &&
        r.price &&
        r.image
    );

  const handleAddToSaved = () => {
    if (!isValid()) return;

    setSaved([...saved, ...rows]);
    setRows([{ ...emptyRow }]);

    setFileKey((p) => p + 1);
  };

  /* ---------------- SAVED TABLE LOGIC ---------------- */

  const handleSavedChange = (i, key, value) => {
    const copy = [...saved];

    if (key === "price") {
      value = value.replace(/[^0-9.]/g, "");
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

  /* ---------------- UI ---------------- */

  return (
    <div className="space-y-6">

      {/* Add Row */}
      <div className="flex justify-end">
        <Button size = "md" variant="neutral" onClick={addRow}>
          Add Row
        </Button>
      </div>

      {/* INPUT TABLE */}
      <Table>
        <Table.Header>
          <Table.Cell>Category</Table.Cell>
          <Table.Cell>Product</Table.Cell>
          <Table.Cell>Price</Table.Cell>
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
                    updateRow(i, "category", e.target.value)
                  }
                />
              </Table.Cell>

              <Table.Cell>
                <Table.Input
                  value={row.product}
                  onChange={(e) =>
                    updateRow(i, "product", e.target.value)
                  }
                />
              </Table.Cell>

              {/* PRICE INPUT */}
              <Table.Cell>
                <Table.Input
                  value={row.price}
                  placeholder="₹"
                  onChange={(e) =>
                    updateRow(i, "price", e.target.value)
                  }
                />
              </Table.Cell>

              <Table.Cell>
                <input
                  key={fileKey}
                  type="file"
                  onChange={(e) =>
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

      {/* Add Button */}
      <Button
      size = "md"
        variant="primary"
        onClick={handleAddToSaved}
        disabled={!isValid()}
      >
        Add
      </Button>

      {/* SAVED TABLE */}
      {saved.length > 0 && (
        <Table>
          <Table.Header>
            <Table.Cell>Category</Table.Cell>
            <Table.Cell>Product</Table.Cell>
            <Table.Cell>Price</Table.Cell>
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

                {/* PRICE */}
                <Table.Cell>
                  {editIndex === i ? (
                    <Table.Input
                      value={row.price}
                      onChange={(e) =>
                        handleSavedChange(
                          i,
                          "price",
                          e.target.value
                        )
                      }
                    />
                  ) : (
                    `₹ ${row.price}`
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
        <div className="flex justify-end">
          <Button onClick={handleSaveToDatabase}>
            Save to Database
          </Button>
        </div>
      )}

    </div>
  );
}
