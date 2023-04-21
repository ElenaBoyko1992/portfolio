import style from "./Title.module.scss";
import React from "react";

const Title = (props: TitlePropsType) => {
    return (
        <div className={style.title}>
            <h2>{props.titleValue}</h2>
        </div>
    )
}

//types
type TitlePropsType = {
    titleValue: string
    id?: string
}

export default Title;