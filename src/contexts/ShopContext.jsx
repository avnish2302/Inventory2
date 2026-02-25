import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const useShopContext = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [shopsVisited, setShopsVisited] = useState("");
  const [shopsPending, setShopsPending] = useState("");

  const updateShops = (visited, pending) => {
    setShopsVisited(visited);
    setShopsPending(pending);
  };

  return (
    <ShopContext.Provider
      value={{
        shopsVisited,
        shopsPending,
        updateShops,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};