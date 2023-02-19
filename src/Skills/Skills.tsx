import React from 'react';
import style from './Skills.module.css'
import commonStyles from '../common/Styles/CommonStyles.module.css'
import Skill from './Skill/Skill';
import Title from '../common/Components/Title';
import js from "../assets/icons/java-script-svgrepo-com.svg";

function Skills(props: SkillsPropsType) {
    return (
        <div className={style.skillsBlock} id={'skills'}>
            <div className={`${commonStyles.container} ${style.skillsContainer}`}>
                <Title titleValue={'Skills'}/>
                <div className={style.skills}>
                    {props.skills.map((s) => <Skill key={s.id} title={s.title} description={s.description} icon={s.icon}/>)}
                </div>
            </div>
        </div>
    );
}

//types
export type SkillType = {
    id: number
    title: string
    description: string
    icon: string
}
type SkillsPropsType = {
    skills: Array<SkillType>
}
export default Skills;
