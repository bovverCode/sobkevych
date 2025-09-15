export default function ServiceBlock({ serviceData }) {
    return (
        <section className="block service-block">
            <h2>
                {serviceData.title}
            </h2>
            <div className="service-block-row">
                {
                    serviceData.items.map((serviceItem, index) => {
                        return <ServiceItem key={index} item={serviceItem}/>;
                    })
                }
            </div>
        </section>
    )
}

function ServiceItem({ item }) {
    let list = null;
    if (item.hasOwnProperty('list')) {
        list = item.list.map((item, index) => <li key={index}>{item}</li>)
    }
    return (
        <div className="service-item">
            <div className="service-item-image">
                <img src={item.image} />
            </div>
            <h3>
                {item.title}
            </h3>
            <p>
                {item.description}
            </p>
            {list !== null && <ul>{list}</ul>}
        </div>
    );
}