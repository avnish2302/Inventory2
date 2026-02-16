<<<<<<< HEAD
import { useNavigate, useParams } from "react-router-dom";
import Basic from "../features/checkin/Basic";
import RecordInventory from "../features/checkin/RecodInventory";
import Showcase from "../features/checkin/Showcase"
import Own from "../features/checkin/Own";


export default function CheckIn() {
  const navigate = useNavigate();
  const { tab = "basic" } = useParams(); 

  const tabs = [
    "basic",
    "own",
    "record inventory",
    "showcase",
    "menu",
    "assets",
    "promotions",
    "collection",
  ];
=======
import { useState } from "react";

// IMPORT FROM FOLDER
import OwnInventory from "./checkin/OwnInventory";
import Basic from "./checkin/Basic";

export default function CheckIn() {
  const [tab, setTab] = useState("basic");
>>>>>>> ed06820a01d41180439ee8fc7c6e2424b2ac8da8

  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-700 mb-4">
        Check-In
      </h2>

      {/* Tabs */}
      <div className="flex gap-2 mb-4 flex-wrap">
<<<<<<< HEAD
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => navigate(`/checkin/${t}`)}
=======
        {[
          "basic",
          "own",
          "competitor",
          "showcase",
          "menu",
          "assets",
          "promotions",
          "collection",
        ].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
>>>>>>> ed06820a01d41180439ee8fc7c6e2424b2ac8da8
            className={`px-3 py-1 rounded capitalize ${
              tab === t ? "bg-amber-800" : "bg-zinc-800"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

<<<<<<< HEAD
      {/* Content */}
      {tab === "basic" && <Basic/>}
      {tab === "own" && <Own/>}

      {tab === "record inventory" && <RecordInventory/>}

      {tab === "showcase" && <Showcase/>}
=======
      {/* TAB CONTENT */}

      {/* BASIC */}
      {tab === "basic" && <Basic />}

      {/* OWN INVENTORY */}
      {tab === "own" && <OwnInventory />}

      {/* PLACEHOLDERS FOR NOW */}
      {tab === "competitor" && (
        <div className="bg-zinc-900 p-6 rounded">
          Record Inventory (Competitor)
        </div>
      )}

      {tab === "showcase" && (
        <div className="bg-zinc-900 p-6 rounded">
          Showcase / On-Display
        </div>
      )}
>>>>>>> ed06820a01d41180439ee8fc7c6e2424b2ac8da8

      {tab === "menu" && (
        <div className="bg-zinc-900 p-6 rounded">
          Menu (On Trade, HCR)
        </div>
      )}

      {tab === "assets" && (
        <div className="bg-zinc-900 p-6 rounded">
          Asset Assignment
        </div>
      )}

      {tab === "promotions" && (
        <div className="bg-zinc-900 p-6 rounded">
          Promotions
        </div>
      )}

      {tab === "collection" && (
        <div className="bg-zinc-900 p-6 rounded">
          Collection
        </div>
      )}
    </div>
  );
}
