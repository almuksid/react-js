import { createContext, useContext } from "react";

// Step1
export const BioContext = createContext();

// step2
export const BioProvider = ({children}) => {

    const name = "Al Muksid";
    const age = 35;


    return <BioContext.Provider value={{name, age}} >
        {children}
    </BioContext.Provider>
}

// Custom Hook
export const customBioHook = () => {
    const context = useContext(BioContext);
    if(!context) {
        throw new Error("customBioHook must be used within a BioProvider")
    }
    return context;
}