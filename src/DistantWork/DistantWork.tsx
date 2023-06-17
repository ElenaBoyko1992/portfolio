import React from 'react';
import style from './DistantWork.module.scss'
import Title from "../common/Components/Title";
import {Fade} from "react-awesome-reveal";
import {ButtonLink} from "common/Components/ButtonLink";


function DistantWork() {
    return (
        <section className={style.distantWorkBlock}>
            <Fade direction={'left'} triggerOnce={true}>
                <div className={style.distantWorkContainer}>
                    <Title titleValue={'Looking into remote work options'}/>
                    <ButtonLink href='#contacts'>Hire me</ButtonLink>
                </div>
            </Fade>
        </section>
    );
}

export default DistantWork;
