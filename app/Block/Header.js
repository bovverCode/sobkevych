'use client'

import ThemeSwitch from '@/app/Component/ThemSwitch'
import styles from '@/app/styles/Block/Header.module.scss';
import Container from '@/app/Component/Container'
import { Press_Start_2P } from 'next/font/google';
import { useTheme, useThemeDispatch, useIsMobile } from '@/app/Component/ThemeContext';

const logoFont = Press_Start_2P({
  weight: '400'
});

export default function Header({ menu, handlers }) {
    const themeDispatch = useThemeDispatch();
    return (
        <header className={styles.header}>
            <Container classes={styles.header_container}>
                <HeaderWrapper>
                    <Logo/>
                    {!useIsMobile() && <Navigation items={menu} handlers={handlers}/>}
                </HeaderWrapper>
                <HeaderWrapper>
                    <ThemeSwitch/>
                    {useIsMobile() && <Burger handleClick={() => themeDispatch({type: 'mobile_menu_toggle'})}/>}
                </HeaderWrapper>
            </Container>
            {useIsMobile() && (
                <MobileNavigation>
                    <Navigation items={menu} handlers={handlers}/>
                </MobileNavigation>
            )}
        </header>
    );
}

function HeaderWrapper({ children }) {
    return (
        <div className={styles.header_wrapper}>
            {children}
        </div>
    )
}

function Logo() {
    return (
        <a href='/' className={'logo ' + logoFont.className}>
            {'<sobkevych.dev/>'}
        </a>
    );
}

function Navigation({ items, handlers }) {
    const menuItems = items.map(
        (menuItem, index) => 
        <MenuItem key={menuItem.href} item={menuItem} handleClick={handlers[index]}/>
    );
    return (
        <nav className='menu'>
            <ul>
                {menuItems}
            </ul>
        </nav>
    );
}

function MenuItem({ item, handleClick }) {
    const themeDispatch = useThemeDispatch();
    const isMobileVersion = useIsMobile();
    function handleMenuItemClick(e) {
        e.preventDefault();
        handleClick();
        if (isMobileVersion) {
            themeDispatch({type: 'mobile_menu_toggle'});
        }
    }
    return (
        <li>
            <a href={item.href} onClick={handleMenuItemClick}>
                {item.title}
            </a>
        </li>
    );
}

function Burger({ handleClick }) {
    const className = styles.burger + 
        (!useTheme().isLight ? ' ' + styles.burger_dark : '') +
        (useTheme().menuOpened ? ' ' + styles.burger_opened : '');
    return (
        <button className={className} onClick={handleClick}>
            <span/>
            <span/>
            <span/>
        </button>
    )
}

function MobileNavigation({ children }) {
    const className = styles.header_mobile +
        (useTheme().menuOpened ? ' ' + styles.header_mobile_opened : '') +
        (!useTheme().isLight ? ' ' + styles.header_mobile_dark : '');
    return (
        <div className={className}>
            {children}
        </div>
    );
}