"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface StateContextProps {
  activeMenu: boolean;
  initialState: { userProfile: boolean; language: boolean };

  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const StateContext = createContext<StateContextProps | undefined>(undefined);

const initialState = {
  userProfile: false,
  language: false,
};

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <StateContext.Provider
      value={{
        activeMenu,

        initialState,

        setActiveMenu,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = (): StateContextProps => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useContext must be used within a StateContextProvider");
  }
  return context;
};
