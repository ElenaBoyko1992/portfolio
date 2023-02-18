import style from "./Title.module.css";
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
}

export default Title;