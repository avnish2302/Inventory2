import Table from "../../components/Table";
import Button from "../../components/Button";

export default function AssetAssignmentTable({ asset }) {
  return (
    <>
      <div className="flex justify-end">
        <Button variant="neutral" size="md" onClick={asset.addRow}>
          Add Row
        </Button>
      </div>

      <Table>
        <Table.Header>
          <Table.Cell>Brand</Table.Cell>
          <Table.Cell>Asset</Table.Cell>
          <Table.Cell>Remarks</Table.Cell>
          <Table.Cell>Image</Table.Cell>
          <Table.Cell>Action</Table.Cell>
        </Table.Header>

        <Table.Body
          data={asset.rows}
          render={(row, i) => (
            <Table.Row key={i}>
              <Table.Cell>
                <Table.Input
                  value={row.brand}
                  onChange={(e) => asset.updateRow(i, "brand", e.target.value)}
                />
              </Table.Cell>

              <Table.Cell>
                <Table.Input
                  value={row.asset}
                  onChange={(e) => asset.updateRow(i, "asset", e.target.value)}
                />
              </Table.Cell>

              <Table.Cell>
                <Table.Input
                  value={row.remarks}
                  onChange={(e) =>
                    asset.updateRow(i, "remarks", e.target.value)
                  }
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
                          asset.updateRow(i, "image", e.target.files[0])
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
                            asset.updateRow(i, "image", e.target.files[0])
                          }
                        />
                      </label>
                    </div>
                  )}
                </div>
              </Table.Cell>

              <Table.Cell>
                <Button variant="delete" onClick={() => asset.deleteRow(i)}>
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
