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
    dividerColor: 'white',
    colors: {
        primary: '#75CEDB',
        background: 'black',
        card: 'green',
        text: 'white',
        border: 'black',
        notification: 'black',
    }
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'black',
    colors: {
        primary: '#084F6A',
        background: '#FFFFFF',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: 'teal',
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