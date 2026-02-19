import Basic from "../features/checkin/Basic";
import RecordInventoryOwn from "../features/checkin/RecordInventoryOwn";
import RecordInventoryCompetitor from "../features/checkin/RecordInventoryCompetitor";
import ShowCase from "../features/checkin/ShowCase";
import Menu from "../features/checkin/Menu"
import { useNavigate, useParams } from "react-router-dom";
import Promotions from "../features/checkin/Promotions";
import Collection from "../features/checkin/Collection";
import AssetAssignment from "../features/checkin/AssetAssignment";

export default function CheckIn() {
  const navigate = useNavigate()
  const {tab = "basic"} = useParams()

  const tabs = [
    { key: "basic", label: "Basic" },
    { key: "record-inventory-own", label: "Record Inventory Own" },
    { key: "record-inventory-competitor", label: "Record Inventory Competitor" },
    { key: "showcase", label: "Showcase" },
    { key: "menu", label: "Menu" },
    { key: "asset-assignment", label: "Asset Assignment" },
    { key: "promotions", label: "Promotions" },
    { key: "collection", label: "Collection" },
  ];

  return (
    <div className="space-y-6">

      {/* PAGE TITLE */}
      <h2 className="text-2xl font-bold text-amber-700">
        Check-In
      </h2>

      {/* TABS */}
      <div className="flex gap-2 flex-wrap">
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => navigate(`/checkin/${t.key}`)}
            className={`
              px-3 py-1 rounded cursor-pointer
              ${tab === t.key
                ? "bg-zinc-700 text-white border border-zinc-400"
                : "bg-zinc-800 hover:bg-zinc-700"}
            `}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}

      {tab === "basic" && <Basic />}

      {tab === "record-inventory-own" && <RecordInventoryOwn/>}

      {tab === "record-inventory-competitor" && <RecordInventoryCompetitor/>}

      {tab === "showcase" && <ShowCase />}

      {tab === "menu" && <Menu/>}

      {tab === "asset-assignment" && <AssetAssignment/>}

      {tab === "promotions" && <Promotions/>}

      {tab === "collection" && <Collection/>}

    </div>
  );
}
