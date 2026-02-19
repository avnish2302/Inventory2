import Table from "../../components/Table";
import Button from "../../components/Button";

export default function MenuTable({ menu }) {
  return (
    <>
      <div className="flex justify-end">
        <Button size="md" variant="neutral" onClick={menu.addRow}>
          Add Row
        </Button>
      </div>

      <Table>
        <Table.Header>
          <Table.Cell>Category</Table.Cell>
          <Table.Cell>Product</Table.Cell>
          <Table.Cell>Price</Table.Cell>
          <Table.Cell>Image</Table.Cell>
          <Table.Cell>Action</Table.Cell>
        </Table.Header>

        <Table.Body
          data={menu.rows}
          render={(row, i) => (
            <Table.Row key={i}>
              <Table.Cell>
                <Table.Input
                  value={row.category}
                  onChange={(e) =>
                    menu.updateRow(i, "category", e.target.value)
                  }
                />
              </Table.Cell>

              <Table.Cell>
                <Table.Input
                  value={row.product}
                  onChange={(e) => menu.updateRow(i, "product", e.target.value)}
                />
              </Table.Cell>

              <Table.Cell>
                <Table.Input
                  value={row.price}
                  placeholder="₹"
                  onChange={(e) => menu.updateRow(i, "price", e.target.value)}
                />
              </Table.Cell>

              <Table.Cell>
                <div className="flex flex-col items-center gap-1">
                  {!row.image ? (
                    <label className="cursor-pointer bg-zinc-800 px-3 py-1 rounded text-sm hover:bg-zinc-700">
                      Choose File
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) =>
                          menu.updateRow(i, "image", e.target.files[0])
                        }
                      />
                    </label>
                  ) : (
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs break-all max-w-[120px]">
                        {row.image.name}
                      </span>

                      <label className="cursor-pointer text-amber-600 text-xs hover:underline">
                        Change
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) =>
                            menu.updateRow(i, "image", e.target.files[0])
                          }
                        />
                      </label>
                    </div>
                  )}
                </div>
              </Table.Cell>

              <Table.Cell>
                <Button variant="delete" onClick={() => menu.deleteRow(i)}>
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
