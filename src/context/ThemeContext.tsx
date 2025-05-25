import {createContext} from "react";

type ThemeContextType = {
    theme: string,
    changeTheme: (theme: string) => void
}

const defaultValue: ThemeContextType = {
    theme: 'day',
    changeTheme: (theme: string) => {
        console.log(theme)
    }
};

export const ChangeThemeContext = createContext<ThemeContextType>(defaultValue);