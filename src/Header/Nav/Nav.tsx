import React, {ChangeEvent, EventHandler, MouseEventHandler, useState} from 'react';
import style from 'Header/Nav/Nav.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";

function Nav() {
    // const arrayOfLinks = [
    //     {
    //         id: '1',
    //         to: 'main',
    //         linkName: 'Main',
    //     },
    //     {
    //         id: '2',
    //         to: 'skills',
    //         linkName: 'Skills',
    //     }
    // ]
    // const [activeLinkIndex, setActiveLinkIndex] = useState('')
    // const linkOnClickHandler = () => {
    //     setActiveLinkIndex(e.)
    // }
    return (
        <div className={style.navs}>
            {/*{arrayOfLinks.map(l => <Link*/}
            {/*    className={style.nav}*/}
            {/*    to={l.to}*/}
            {/*    spy={true}*/}
            {/*    smooth={true}*/}
            {/*    offset={-1}*/}
            {/*    duration={500}*/}
            {/*    key={l.id}*/}
            {/*    onClick={linkOnClickHandler}*/}
            {/*>{l.linkName}</Link>)}*/}


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
                offset={2}
                duration={500}

            >Skills</Link>

            <Link
                className={style.nav}
                activeClass={style.active}
                to="projects"
                spy={true}
                smooth={true}
                offset={4}
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
