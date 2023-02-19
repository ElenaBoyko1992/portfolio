import style from "./Button.module.css";
import React from "react";

const Button = (props: ButtonPropsType) => {
    return (
        <button className={style.button}>{props.buttonValue}</button>
    )
}

//types
type ButtonPropsType = {
    buttonValue: string
}

export default Button;