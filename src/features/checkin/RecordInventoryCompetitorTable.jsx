import Button from "../../components/Button";
import Table from "../../components/Table";


export default function RecordInventoryCompetitorTable({
  inventory,
}) {
  const {
    rows,
    emptyRow,
    handleChange,
    addRow,
    deleteRow,
  } = inventory;

  return (
    <>
      <div className="flex justify-end">
        <Button
          variant="neutral"
          size="md"
          onClick={addRow}
        >
          Add Row
        </Button>
      </div>

      <Table>
        <Table.Header>
          <Table.Cell>Category</Table.Cell>
          <Table.Cell>Product</Table.Cell>
          <Table.Cell>SKU</Table.Cell>
          <Table.Cell>Case</Table.Cell>
          <Table.Cell>Bottle</Table.Cell>
          <Table.Cell>Action</Table.Cell>
        </Table.Header>

        <Table.Body
          data={rows}
          render={(row, i) => (
            <Table.Row key={i}>
              {Object.keys(emptyRow).map((key) => (
                <Table.Cell key={key}>
                  <Table.Input
                    type={
                      key === "caseQty" ||
                      key === "bottleQty"
                        ? "number"
                        : "text"
                    }
                    value={row[key]}
                    onChange={(e) =>
                      handleChange(
                        i,
                        key,
                        e.target.value
                      )
                    }
                  />
                </Table.Cell>
              ))}

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
    </>
  );
}
