import React from 'react';
import style from './MyWorks.module.css'
import commonStyles from '../common/Styles/CommonStyles.module.css'
import Work from "./Work";


function MyWorks() { //ПОТОМ ПРОМАПИТЬ!
    return (
        <div className={style.myWorksBlock}>
            <div className={`${commonStyles.container} ${style.myWorksContainer}`}>
                <h2 className={commonStyles.title}>My works</h2>
                <div className={style.myWorks}>
                    <Work img={''} projectName={'Project name'} shortDescription={'Short description'}/>
                    <Work img={''} projectName={'Project name'} shortDescription={'Short description'}/>

                </div>
            </div>
        </div>
    );
}

export default MyWorks;
