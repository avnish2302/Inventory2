import Table from "../../components/Table";
import Button from "../../components/Button";
import styled from "styled-components";

export default function RecordInventoryCompetitorAddedTable({
  inventoryCompetitor,
}) {
  const {
    saved,
    emptyRow,
    editIndex,
    setEditIndex,
    handleSavedChange,
    handleDeleteSaved,
    handleSaveEdit,
  } = inventoryCompetitor;

  return (
    <Table>
      <Table.Header>
        <Table.Cell>Category</Table.Cell>
        <Table.Cell>Product</Table.Cell>
        <Table.Cell>SKU</Table.Cell>
        <Table.Cell>Case (Qty)</Table.Cell>
        <Table.Cell>Bottle (Qty)</Table.Cell>
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
              <Actions>

              {editIndex === i ? (
                <Button
                variation="saveEdit"
                size="sm"
                onClick={handleSaveEdit}
                >
                  Save Edit
                </Button>
              ) : (
                <Button
                variation="edit"
                size="sm"
                onClick={() => setEditIndex(i)}
                >
                  Edit
                </Button>
              )}

              <Button
                variation="delete"
                size="sm"
                onClick={() =>
                  handleDeleteSaved(i)
                }
                >
                Delete
              </Button>
                </Actions>
            </Table.Cell>
          </Table.Row>
        )}
      />
    </Table>
  );
}

const Actions = styled.div`
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;