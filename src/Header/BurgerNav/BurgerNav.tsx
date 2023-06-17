import React, {useState} from 'react';
import style from 'Header/BurgerNav/BurgerNav.module.scss';
import {Link} from "react-scroll";

function BurgerNav() {

    let [menuIsOpen, setMenuIsOpen] = useState(false);
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    };
    return (
        <nav className={style.burgerNavs}>
            <ul className={menuIsOpen ? `${style.burgerNavsItems} ${style.show}` : style.burgerNavsItems}>
                <li><Link
                    className={style.burgerNav}
                    activeClass={style.active}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={-1}
                    duration={500}
                    onClick={onBurgerBtnClick}
                >Main</Link></li>
                <li><Link
                    className={style.burgerNav}
                    activeClass={style.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-1}
                    duration={500}
                    onClick={onBurgerBtnClick}
                >Skills</Link></li>
                <li><Link
                    className={style.burgerNav}
                    activeClass={style.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={2.5}
                    duration={500}
                    onClick={onBurgerBtnClick}
                >Projects</Link></li>
                <li><Link
                    className={style.burgerNav}
                    activeClass={style.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={2.5}
                    duration={500}
                    onClick={onBurgerBtnClick}
                >Contacts</Link></li>
            </ul>
            <div className={menuIsOpen ? `${style.burgerBtn} ${style.btnActive}` : style.burgerBtn}
                 onClick={onBurgerBtnClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}

export default BurgerNav;
