import styles from '@/app/styles/Block/SkillBlock.module.scss';
import { useTheme } from '../Component/ThemeContext';

export default function SkillBlock({ skillData }) {
    const blockClassName = [styles.skill_block, 'w50'];
    !useTheme().isLight && blockClassName.push(styles.skill_block__dark);
    return (
        <div className={blockClassName.join(' ')}>
            <h2 className='mb20'>
                {skillData.title}
            </h2>
            <div className={styles.skill_block_row}>
                {skillData.items.map(
                    (areaItem, index) => 
                    <SkillArea areaData={areaItem} key={index}/>
                )}
            </div>
        </div>
    )
}

function SkillArea({ areaData }) {
    const areaClassName = [styles.skill_area];
    !useTheme().isLight && areaClassName.push(styles.dark);
    return (
        <div className={areaClassName.join(' ')}>
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
