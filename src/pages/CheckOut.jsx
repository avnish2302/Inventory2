import { useState } from "react";
import ShopName from "../components/ShopName";
import Button from "../components/Button";


export default function CheckOut({
  shopsVisited = 0,
  shopsPending = 0,
}) {
  const [timestamp, setTimestamp] = useState(null);

  /* ---------- CALCULATIONS ---------- */


  /* ---------- SAVE ---------- */

  const handleSave = () => {
    const currentTime = new Date().toISOString();
    setTimestamp(currentTime);

    console.log("Checkout saved at:", currentTime);
  };

  return (
    <div className="space-y-8 p-6 bg-zinc-900 rounded border border-zinc-800">
      <ShopName />

      {/* ---------- ACTIVITY SUMMARY ---------- */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-amber-600">
          Activity Summary
        </h2>

        <div className="grid grid-cols-[220px_1fr] gap-y-2">
          <div>Entered Inventory </div>
          <div className="font-semibold">: 0 </div>

          <div>Collected Cash </div>
          <div className="font-semibold">: 0 Rs</div>

          <div>Promotion Given</div>
          <div>: Promotion given goes here</div>
        </div>
      </div>

      {/* ---------- PENDING ---------- */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-amber-600">Pending</h2>

        <p>1. No collections</p>
      </div>

      {/* ---------- SHOP STATS ---------- */}
      <div className="flex gap-10 text-center">
        <div>
          <p className="text-sm text-zinc-400">Shops Visited</p>
          <p className="text-xl font-bold">{shopsVisited}</p>
        </div>

        <div>
          <p className="text-sm text-zinc-400">Shops Pending</p>
          <p className="text-xl font-bold">{shopsPending}</p>
        </div>
      </div>

      {/* ---------- SAVE BUTTON ---------- */}
      <div className="flex justify-center">
        <Button variant="primary" size="md" onClick={handleSave}>
          Save
        </Button>
      </div>

      {/* ---------- TIMESTAMP DISPLAY ---------- */}
      {timestamp && (
        <div className="text-center text-sm text-zinc-400">
          Saved at: {new Date(timestamp).toLocaleString()}
        </div>
      )}
    </div>
  );
}
