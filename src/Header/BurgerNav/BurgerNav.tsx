import React, {useState} from 'react';
import style from 'Header/BurgerNav/BurgerNav.module.scss';
import {Link} from "react-scroll";

function BurgerNav() {

    let [menuIsOpen, setMenuIsOpen] = useState(false);
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    };
    return (
        <div className={style.burgerNavs}>
            <div className={menuIsOpen ? `${style.burgerNavsItems} ${style.show}` : style.burgerNavsItems}>
                <Link
                    className={style.burgerNav}
                    activeClass={style.active}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={-1}
                    duration={500}
                    onClick={onBurgerBtnClick}
                >Main</Link>

                <Link
                    className={style.burgerNav}
                    activeClass={style.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-1}
                    duration={500}
                    onClick={onBurgerBtnClick}
                >Skills</Link>

                <Link
                    className={style.burgerNav}
                    activeClass={style.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={2.5}
                    duration={500}
                    onClick={onBurgerBtnClick}
                >Projects</Link>

                <Link
                    className={style.burgerNav}
                    activeClass={style.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={2.5}
                    duration={500}
                    onClick={onBurgerBtnClick}
                >Contacts</Link>
            </div>
            <div className={menuIsOpen ? `${style.burgerBtn} ${style.btnActive}` : style.burgerBtn}
                 onClick={onBurgerBtnClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default BurgerNav;
