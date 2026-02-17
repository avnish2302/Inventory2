import Basic from "../features/checkin/Basic";
import Own from "../features/checkin/Own";
import RecordInventory from "../features/checkin/RecordInventory";
import ShowCase from "../features/checkin/ShowCase";
import Menu from "../features/checkin/Menu"
import { useNavigate, useParams } from "react-router-dom";
import Promotions from "../features/checkin/Promotions";
import Collection from "../features/checkin/Collection";
import AssetAssignment from "../features/checkin/AssetAssignment";

export default function CheckIn() {
  const navigate = useNavigate()
  //const [tab, setTab] = useState("basic");
  const {tab = "basic"} = useParams()

  const tabs = [
    { key: "basic", label: "Basic" },
    { key: "own-inventory", label: "Own Inventory" },
    { key: "record-inventory", label: "Record Inventory" },
    { key: "showcase", label: "Showcase" },
    { key: "menu", label: "Menu" },
    { key: "assets", label: "Asset Assignment" },
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
              px-3 py-1 rounded
              ${tab === t.key
                ? "bg-amber-800 text-white"
                : "bg-zinc-800 hover:bg-zinc-700"}
            `}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}

      {tab === "basic" && <Basic />}

      {tab === "own-inventory" && <Own />}

      {tab === "record-inventory" && <RecordInventory />}

      {tab === "showcase" && <ShowCase />}

      {tab === "menu" && <Menu/>}

      {tab === "assets" && <AssetAssignment/>}

      {tab === "promotions" && <Promotions/>}

      {tab === "collection" && <Collection/>}

    </div>
  );
}
