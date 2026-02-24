import { createContext, useContext, useState } from "react";

const InventoryContext = createContext();

export const useInventoryContext = () => useContext(InventoryContext);

export const InventoryProvider = ({ children }) => {
  const [totalInventory, setTotalInventory] = useState(0);

  const calculateAndSetInventory = (savedRows) => {
    const total = savedRows.reduce((acc, row) => {
      return (
        acc +
        Number(row.casesWarm || 0) +
        Number(row.casesCold || 0) +
        Number(row.bottlesWarm || 0) +
        Number(row.bottlesCold || 0)
      );
    }, 0);

    setTotalInventory(total);
  };

  const resetInventory = () => setTotalInventory(0);

  return (
    <InventoryContext.Provider
      value={{ totalInventory, calculateAndSetInventory, resetInventory }}
    >
      {children}
    </InventoryContext.Provider>
  );
};