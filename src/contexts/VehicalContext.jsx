import React, { createContext, useState, useContext } from "react";

// Create the context
const VehicleContext = createContext();

// Custom hook to use the Vehicle Context
export const useVehicleContext = () => useContext(VehicleContext);

// VehicleProvider to wrap around components that need access to the context
export const VehicleProvider = ({ children }) => {
  const [ownVehicle, setOwnVehicle] = useState(null); // Default value is null

  return (
    <VehicleContext.Provider value={{ ownVehicle, setOwnVehicle }}>
      {children}
    </VehicleContext.Provider>
  );
};