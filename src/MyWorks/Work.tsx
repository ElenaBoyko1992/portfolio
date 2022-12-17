import React from 'react';
import style from './Work.module.css'
import {NavLink} from "react-router-dom";


type WorkPropsType = {
    img: string
    projectName: string
    shortDescription: string
}

function Work(props: WorkPropsType) {
    return (
        <div className={style.work}>
            <div className={style.preview}
                 style={{backgroundImage: `url(${props.img}`}}>
                <NavLink className={style.button} to={''}>Watch</NavLink>
            </div>
            <div className={style.description}>
                <div className={style.projectName}>
                    <span>{props.projectName}</span>
                </div>
                <div className={style.shortDescription}>{props.shortDescription}</div>
            </div>
        </div>
    );
}

export default Work;
