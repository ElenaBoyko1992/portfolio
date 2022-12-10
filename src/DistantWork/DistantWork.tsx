import React from 'react';
import style from './DistantWork.module.css'
import commonStyles from '../common/Styles/CommonStyles.module.css'

function DistantWork() {
    return (
        <div className={style.distantWorkBlock}>
            <div className={`${commonStyles.container} ${style.distantWorkContainer}`}>
                <h2 className={`${commonStyles.title} ${style.distantWorkTitle}`}>Looking into remote work options</h2>
                <button className={style.button}>Hire me</button>
            </div>
        </div>
    );
}

export default DistantWork;
