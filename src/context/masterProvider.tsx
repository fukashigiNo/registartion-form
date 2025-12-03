import { createContext,  } from "react";
import { EmailProvider } from "./emailContext";
import { InnProvider } from "./innContext";
import { NameProvider } from "./nameContext";
import { PasswordProvider } from "./passwordContext";
import { TouchedProvider } from "./touchedContext";
import { ErrorProvider } from "./errorContext";
export const masterContext = createContext(null)

export const MasterProvider = ({ children }: any) => {
    return (
        <EmailProvider>
            <InnProvider>
                <NameProvider>
                    <PasswordProvider>
                        <TouchedProvider>
                            <ErrorProvider>
                                {children}
                            </ErrorProvider>
                        </TouchedProvider>
                    </PasswordProvider>
                </NameProvider>
            </InnProvider>
        </EmailProvider>
    );
};