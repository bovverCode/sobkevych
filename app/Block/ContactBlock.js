import styles from '@/app/styles/Block/ContactBlock.module.scss';
import Image from 'next/image';

export default function ContactBlock({ contactData }) {
    const blockClassName = [styles.contact_block, 'w50'];
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
                <Image
                    width={20} 
                    height={20} 
                    src={contactItem.image} 
                    alt={contactItem.text}
                    sizes='20px'
                />
                {contactItem.text}
            </a>
        </li>
    );
}