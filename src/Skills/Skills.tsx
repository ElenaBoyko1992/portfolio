import React from 'react';
import style from './Skills.module.css'
import commonStyles from '../common/Styles/CommonStyles.module.css'
import Skill from "./Skill/Skill";

type SkillType = {
    id: number
    title: string
    description: string
}
type SkillsPropsType = {
    skills: Array<SkillType>
}

function Skills(props: SkillsPropsType) { //ПОТОМ ПРОМАПИТЬ!
    return (
        <div className={style.skillsBlock}>
            <div className={`${commonStyles.container} ${style.skillsContainer}`}>
                <h2 className={commonStyles.title}>Skills</h2>
                <div className={style.skills}>
                    {props.skills.map(s => <Skill key={s.id} title={s.title} description={s.description}/>)}
                </div>
            </div>
        </div>
    );
}

export default Skills;
