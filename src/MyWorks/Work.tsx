import React from 'react';
import style from './Work.module.css'

type WorkPropsType = {
    img: string
    projectName: string
    shortDescription: string
}

function Work(props: WorkPropsType) {
    return (
        <div className={style.work}>
            <div className={style.preview}>
                <img className={style.image} src={props.img} alt="picture"/>
                <button className={style.button}>Watch</button>
            </div>
            <div className={style.description}>
                <div className={style.projectName}>{props.projectName}</div>
                <div className={style.shortDescription}>{props.shortDescription}</div>
            </div>
        </div>
    );
}

export default Work;
