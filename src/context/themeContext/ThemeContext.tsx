import { createContext, Children, useReducer } from "react";
import { lightTheme, themeReducer, ThemeState } from "./themeReducer";

interface ThemeContextProps {
    theme: ThemeState; 
    setDarkTime: () => void;
    setLightTime: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {

    const [ theme, dispatch ] = useReducer( themeReducer, lightTheme );

    const setDarkTime = () => {
        dispatch({ type: 'set_dark_theme' });
        console.log('dark...');
        
    }

    const setLightTime = () => {
        dispatch({ type: 'set_light_theme' });
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