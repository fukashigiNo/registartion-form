import { createContext, useContext, useState } from "react";

type EmailContextType = {
  email: string;
  setEmail: (value: string) => void;
};

export const EmailContext = createContext<EmailContextType | undefined>(undefined);

export const EmailProvider = ({ children }: any) => {
  const [email, setEmail] = useState("");
  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  );
};


export const useEmailContext = () => {
  const ctx = useContext(EmailContext);
  if (!ctx) throw new Error("useEmailContext must be used inside NameProvider");
  return ctx;
};