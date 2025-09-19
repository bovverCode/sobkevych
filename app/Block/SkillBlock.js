import styles from '@/app/styles/Block/SkillBlock.module.scss';

export default function SkillBlock({ skillData }) {
    return (
        <div className={styles.skill_block + " w50"}>
            <h2 className='mb20'>
                {skillData.title}
            </h2>
            <div className={styles.skill_block_row}>
                {skillData.items.map((areaItem, index) => <SkillArea areaData={areaItem} key={index}/>)}
            </div>
        </div>
    )
}

function SkillArea({ areaData }) {
    return (
        <div className={styles.skill_area}>
            <h3 className='mb10'>
                {areaData.title}
            </h3>
            <ul className='styled_list'>
                {
                    areaData.list.map((text, index) => <li key={index}>{text}</li>)
                }
            </ul>
        </div>
    );
}
