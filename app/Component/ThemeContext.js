import { createContext, useContext, useReducer, useEffect } from "react";

export const ThemeContext = createContext(null);
export const ThemeDispatchContext = createContext(null);

export function ThemeProvider({ children }) {
    const [theme, dispatch] = useReducer(
        themeReducer,
        {
            isLight: true,
            menuOpened: false,
            windowWidth: null,
        }
    )

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
                isLight: !theme.isLight,
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
