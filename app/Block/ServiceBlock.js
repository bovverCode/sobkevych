import Container from "@/app/Component/Container";
import styles from '@/app/styles/Block/ServiceBlock.module.scss'
import { useIsLight } from "@/app/Component/ThemeContext";

export default function ServiceBlock({ serviceData, ref }) {
    return (
        <section className="block" ref={ref}>
            <Container>
                <h2 className="text_center mb40">
                    {serviceData.title}
                </h2>
                <div className={styles.service_block_row}>
                    {
                        serviceData.items.map((serviceItem, index) => {
                            return <ServiceItem key={index} item={serviceItem}/>;
                        })
                    }
                </div>
            </Container>
        </section>
    )
}

function ServiceItem({ item }) {
    const isLight = useIsLight();
    let list = null;
    if (item.hasOwnProperty('list')) {
        list = item.list.map((item, index) => <li key={index}>{item}</li>)
    }
    const itemClassName = [styles.service_item];
    !isLight && itemClassName.push(styles.dark);
    return (
        <div className={itemClassName.join(' ')}>
            <div className={styles.service_item_image + " text_center mb20"}>
                <img src={item.image} />
            </div>
            <h3 className="text_center mb20">
                {item.title}
            </h3>
            <p className="mb20">
                {item.description}
            </p>
            {list !== null && <ul className="styled_list">{list}</ul>}
        </div>
    );
}