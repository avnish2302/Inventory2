import { createContext, useContext, useState } from "react";

const CashContext = createContext();

export const useCashContext = () => useContext(CashContext);

export const CashProvider = ({ children }) => {
  const [cashCollected, setCashCollected] = useState(0);

  const addCash = (amount) => {
    setCashCollected((prev) => prev + amount);
  };

  const resetCash = () => {
    setCashCollected(0);
  };

  return (
    <CashContext.Provider value={{ cashCollected, addCash, resetCash }}>
      {children}
    </CashContext.Provider>
  );
};
