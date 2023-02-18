import React from 'react';
import style from './DistantWork.module.css'
import commonStyles from '../common/Styles/CommonStyles.module.css'
import Title from "../common/Components/Title";

function DistantWork() {
    return (
        <div className={style.distantWorkBlock}>
            <div className={`${commonStyles.container} ${style.distantWorkContainer}`}>
                <Title titleValue={'Looking into remote work options'}/>
                <button className={style.button}>Hire me</button>
            </div>
        </div>
    );
}

export default DistantWork;
