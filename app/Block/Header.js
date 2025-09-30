'use client'

import ThemeSwitch from '@/app/Component/ThemSwitch'
import styles from '@/app/styles/Block/Header.module.scss';
import Container from '@/app/Component/Container'
import { Press_Start_2P } from 'next/font/google';

const logoFont = Press_Start_2P({
  weight: '400'
});

export default function Header({ menu, isLightTheme, setIsLightTheme }) {
    return (
        <header className={styles.header}>
            <Container classes={styles.header_container}>
                <HeaderWrapper>
                    <Logo/>
                     <Navigation items={menu}/>
                </HeaderWrapper>
                <HeaderWrapper>
                    <ThemeSwitch isLightTheme={isLightTheme} setIsLightTheme={setIsLightTheme} />
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
        <a href="/" className={"logo " + logoFont.className}>
            {'<sobkevych.dev/>'}
        </a>
    );
}

function Navigation({ items }) {
    const menuItems = items.map(menuItem => <MenuItem key={menuItem.href} item={menuItem}/>);
    return (
        <nav className='menu'>
            <ul>
                {menuItems}
            </ul>
        </nav>
    );
}

function MenuItem({ item }) {
    let children = null;
    if (item.hasOwnProperty('sub')) {
        children = item.sub.map(child => <MenuItem key={child.href} item={child}/>);
    }
    return (
        <li>
            <a href={item.href}>
                {item.title}
            </a>
            {children !== null && (
                <ul className='sub_menu'>
                    {children}
                </ul>
            )}
        </li>
    );
}
