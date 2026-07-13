import { createContext } from "react";

// Step1
export const BioContext = createContext();

// step2
export const BioProvider = ({children}) => {

    const name = "Al Muksid"

    return <BioContext.Provider value={name} >
        {children}
    </BioContext.Provider>
}