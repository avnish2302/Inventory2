import ShopName from "../../components/ShopName";
import Button from "../../components/Button";
import { useMenu } from "../../hooks/useMenu";
import MenuTable from "./MenuTable";
import MenuAddedTable from "./MenuAddedTable";

export default function Menu() {
  const menu = useMenu();

  return (
    <div className="space-y-8">
      <ShopName />

      {/* INPUT SECTION */}
      <div className="bg-zinc-900 p-6 rounded-lg space-y-6">
        <MenuTable menu={menu} />

        <div className="flex justify-center">
          <Button
            size="md"
            variant="primary"
            onClick={menu.handleAdd}
            disabled={!menu.isValid()}
          >
            Add
          </Button>
        </div>
      </div>

      {/* SAVED SECTION */}
      {menu.saved.length > 0 && (
        <div className="bg-zinc-900 p-6 rounded-lg space-y-6">
          <MenuAddedTable menu={menu} />

          <div className="flex justify-center">
            <Button
              size="md"
              variant="primary"
              onClick={menu.handleSaveToDatabase}
            >
              Save
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
