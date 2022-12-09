import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/Styles/CommonStyles.module.css'


function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.text}>
                    <span>Hi!</span>
                    <h1>My name is Elena Boiko.</h1>
                    <p>I`m a frontend developer.</p>
                </div>
                <div className={style.photo}></div>
            </div>

        </div>
    );
}

export default Main;
