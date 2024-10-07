import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const TokenContext = createContext({});

export function TokenContextProvider({ children }) {
    const [tokens, setToken] = useState(null);
    axios.defaults.baseURL = 'https://bitclub-server.vercel.app/?vercelToolbarCode=T8rrf6lkkN_tPqG';
    axios.defaults.withCredentials = true;
    useEffect(() => {
        try {
            if (!tokens) {
                axios.get('/tokens').then(({ data }) => {
                    setToken(data);
                })
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }, [])

    return (
        <TokenContext.Provider value={{ tokens, setToken }}>
            {children}
        </TokenContext.Provider>
    )
}