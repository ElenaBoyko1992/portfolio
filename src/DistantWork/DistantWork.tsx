import React from 'react';
import style from './DistantWork.module.scss'
import commonStyles from '../common/Styles/CommonStyles.module.css'
import Title from "../common/Components/Title";


function DistantWork() {
    return (
        <div className={style.distantWorkBlock}>
            <div className={`${commonStyles.container} ${style.distantWorkContainer}`}>
                <Title titleValue={'Looking into remote work options'}/>
                <a href='#contacts' className={style.button}>Hire me</a>
            </div>
        </div>
    );
}

export default DistantWork;
