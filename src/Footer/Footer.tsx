import React from 'react';
import style from './Footer.module.css'
import commonStyles from "../common/Styles/CommonStyles.module.css";
import Title from "../common/Components/Title";

function Footer() {
    return (
        <div className={style.footer}>
            <div className={`${commonStyles.container} ${style.footerContainer}`}>
                <Title titleValue={'Elena Boiko'}/>
                <div className={style.boxes}>
                    <div className={style.box}></div>
                    <div className={style.box}></div>
                    <div className={style.box}></div>
                    <div className={style.box}></div>
                </div>
                <div className={style.rights}>ⓒ2022 All rights reserved</div>
            </div>
        </div>
    );
}

export default Footer;
