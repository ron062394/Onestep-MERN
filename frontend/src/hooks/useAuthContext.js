import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw Error('useAuthContext should only be used within an AuthContextProvider.')
    }

    return context;
}