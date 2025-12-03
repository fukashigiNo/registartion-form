import { createContext, useContext, useState } from "react";

type PasswordContextType = {
  password: string;
  setPassword: (value: string) => void;
};

export const PasswordContext = createContext<PasswordContextType | undefined>(undefined);

export const PasswordProvider = ({ children }: any) => {
  const [password, setPassword] = useState("");
  return (
    <PasswordContext.Provider value={{ password, setPassword}}>
      {children}
    </PasswordContext.Provider>
  );
};


export const usePasswordContext = () => {
  const ctx = useContext(PasswordContext);
  if (!ctx) throw new Error("usePasswordContext must be used inside Passwordrovider");
  return ctx;
};
