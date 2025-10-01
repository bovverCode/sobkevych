import styles from '@/app/styles/Block/Footer.module.scss'

export default function Footer({ children, ref }) {
    return (
        <footer className={styles.footer} ref={ref}>
            {children}
        </footer>
    );
}