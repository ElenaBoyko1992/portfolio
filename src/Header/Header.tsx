import React from 'react';
import style from './Header.module.scss'
import Nav from "./Nav/Nav";
import BurgerNav from "Header/BurgerNav/BurgerNav";

function Header() {

    return (
        <header className={style.header}>
            <Nav/>
            <BurgerNav/>
        </header>
    );
}

export default Header;
