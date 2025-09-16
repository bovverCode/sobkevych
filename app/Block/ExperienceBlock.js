export default function ExperienceBlock({ experienceData }) {
    return (
        <section className="block experience-block">
            <h2>
                {experienceData.title}
                <div className="experience-block-row">
                    {
                        experienceData.items.map((expItem, index) => <ExperienceItem key={index} item={expItem}/>)
                    }
                </div>
            </h2>
        </section>
    );
}

function ExperienceItem({ item }) {
    return (
        <div className="experience-item">
            <div className="experience-item-heading">
                <img src={item.image} />
                <h3> 
                    {item.title} 
                </h3>
            </div>
            <div className="experience-item-body">
                <p> 
                    {item.description} 
                </p>
                <span className="time">
                    {item.time.from} - {item.time.to}
                </span>
                <ul>
                    {
                        item.list.map((text, index) => <li key={index}> {text} </li>)
                    }
                </ul>
            </div>
        </div>
    );
}