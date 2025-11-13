'use client'

import ThemeSwitch from '@/app/Component/ThemSwitch'
import styles from '@/app/styles/Block/Header.module.scss';
import Container from '@/app/Component/Container'
import { Press_Start_2P } from 'next/font/google';
import { useTheme, useThemeDispatch, useIsMobile, useIsLight } from '@/app/Component/ThemeContext';
import { useEffect, useState } from 'react';

const logoFont = Press_Start_2P({
  weight: '400'
});

export default function Header({ menu, handlers }) {
    const themeDispatch = useThemeDispatch();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    return (
        <header className={styles.header}>
            <Container classes={styles.header_container}>
                <HeaderWrapper>
                    <Logo/>
                    {!useIsMobile() && isMounted && <Navigation items={menu} handlers={handlers}/>}
                </HeaderWrapper>
                <HeaderWrapper>
                    <ThemeSwitch/>
                    {useIsMobile() && isMounted && <Burger handleClick={() => themeDispatch({type: 'mobile_menu_toggle'})}/>}
                </HeaderWrapper>
            </Container>
            {useIsMobile() && isMounted && (
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
    const isLight = useIsLight();
    const className = styles.burger + 
        (!isLight ? ' ' + styles.burger_dark : '') +
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
    const isLight = useIsLight();
    const className = styles.header_mobile +
        (useTheme().menuOpened ? ' ' + styles.header_mobile_opened : '') +
        (!isLight ? ' ' + styles.header_mobile_dark : '');
    return (
        <div className={className}>
            {children}
        </div>
    );
}