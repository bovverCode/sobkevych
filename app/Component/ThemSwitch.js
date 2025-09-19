export default function ThemeSwitch({ isLightTheme }) {
    return (
        <div className='theme-switch'>
            <input 
                type='checkbox' 
                id='theme-switch-checkbox' 
                name='theme-switch-checkbox' 
                // checked={!isLightTheme && 'checked'}
            />
            <label htmlFor='theme-switch-checkbox' >
                {isLightTheme ? 'Dark theme' : 'Light theme'}
            </label>
        </div>
    );
}