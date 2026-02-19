import ShopName from "../../components/ShopName";
import Button from "../../components/Button";
import { useRecordInventoryOwn } from "../../hooks/useRecordInventoryOwn";
import RecordInventoryOwnTable from "./RecordInventoryOwnTable";
import RecordInventoryOwnAddedTable from "./RecordInventoryOwnAddedTable";

export default function RecordInventoryOwn() {
  const own = useRecordInventoryOwn();

  return (
    <div className="space-y-8">
      <ShopName />

      {/* INPUT SECTION */}
      <div className="bg-zinc-900 p-6 rounded border border-zinc-800 space-y-6">

        <RecordInventoryOwnTable own={own} />

        <div className="flex justify-center">
          <Button
            variant="primary"
            size="md"
            onClick={own.handleAdd}
            disabled={!own.isValid}
          >
            Add
          </Button>
        </div>
      </div>

      {/* SAVED SECTION */}
      {own.saved.length > 0 && (
        <div className="bg-zinc-900 p-6 rounded border border-zinc-800 space-y-6">

          <RecordInventoryOwnAddedTable own={own} />

          <div className="flex justify-center">
            <Button
              variant="primary"
              size="md"
              onClick={own.handleSaveToDB}
            >
              Save
            </Button>
          </div>

        </div>
      )}
    </div>
  );
}
