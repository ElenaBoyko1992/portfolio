import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/Styles/Container.module.css'
import Skill from "./Skill/Skill";

function Skills() { //ПОТОМ ПРОМАПИТЬ!
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci ducimus eaque illo ipsam laudantium molestiae nesciunt optio possimus provident.'}/>
                    <Skill title={'CSS'}
                           description={'Quos sequi soluta tempore velit, voluptatibus? Provident saepe sapiente ullam.'}/>

                    <Skill title={'React'}
                           description={'Adipisicing elit. Accusamus, adipisci ducimus eaque illo ipsam laudantium molestiae nesciunt optio possimus provident.'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
