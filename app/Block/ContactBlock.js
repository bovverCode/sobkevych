export default function ContactBlock({ contactData }) {
    return (
        <>
            <h2>
                {contactData.title}
            </h2>
            <ul>
                {
                    contactData.list.map((contact, index) => <ContactItem contactItem={contact} key={index} />)
                }
            </ul>
        </>
    );
}

function ContactItem({ contactItem }) {
    return (
        <a href={contactItem.href} target="_blank">
            <img src={contactItem.image} />
            {contactItem.text}
        </a>
    );
}