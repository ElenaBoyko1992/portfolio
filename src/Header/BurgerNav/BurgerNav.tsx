import React, {useState} from 'react';
import style from 'Header/BurgerNav/BurgerNav.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";

function BurgerNav() {
    let [menuIsOpen, setMenuIsOpen] = useState(false);
    const onBurgerBunClick = () => {
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
                >Main</Link>

                <Link
                    className={style.burgerNav}
                    activeClass={style.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-1}
                    duration={500}

                >Skills</Link>

                <Link
                    className={style.burgerNav}
                    activeClass={style.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={2.5}
                    duration={500}
                >Projects</Link>

                <Link
                    className={style.burgerNav}
                    activeClass={style.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={2.5}
                    duration={500}
                >Contacts</Link>
            </div>
            <div className={style.burgerBtn} onClick={onBurgerBunClick}></div>
        </div>
    );
}

export default BurgerNav;
