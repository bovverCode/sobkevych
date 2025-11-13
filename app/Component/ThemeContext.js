import { createContext, useContext, useReducer, useEffect, act } from "react";

export const ThemeContext = createContext(null);
export const ThemeDispatchContext = createContext(null);

export function ThemeProvider({ children }) {
    const [theme, dispatch] = useReducer(
        themeReducer,
        {
            schema: 'light',
            menuOpened: false,
            windowWidth: null,
        }
    )

    useEffect(() => {
        if (localStorage.getItem('schema') === 'null') {
            localStorage.setItem('schema', theme.schema);
        }
    }, []);

    useEffect(() => {
        const themeSchema = localStorage.getItem('schema');
        if (themeSchema !== null) {
            dispatch({
                type: 'color_schema_changed',
                schema: themeSchema
            });
        }
    }, []);

    useEffect(() => {
        dispatch({
            type: 'resize',
            windowWidth: window.innerWidth,
        });
        const handleResize = () => {
            dispatch({
                type: 'resize',
                windowWidth: window.innerWidth,
            });
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ThemeContext value={theme}>
            <ThemeDispatchContext value={dispatch}>
                {children}
            </ThemeDispatchContext>
        </ThemeContext>
    )
}

export function useIsLight() {
    return useTheme().schema === 'light';
}

export function useIsMobile() {
    return useTheme().windowWidth < 1200;
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
            if (window !== undefined) {
                localStorage.setItem('schema', action.schema);
                const html = document.documentElement;
                html.dataset.theme = action.schema;
            }
            return {
                ...theme,
                schema: action.schema,
            };
        }
        case 'mobile_menu_toggle': {
            return {
                ...theme,
                menuOpened: !theme.menuOpened,
            }
        }
        case 'resize': {
            return {
                ...theme,
                windowWidth: action.windowWidth,
            }
        }
        default: {
            return theme;
        }
    }
}
