'use client'

import ThemeSwitch from '@/app/Component/ThemSwitch'
import styles from '@/app/styles/Block/Header.module.scss';
import Container from '@/app/Component/Container'
import { Press_Start_2P } from 'next/font/google';
import { ThemeProvider, useTheme } from '@/app/Component/ThemeContext';
const logoFont = Press_Start_2P({
  weight: '400'
});

export default function Header({ menu, handlers }) {
    return (
        <header className={styles.header}>
            <Container classes={styles.header_container}>
                <HeaderWrapper>
                    <Logo/>
                     <Navigation items={menu} handlers={handlers}/>
                </HeaderWrapper>
                <HeaderWrapper>
                    <ThemeSwitch/>
                </HeaderWrapper>
            </Container>
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
    function handleMenuItemClick(e) {
        e.preventDefault();
        handleClick();
    }
    return (
        <li>
            <a href={item.href} onClick={handleMenuItemClick}>
                {item.title}
            </a>
        </li>
    );
}
