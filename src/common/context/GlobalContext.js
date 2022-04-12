import { createContext } from "react";

export const initialState = {
    user: null
}

const GlobalContext = createContext(initialState);

export default GlobalContext;