import { useIsLight, useTheme, useThemeDispatch } from '@/app/Component/ThemeContext';
import styles from '@/app/styles/Component/ThemeSwitch.module.scss';
import { useEffect, useState } from 'react';

export default function ThemeSwitch() {
    const themeDispatch = useThemeDispatch();
    const isLight = useIsLight();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);


    if (!isMounted) {
        return (
            <div className={styles.theme_switch}>
                Loading...
            </div>
        );
    }

    const handleClick = () => {
        themeDispatch({
            type: 'color_schema_changed',
            schema: isLight ? 'dark' : 'light'
        });
    };
    return (
        <div className={styles.theme_switch}>
            <button onClick={handleClick}>
                {isLight ? 'Dark theme' : 'Light theme'}
            </button>
        </div>
    );
}