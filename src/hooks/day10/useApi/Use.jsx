import { createContext, use } from "react";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const name = "Al Muksid";
    const age = 35;
    const department = "Software Engineering";

    return <UserContext.Provider value={{ name, age, department }}>
        {children}
    </UserContext.Provider>
}

export const customUseHooks = () => {
    const context = use(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context
}