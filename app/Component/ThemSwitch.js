import { useTheme, useThemeDispatch } from '@/app/Component/ThemeContext';
import styles from '@/app/styles/Component/ThemeSwitch.module.scss';

export default function ThemeSwitch({ isLightTheme, setIsLightTheme }) {
    const themeContext = useTheme();
    const themeDispatch = useThemeDispatch();
    const handleClick = () => {
        themeDispatch({
            type: 'color_schema_changed'
        });
    };
    return (
        <div className={styles.theme_switch}>
            <button onClick={handleClick}>
                {themeContext.isLight ? 'Dark theme' : 'Light theme'}
            </button>
        </div>
    );
}