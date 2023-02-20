import React from 'react';
import style from './Work.module.scss'

type WorkPropsType = {
    img: string
    projectName: string
    shortDescription: string
    link: string
}

function Work(props: WorkPropsType) {

    return (
        <div className={style.work}>
            <div className={style.preview}
                 style={{backgroundImage: `url('${props.img}')`}}>
                <a className={style.button} href={props.link}>Watch</a>
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
