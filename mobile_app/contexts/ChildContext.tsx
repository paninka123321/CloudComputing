import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ChildContextType = {
  childId: string;
  setChildId: (id: string) => void;
};

const ChildContext = createContext<ChildContextType | undefined>(undefined);

export const useChild = () => {
  const context = useContext(ChildContext);
  if (!context) {
    throw new Error("useChild must be used within ChildProvider");
  }
  return context;
};

export const ChildProvider = ({ children }: { children: React.ReactNode }) => {
  const [childId, setChildIdState] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("childId").then(id => {
      if (id) setChildIdState(id);
    });
  }, []);

  const setChildId = (id: string) => {
    setChildIdState(id);
    AsyncStorage.setItem("childId", id);
  };

  return (
    <ChildContext.Provider value={{ childId, setChildId }}>
      {children}
    </ChildContext.Provider>
  );
};
