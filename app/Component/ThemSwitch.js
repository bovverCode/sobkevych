import styles from '@/app/styles/Component/ThemeSwitch.module.scss';
import { useTheme, useThemeDispatch } from './ThemeContext';

export default function ThemeSwitch({ isLightTheme, setIsLightTheme }) {
    const themeContext = useTheme();
    const themeDispatch = useThemeDispatch();
    const handleClick = () => {
        themeDispatch({
            type: 'changed'
        });
    };
    return (
        <div className='theme-switch'>
            <button onClick={handleClick}>
                {themeContext.isLight ? 'Dark theme' : 'Light theme'}
            </button>
        </div>
    );
}