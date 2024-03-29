import React from 'react';
import style from './MyWorks.module.scss'
import Work from "./Work";
import Title from "../common/Components/Title";
import {Fade} from "react-awesome-reveal";


export type MyWork = {
    id: number
    img: string
    projectName: string
    shortDescription: string
    link: string
}
type MyWorksPropsType = {
    myWorks: Array<MyWork>
}

function MyWorks(props: MyWorksPropsType) {
    return (
        <section className={style.myWorksBlock}>
            <Fade direction={"left"} className={style.fade} triggerOnce={true}>
                <div className={style.myWorksContainer} id={'projects'}>
                    <Title titleValue={'My works'}/>
                    <div className={style.myWorks}>
                        {props.myWorks.map(w => <Work key={w.id} img={w.img} projectName={w.projectName}
                                                      shortDescription={w.shortDescription} link={w.link}/>)}
                    </div>
                </div>
            </Fade>
        </section>
    );
}

export default MyWorks;
