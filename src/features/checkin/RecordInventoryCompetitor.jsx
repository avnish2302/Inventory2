import Button from "../../components/Button";
import ShopName from "../../components/ShopName";
import { useRecordInventoryCompetitor } from "../../hooks/useRecordInventoryCompetitor";
import RecordInventoryCompetitorAddedTable from "./RecordInventoryCompetitorAddedTable";
import RecordInventoryCompetitorTable from "./RecordInventoryCompetitorTable";


export default function RecordInventoryCompetitor() {
  const inventory = useRecordInventoryCompetitor();

  return (
    <div className="space-y-8">
      <ShopName />

      {/* INPUT SECTION */}
      <div className="bg-zinc-900 p-6 rounded-lg space-y-6">
        <RecordInventoryCompetitorTable inventory={inventory} />

        <div className="flex justify-center">
          <Button
            variant="primary"
            size="md"
            onClick={inventory.handleAdd}
            disabled={!inventory.isValid()}
          >
            Add
          </Button>
        </div>
      </div>

      {/* SAVED SECTION */}
      {inventory.saved.length > 0 && (
        <div className="bg-zinc-900 p-6 rounded-lg space-y-6">
          <RecordInventoryCompetitorAddedTable
            inventory={inventory}
          />

          <div className="flex justify-center">
            <Button
              variant="primary"
              size="md"
              onClick={inventory.handleSaveToDatabase}
            >
              Save
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
