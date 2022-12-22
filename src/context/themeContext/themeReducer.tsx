import { Theme } from "@react-navigation/native"

type ThemeAction =
    | { type: 'set_light_theme' }
    | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark',
    dividerColor: string,
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rbga(0,0,0,0.7)',
    colors: {
        primary: 'red',
        background: 'white',
        card: 'green',
        text: 'pink',
        border: 'red',
        notification: 'black',
    }
}

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeAction => {

    switch (action.type) {
        case 'set_light_theme':
            return { ...lightTheme }

        default:
            return state;
    }

}