import Table from "../../components/Table";
import Button from "../../components/Button";

export default function ShowcaseTable({ showcase }) {
  return (
    <>
      <div className="flex justify-end">
        <Button
          variant="neutral"
          size="md"
          onClick={showcase.addRow}
        >
          Add Row
        </Button>
      </div>

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
                  <label className="cursor-pointer bg-zinc-700 px-3 py-1 rounded text-sm">
                    Choose File
                    <input
                      key={showcase.fileKey}
                      type="file"
                      className="hidden"
                      onChange={(e) =>
                        showcase.updateRow(i, "image", e.target.files[0])
                      }
                    />
                  </label>
                 ) : (
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs break-all">
                      {row.image.name}
                    </span>

                    <label className="text-amber-600 text-xs cursor-pointer">
                      Change
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) =>
                          showcase.updateRow(i, "image", e.target.files[0])
                        }
                      />
                    </label>
                  </div>
                )}
              </Table.Cell>

              <Table.Cell>
                <Button
                  variant="delete"
                  onClick={() => showcase.deleteRow(i)}
                >
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
