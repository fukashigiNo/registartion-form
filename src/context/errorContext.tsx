import { useContext, createContext, useState } from "react";

type AllErrors = {
    name?: string
    email?: string
    password?: string
    inn?: string
}

type ErrorContextType = {
    error: AllErrors
    setError: (value: AllErrors | ((prev: AllErrors) => AllErrors)) => void
}

export const ErrorContext = createContext<ErrorContextType | undefined>(undefined)

export const ErrorProvider = ({ children }: any) => {
    const [error, setError] = useState<AllErrors>({})
    return (
        <ErrorContext.Provider value={{ error, setError }}>
            {children}
        </ErrorContext.Provider>
    )
}

export const UseErrorContext = () => {
    const ctx = useContext(ErrorContext)
    if (!ctx) throw new Error('ErrorContext не найден')
    return ctx
}