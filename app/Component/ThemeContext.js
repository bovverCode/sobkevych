import { createContext, useContext, useReducer } from "react";

export const ThemeContext = createContext(null);
export const ThemeDispatchContext = createContext(null);

export function ThemeProvider({ children }) {
    const [theme, dispatch] = useReducer(
        themeReducer,
        {
            isLight: true,
            menuOpened: false
        }
    )

    return (
        <ThemeContext value={theme}>
            <ThemeDispatchContext value={dispatch}>
                {children}
            </ThemeDispatchContext>
        </ThemeContext>
    )
}

export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeDispatch() {
    return useContext(ThemeDispatchContext);
}

function themeReducer(theme, action) {
    switch (action.type) {
        case 'color_schema_changed': {
            return {
                ...theme,
                isLight: !theme.isLight
            };
        }
        case 'mobile_menu_toggle': {
            return {
                ...theme,
                menuOpened: !theme.menuOpened
            }
        }
    }
}
