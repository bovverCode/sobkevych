import styles from '@/app/styles/Block/ContactBlock.module.scss';
import { useIsLight } from '@/app/Component/ThemeContext';

export default function ContactBlock({ contactData }) {
    const blockClassName = [styles.contact_block, 'w50'];
    const isLight = useIsLight();
    !isLight && blockClassName.push(styles.contact_block__dark);
    return (
        <div className={blockClassName.join(' ')}>
            <h2 className='mb20'>
                {contactData.title}
            </h2>
            <ul>
                {
                    contactData.list.map((contact, index) => <ContactItem contactItem={contact} key={index} />)
                }
            </ul>
        </div>
    );
}

function ContactItem({ contactItem }) {
    return (
        <li>
            <a href={contactItem.href} className={styles.contact_item} target="_blank">
                <img src={contactItem.image} />
                {contactItem.text}
            </a>
        </li>
    );
}