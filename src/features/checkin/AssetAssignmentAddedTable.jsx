import Table from "../../components/Table";
import Button from "../../components/Button";
import styled from "styled-components";

export default function AssetAssignmentAddedTable({ asset }) {
  return (
    <Table>
      <Table.Header>
        <Table.Cell>Brand</Table.Cell>
        <Table.Cell>Asset</Table.Cell>
        <Table.Cell>Remarks</Table.Cell>
        <Table.Cell>Image</Table.Cell>
        <Table.Cell>Actions</Table.Cell>
      </Table.Header>

      <Table.Body
        data={asset.saved}
        render={(row, i) => (
          <Table.Row key={i}>
            <Table.Cell>
              {asset.editIndex === i ? (
                <Table.Input
                  value={row.brand}
                  onChange={(e) =>
                    asset.handleSavedChange(i, "brand", e.target.value)
                  }
                />
              ) : (
                row.brand
              )}
            </Table.Cell>

            <Table.Cell>
              {asset.editIndex === i ? (
                <Table.Input
                  value={row.asset}
                  onChange={(e) =>
                    asset.handleSavedChange(i, "asset", e.target.value)
                  }
                />
              ) : (
                row.asset
              )}
            </Table.Cell>

            <Table.Cell>
              {asset.editIndex === i ? (
                <Table.Input
                  value={row.remarks}
                  onChange={(e) =>
                    asset.handleSavedChange(i, "remarks", e.target.value)
                  }
                />
              ) : (
                row.remarks
              )}
            </Table.Cell>

            <Table.Cell>{row.image?.name || "Image"}</Table.Cell>

            <Table.Cell>
              <Actions>

              {asset.editIndex === i ? (
                <Button variation="saveEdit" onClick={asset.handleSaveEdit}>
                  Save Edit
                </Button>
              ) : (
                <Button variation="edit" onClick={() => asset.setEditIndex(i)}>
                  Edit
                </Button>
              )}

              <Button variation="delete" onClick={() => asset.handleDeleteSaved(i)}>
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