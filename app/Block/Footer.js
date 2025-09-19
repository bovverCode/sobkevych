import styles from '@/app/styles/Block/Footer.module.scss'

export default function Footer({ children }) {
    return (
        <footer className={styles.footer}>
            {children}
        </footer>
    );
}