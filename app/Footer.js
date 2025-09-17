export default function Footer({ children }) {
    return (
        <footer>
            {children}
        </footer>
    );
}

export function FooterBlock({ children }) {
    return (
        <div className="footer-block">
            {children}
        </div>
    );
}