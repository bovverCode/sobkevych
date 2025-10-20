import Container from "@/app/Component/Container";
import styles from '@/app/styles/Block/ExperienceBlock.module.scss'
import { useTheme } from "@/app/Component/ThemeContext";

export default function ExperienceBlock({ experienceData, ref }) {
    return (
        <section className="block" ref={ref}>
            <Container>
                <h2 className="text_center mb40">
                    {experienceData.title}
                </h2>
                <div className={styles.experience_block_row}>
                    {
                        experienceData.items.map(
                            (expItem, index) => 
                            <ExperienceItem key={index} item={expItem}/>
                        )
                    }
                </div>
            </Container>
        </section>
    );
}

function ExperienceItem({ item }) {
    const itemClassName = [styles.experience_item];
    !useTheme().isLight && itemClassName.push(styles.dark)
    return (
        <div className={itemClassName.join(' ')}>
            <div className={styles.experience_item_heading + " mb20 text_center"}>
                <img src={item.image}/>
            </div>
            <div className={styles.experience_item_body}>
                <h4 className="mb10">
                    {item.title}
                </h4>
                <p className="mb10"> 
                    {item.description} 
                </p>
                <div className="mb10">
                    <span className="time">
                        {item.time.from} - {item.time.to}
                    </span>
                </div>
                <ul className="styled_list">
                    {
                        item.list.map((text, index) => <li key={index}> {text} </li>)
                    }
                </ul>
            </div>
        </div>
    );
}