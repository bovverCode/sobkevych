import styles from '@/app/styles/Block/ContactBlock.module.scss';

export default function ContactBlock({ contactData }) {
    return (
        <div className={styles.contact_block + " w50"}>
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