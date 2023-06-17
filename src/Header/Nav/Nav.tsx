import React from 'react';
import style from 'Header/Nav/Nav.module.scss';
import {Link} from "react-scroll";

function Nav() {

    return (
        <nav >
            <ul className={style.navs}>
                <li>
                    <Link
                        className={style.nav}
                        activeClass={style.active}
                        to="main"
                        spy={true}
                        smooth={true}
                        offset={-1}
                        duration={500}
                    >Main</Link>
                </li>
                <li><Link
                    className={style.nav}
                    activeClass={style.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={2}
                    duration={500}

                >Skills</Link></li>
                <li><Link
                    className={style.nav}
                    activeClass={style.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={4}
                    duration={500}
                >Projects</Link></li>
                <li><Link
                    className={style.nav}
                    activeClass={style.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={2.5}
                    duration={500}
                >Contacts</Link></li>

            </ul>
        </nav>
    );
}

export default Nav;
