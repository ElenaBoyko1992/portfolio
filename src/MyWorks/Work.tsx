import React, {useState} from 'react';
import style from './Work.module.scss'
import {ButtonLink} from "common/Components/ButtonLink";


type WorkPropsType = {
    img: string
    projectName: string
    shortDescription: string
    link: string
}

function Work(props: WorkPropsType) {
    let [buttonIsHover, setButtonIsHover] = useState(false)
    const onMouseEnterHandler = () => {
        setButtonIsHover(true)
    }
    const onMouseLeaveHandler = () => {
        setButtonIsHover(false)
    }

    return (
        <div className={style.work}>
            <div
                className={buttonIsHover ? `${style.preview} ${style.hoveredButton}` : style.preview}
                style={{backgroundImage: `url('${props.img}')`}}>
                <ButtonLink href={props.link} onMouseEnter={onMouseEnterHandler}
                        onMouseLeave={onMouseLeaveHandler}>Watch</ButtonLink>
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
