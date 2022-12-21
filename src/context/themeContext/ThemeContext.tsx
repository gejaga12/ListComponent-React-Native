import { Children, createContext } from "react";

interface ThemeContextProps {
    theme: any; 
    setDarkTime: () => void;
    setLightTime: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {

    const theme = {};

    const setDarkTime = () => {
        console.log('dark...');
        
    }
    
    const setLightTime = () => {
        console.log('light...');
   
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            setLightTime,
            setDarkTime,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}