import { createContext, useContext, useState } from "react";

type NameContextType = {
  name: string;
  setName: (value: string) => void;
};

export const NameContext = createContext<NameContextType | undefined>(undefined);

export const NameProvider = ({ children }: any) => {
  const [name, setName] = useState("");
  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};


export const useNameContext = () => {
  const ctx = useContext(NameContext);
  if (!ctx) throw new Error("useNameContext must be used inside NameProvider");
  return ctx;
};