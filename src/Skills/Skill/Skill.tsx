import React from 'react';
import style from './Skill.module.css'

type SkillPropsType = {
    title: string
    description: string
    icon: string
}

function Skill(props: SkillPropsType) {
    return (
        <div className={style.skill}>
            <div className={style.icon} style={{backgroundImage: `url('${props.icon}')`}}></div>
            <div>
                <h3 className={style.titleOfSkill}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
}

export default Skill;
