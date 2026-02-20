
import Table from "../../components/Table";
import Button from "../../components/Button";

export default function MenuAddedTable({ menu }) {
  return (
    <Table>
      <Table.Header>
        <Table.Cell>Category</Table.Cell>
        <Table.Cell>Product</Table.Cell>
        <Table.Cell>Price</Table.Cell>
        <Table.Cell>Image</Table.Cell>
        <Table.Cell>Actions</Table.Cell>
      </Table.Header>

      <Table.Body
        data={menu.saved}
        render={(row, i) => (
          <Table.Row key={i}>
            <Table.Cell>
              {menu.editIndex === i ? (
                <Table.Input
                  value={row.category}
                  onChange={(e) =>
                    menu.handleSavedChange(i, "category", e.target.value)
                  }
                />
              ) : (
                row.category
              )}
            </Table.Cell>

            <Table.Cell>
              {menu.editIndex === i ? (
                <Table.Input
                  value={row.product}
                  onChange={(e) =>
                    menu.handleSavedChange(i, "product", e.target.value)
                  }
                />
              ) : (
                row.product
              )}
            </Table.Cell>

            <Table.Cell>
              {menu.editIndex === i ? (
                <Table.Input
                  value={row.price}
                  onChange={(e) =>
                    menu.handleSavedChange(i, "price", e.target.value)
                  }
                />
              ) : (
                `₹ ${row.price}`
              )}
            </Table.Cell>

            <Table.Cell>
              {row.image?.name || "Image"}
            </Table.Cell>

            <Table.Cell>
              {menu.editIndex === i ? (
                <Button variation="saveEdit" onClick={menu.handleSaveEdit}>
                  Save Edit
                </Button>
              ) : (
                <Button variation="edit" onClick={() => menu.setEditIndex(i)}>
                  Edit
                </Button>
              )}

              <Button variation="delete" onClick={() => menu.handleDeleteSaved(i)}>
                Delete
              </Button>
            </Table.Cell>
          </Table.Row>
        )}
      />
    </Table>
  );
}