import { Theme } from "@react-navigation/native"

type ThemeAction =
    | { type: 'set_light_theme' }
    | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark',
    dividerColor: string,
}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: 'rbga(0,0,0,0.7)',
    colors: {
        primary: '#75CEDB',
        background: 'black',
        card: 'green',
        text: 'white',
        border: 'red',
        notification: 'black',
    }
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rbga(0,0,0,0.7)',
    colors: {
        primary: '#084F6A',
        background: 'white',
        card: 'green',
        text: 'black',
        border: 'red',
        notification: 'black',
    }
}

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeAction => {

    switch (action.type) {
        case 'set_light_theme':
            return { ...lightTheme }

        case 'set_dark_theme':
            return { ...darkTheme }
    
        default:
            return state;
    }

}