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
                    <Work img={''} projectName={'Project name'}
                          shortDescription={'Short description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime numquam odio reiciendis similique soluta. Ab accusantium consectetur, cupiditate dolor enim '}/>
                    <Work img={''} projectName={'Project name'}
                          shortDescription={'Short description. Eveniet ex expedita hic libero numquam officiis possimus temporibus vitae!'}/>
                </div>
            </div>
        </div>
    );
}

export default MyWorks;
