import { createContext, useContext, useReducer, useEffect, useRef } from "react";

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
    const didMount = useRef(false);

    useEffect(() => {
        const stored = localStorage.getItem('schema');
        if (!didMount.current) {
            didMount.current = true;
            if (stored && stored !== theme.schema) {
                dispatch({
                    type: 'color_schema_changed',
                    schema: stored
                });
            }
            return;
        }

        if (stored !== theme.schema) {
            localStorage.setItem('schema', theme.schema);
            document.documentElement.dataset.theme = theme.schema;
        }
    }, [theme.schema]);

    useEffect(() => {
        if (typeof window === 'undefined') return;
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
