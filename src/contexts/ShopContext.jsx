import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const useShopContext = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [shopsVisited, setShopsVisited] = useState(0);
  const [shopsPending, setShopsPending] = useState(0);

  const updateShops = (visited, pending) => {
    setShopsVisited(Number(visited));
    setShopsPending(Number(pending));
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