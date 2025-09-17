import { FooterBlock } from "../Footer"

export default function SkillBlock({ skillData }) {
    return (
        <>
            <h2>
                {skillData.title}
            </h2>
            {skillData.items.map((areaItem, index) => <SkillArea areaData={areaItem} key={index}/>)}
        </>
    )
}

function SkillArea({ areaData }) {
    return (
        <div className="skill-area">
            <h3>
                {areaData.title}
            </h3>
            <ul>
                {
                    areaData.list.map((text, index) => <li key={index}>{text}</li>)
                }
            </ul>
        </div>
    );
}
