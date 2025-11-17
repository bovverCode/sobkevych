import Container from "@/app/Component/Container";
import styles from '@/app/styles/Block/AboutBlock.module.scss';
import Image from "next/image";

export default function AboutBlock({ aboutData, ref }) {
    const contentClassName = [styles.about_block_content];
    return (
        <section className="block" ref={ref}>
            <Container>
                <h2 className="text_center mb20">
                    {aboutData.title}
                </h2>
                <div className="avatar mb20">
                    <Image 
                        sizes='200px' 
                        src='/ava.jpg' 
                        width={200}
                        height={200}
                        alt="face"
                        style={{ objectFit: "cover", borderRadius: "50%" }}
                        priority
                    />
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