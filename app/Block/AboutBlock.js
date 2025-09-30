import Container from "@/app/Component/Container";
import styles from '@/app/styles/Block/AboutBlock.module.scss';

export default function AboutBlock({ aboutData, isLightTheme }) {
    const contentClassName = [styles.about_block_content];
    !isLightTheme && contentClassName.push(styles.dark);
    return (
        <section className="block">
            <Container>
                <h2 className="text_center mb20">
                    {aboutData.title}
                </h2>
                <div className="avatar mb20">
                    <img src="/ava.jpg" />
                </div>
                <div className={contentClassName.join(' ')}>
                    {
                        aboutData.text.map((paragraph, index) => <p key={index}>{paragraph}</p>)
                    }
                </div>
            </Container>
        </section>
    );
}