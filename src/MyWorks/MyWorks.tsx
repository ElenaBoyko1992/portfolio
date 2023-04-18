import React from 'react';
import style from './MyWorks.module.scss'
import commonStyles from '../common/Styles/CommonStyles.module.scss'
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
        <div className={style.myWorksBlock} id={'projects'}>
            <Fade direction={"left"} className={style.fade}>
                <div className={`${commonStyles.container} ${style.myWorksContainer}`}>
                    <Title titleValue={'My works'}/>
                    <div className={style.myWorks}>
                        {props.myWorks.map(w => <Work key={w.id} img={w.img} projectName={w.projectName}
                                                      shortDescription={w.shortDescription} link={w.link}/>)}
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default MyWorks;
