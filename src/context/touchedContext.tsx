
import { createContext, useState, useContext } from "react";

type Touched = {
    touched: string,
    setTouched: (value: string) => void
}

export const TouchedContext = createContext<Touched | undefined>(undefined)

export const TouchedProvider = ({children}:any) => {
    const [touched, setTouched] = useState('')
    return (
        <TouchedContext.Provider value={{touched, setTouched}}>
            {children}
        </TouchedContext.Provider>
    )
}

export const UseTouchedContext = () => {
    const ctx = useContext(TouchedContext)
    if(!ctx) throw new Error('Error')
    return ctx
}