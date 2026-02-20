import Table from "../../components/Table"; // Import the Table component which now has all the styling for file input
import Button from "../../components/Button";

export default function ShowcaseTable({ showcase }) {
  return (
    <>
      <Table>
        <Table.Header>
          <Table.Cell>Category</Table.Cell>
          <Table.Cell>Product</Table.Cell>
          <Table.Cell>Image</Table.Cell>
          <Table.Cell>Action</Table.Cell>
        </Table.Header>

        <Table.Body
          data={showcase.rows}
          render={(row, i) => (
            <Table.Row key={i}>
              <Table.Cell>
                <Table.Input
                  value={row.category}
                  onChange={(e) =>
                    showcase.updateRow(i, "category", e.target.value)
                  }
                />
              </Table.Cell>

              <Table.Cell>
                <Table.Input
                  value={row.product}
                  onChange={(e) =>
                    showcase.updateRow(i, "product", e.target.value)
                  }
                />
              </Table.Cell>

              <Table.Cell>
                {!row.image ? (
                  <Table.FileButton>
                    Choose File
                    <Table.HiddenInput
                      key={showcase.fileKey}
                      type="file"
                      onChange={(e) =>
                        showcase.updateRow(i, "image", e.target.files[0])
                      }
                    />
                  </Table.FileButton>
                ) : (
                  <Table.FileInfo>
                    <Table.FileName>{row.image.name}</Table.FileName>

                    <Table.ChangeLabel>
                      Change
                      <Table.HiddenInput
                        type="file"
                        onChange={(e) =>
                          showcase.updateRow(i, "image", e.target.files[0])
                        }
                      />
                    </Table.ChangeLabel>
                  </Table.FileInfo>
                )}
              </Table.Cell>

              <Table.Cell>
                <Button variation="delete" onClick={() => showcase.deleteRow(i)}>
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          )}
        />
      </Table>
    </>
  );
}
