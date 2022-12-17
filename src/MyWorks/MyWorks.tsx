import React from 'react';
import style from './MyWorks.module.css'
import commonStyles from '../common/Styles/CommonStyles.module.css'
import Work from "./Work";

type MyWork = {
    id: number
    img: string
    projectName: string
    shortDescription: string
}
type MyWorksPropsType = {
    myWorks: Array<MyWork>
}

function MyWorks(props: MyWorksPropsType) {

    return (
        <div className={style.myWorksBlock}>
            <div className={`${commonStyles.container} ${style.myWorksContainer}`}>
                <h2 className={commonStyles.title}>My works</h2>
                <div className={style.myWorks}>
                    {props.myWorks.map(w => <Work key={w.id} img={w.img} projectName={w.projectName}
                                                  shortDescription={w.shortDescription}/>)}
                </div>
            </div>
        </div>
    );
}

export default MyWorks;
