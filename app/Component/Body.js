import { useTheme } from '@/app/Component/ThemeContext';
export default function Body({ children }) {
    const themeContext = useTheme();
    const bodyClassName = !themeContext.isLight ? ['dark_theme'] : [];
    return (
        <body className={bodyClassName}>
            {children}
        </body>
    );
}