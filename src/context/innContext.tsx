import { createContext, useContext, useState } from "react";

type InnContextType = {
  inn: string;
  setInn: (value: string) => void;
};

export const InnContext = createContext<InnContextType | undefined>(undefined);

export const InnProvider = ({ children }: any) => {
  const [inn, setInn] = useState("");
  return (
    <InnContext.Provider value={{ inn, setInn }}>
      {children}
    </InnContext.Provider>
  );
};


export const useInnContext = () => {
  const ctx = useContext(InnContext);
  if (!ctx) throw new Error("useInnContext must be used inside INnProvider");
  return ctx;
};