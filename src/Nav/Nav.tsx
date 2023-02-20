import React from 'react';
import style from './Nav.module.scss'
import {Navigate, Route, Routes} from "react-router-dom";

function Nav() {
    return (
        <div className={style.navs}>
            <a className={style.nav} href='#main'>Main</a>
            <a className={style.nav} href='#skills'>Skills</a>
            <a className={style.nav} href='#projects'>Projects</a>
            <a className={style.nav} href='#contacts'>Contacts</a>
        </div>
    );
}

export default Nav;
