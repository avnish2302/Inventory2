import ShopName from "../../components/ShopName";
import Button from "../../components/Button";
import { useShowcase } from "../../hooks/useShowcase";
import ShowcaseTable from "./ShowcaseTable";
import ShowcaseAddedTable from "./ShowcaseAddedTable";

export default function Showcase() {
  const showcase = useShowcase();

  return (
    <div className="space-y-8">
      <ShopName />

      {/* INPUT SECTION */}
      <div className="bg-zinc-900 p-6 rounded-lg space-y-6">
        <ShowcaseTable showcase={showcase} />

        <div className="flex justify-center">
          <Button
            variant="primary"
            size="md"
            onClick={showcase.handleAdd}
            disabled={!showcase.isValid()}
          >
            Add
          </Button>
        </div>
      </div>

      {/* SAVED SECTION */}
      {showcase.saved.length > 0 && (
        <div className="bg-zinc-900 p-6 rounded-lg space-y-6">
          <ShowcaseAddedTable showcase={showcase} />

          <div className="flex justify-center">
            <Button
              variant="primary"
              size="md"
              onClick={showcase.handleSaveToDatabase}
            >
              Save
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
