import { useTheme, useThemeDispatch } from '@/app/Component/ThemeContext';
import styles from '@/app/styles/Component/ThemeSwitch.module.scss';

export default function ThemeSwitch() {
    const themeContext = useTheme();
    const themeDispatch = useThemeDispatch();
    const handleClick = () => {
        themeDispatch({
            type: 'color_schema_changed',
            isLight: !themeContext.isLight
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