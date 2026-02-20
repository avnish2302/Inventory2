import styled from "styled-components";
import Table from "../../components/Table";
import Button from "../../components/Button";

export default function ShowcaseAddedTable({ showcase }) {
  return (
    <Table>
      <Table.Header>
        <Table.Cell>Category</Table.Cell>
        <Table.Cell>Product</Table.Cell>
        <Table.Cell>Image</Table.Cell>
        <Table.Cell>Actions</Table.Cell>
      </Table.Header>

      <Table.Body
        data={showcase.saved}
        render={(row, i) => (
          <Table.Row key={i}>
            <Table.Cell>
              {showcase.editIndex === i ? (
                <Table.Input
                  value={row.category}
                  onChange={(e) =>
                    showcase.handleSavedChange(
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
              {showcase.editIndex === i ? (
                <Table.Input
                  value={row.product}
                  onChange={(e) =>
                    showcase.handleSavedChange(
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
              <Actions>
                {showcase.editIndex === i ? (
                  <Button
                    variation="saveEdit"
                    onClick={showcase.handleSaveEdit}
                  >
                    Save Edit
                  </Button>
                ) : (
                  <Button
                    variation="edit"
                    onClick={() => showcase.setEditIndex(i)}
                  >
                    Edit
                  </Button>
                )}

                <Button
                  variation="delete"
                  onClick={() =>
                    showcase.handleDeleteSaved(i)
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

/* =============================== */

const Actions = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
`;