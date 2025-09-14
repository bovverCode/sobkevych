import ThemeSwitch from './ThemSwitch';

export default function Header({ menu }) {
    return (
        <header className="header">
            <HeaderWrapper>
                <Logo/>
            </HeaderWrapper>
            <HeaderWrapper>
                <Navigation items={menu}/>
                <ThemeSwitch isLightTheme={true} />
            </HeaderWrapper>
        </header>
    );
}

function HeaderWrapper({ children }) {
    return (
        <div className="header-wrapper">
            {children}
        </div>
    )
}

function Logo() {
    return (
        <a href="/" className="logo">
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
                <ul className='sub-menu'>
                    {children}
                </ul>
            )}
        </li>
    );
}
