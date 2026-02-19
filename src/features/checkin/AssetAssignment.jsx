import Button from "../../components/Button";
import ShopName from "../../components/ShopName";
import { useAssetAssignment } from "../../hooks/useAssetAssignment";
import AssetAssignmentAddedTable from "./AssetAssignmentAddedTable";
import AssetAssignmentTable from "./AssetAssignmentTable";

export default function AssetAssignment() {
  const asset = useAssetAssignment();

  return (
    <div className="space-y-8">
      <ShopName />

      {/* ---------- INPUT SECTION ---------- */}
      <div className="bg-zinc-900 p-6 rounded-lg space-y-6">

        <AssetAssignmentTable asset={asset} />

        <div className="flex justify-center">
          <Button
            variant="primary"
            size="md"
            onClick={asset.handleAdd}
            disabled={!asset.isValid()}
          >
            Add
          </Button>
        </div>

      </div>

      {/* ---------- SAVED SECTION ---------- */}
      {asset.saved.length > 0 && (
        <div className="bg-zinc-900 p-6 rounded-lg space-y-6">

          <AssetAssignmentAddedTable asset={asset} />

          <div className="flex justify-center">
            <Button
              variant="primary"
              size="md"
              onClick={asset.handleSaveToDatabase}
            >
              Save
            </Button>
          </div>

        </div>
      )}
    </div>
  );
}
