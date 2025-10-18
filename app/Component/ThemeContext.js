import { createContext, useContext, useReducer } from "react";

export const ThemeContext = createContext(null);
export const ThemeDispatchContext = createContext(null);

export function ThemeProvider({ children }) {
    const [theme, dispatch] = useReducer(
        themeReducer,
        {isLight: true}
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
        case 'changed': {
            return {
                ...theme,
                isLight: !theme.isLight
            };
        }
    }
}
