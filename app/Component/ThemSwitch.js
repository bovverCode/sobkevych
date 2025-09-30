import styles from '@/app/styles/Component/ThemeSwitch.module.scss';

export default function ThemeSwitch({ isLightTheme, setIsLightTheme }) {
    return (
        <div className='theme-switch'>
            <button onClick={() => setIsLightTheme(!isLightTheme)}>
                {isLightTheme ? 'Dark theme' : 'Light theme'}
            </button>
        </div>
    );
}