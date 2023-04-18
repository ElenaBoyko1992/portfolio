import React from 'react';
import style from './DistantWork.module.scss'
import commonStyles from '../common/Styles/CommonStyles.module.scss'
import Title from "../common/Components/Title";
import {Fade} from "react-awesome-reveal";

function DistantWork() {
    return (
        <div className={style.distantWorkBlock}>
            <Fade direction={'left'}>
                <div className={`${commonStyles.container} ${style.distantWorkContainer}`}>
                    <Title titleValue={'Looking into remote work options'}/>
                    <a href='#contacts' className={style.button}>Hire me</a>
                </div>
            </Fade>
        </div>
    );
}

export default DistantWork;
