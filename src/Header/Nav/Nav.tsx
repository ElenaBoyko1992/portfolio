import React from 'react';
import style from 'Header/Nav/Nav.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";

function Nav() {
    return (
        <div className={style.navs}>

            <Link
                className={style.nav}
                activeClass={style.active}
                to="main"
                spy={true}
                smooth={true}
                offset={-1}
                duration={500}
            >Main</Link>

            <Link
                className={style.nav}
                activeClass={style.active}
                to="skills"
                spy={true}
                smooth={true}
                offset={-1}
                duration={500}

            >Skills</Link>

            <Link
                className={style.nav}
                activeClass={style.active}
                to="projects"
                spy={true}
                smooth={true}
                offset={2.5}
                duration={500}
            >Projects</Link>

            <Link
                className={style.nav}
                activeClass={style.active}
                to="contacts"
                spy={true}
                smooth={true}
                offset={2.5}
                duration={500}
            >Contacts</Link>
        </div>
    );
}

export default Nav;
