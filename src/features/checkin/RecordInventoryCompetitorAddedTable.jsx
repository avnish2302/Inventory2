import Table from "../../components/Table";
import Button from "../../components/Button";

export default function RecordInventoryCompetitorAddedTable({
  inventory,
}) {
  const {
    saved,
    emptyRow,
    editIndex,
    setEditIndex,
    handleSavedChange,
    handleDeleteSaved,
    handleSaveEdit,
  } = inventory;

  return (
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

            <Table.Cell className="flex gap-2">
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
                onClick={() =>
                  handleDeleteSaved(i)
                }
              >
                Delete
              </Button>
            </Table.Cell>
          </Table.Row>
        )}
      />
    </Table>
  );
}
