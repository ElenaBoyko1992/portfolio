import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/Styles/CommonStyles.module.css'
import photo from '../assets/images/myPhoto.jpeg'


function Main() {
    return (
        <div id={'main'} className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.text}>
                    <span>Welcome</span>
                    <h1>My name is Elena Boiko</h1>
                    <p>I`m a frontend developer</p>
                </div>
                <div className={style.photo}>
                    <img src={photo}/>
                </div>
            </div>

        </div>
    );
}

export default Main;
