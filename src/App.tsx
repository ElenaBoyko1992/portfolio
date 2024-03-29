import React from 'react';
import 'App.scss';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills, {SkillType} from "./Skills/Skills";
import MyWorks, {MyWork} from './MyWorks/MyWorks';
import DistantWork from './DistantWork/DistantWork';
import Contacts from './Сontacts/Contacts';
import Footer, {ContactsForFooterType} from './Footer/Footer';
import {BrowserRouter} from 'react-router-dom';
import css from './assets/icons/css-file-type-svgrepo-com.svg'
import html from './assets/icons/html-file-type-svgrepo-com.svg'
import js from './assets/icons/java-script-svgrepo-com.svg'
import react from './assets/icons/react-svgrepo-com.svg'
import redux from './assets/icons/redux-svgrepo-com.svg'
import todoImg from './assets/images/to-do-list.webp'
import socialNetworkImg from './assets/images/socialNetwork.jpg'
import cardsImg from './assets/images/indexcards.jpg'
import vkLogo from './assets/icons/vk-logo-svgrepo-com.svg'
import telegramLogo from './assets/icons/telegram-svgrepo-com.svg'
import githubLogo from './assets/icons/github-svgrepo-com.svg'


function App() {
    const skills: Array<SkillType> = [{
        id: 1,
        title: 'JavaScript',
        description: 'Data types, сonditional branching, loops, functions, recursion, function methods, array methods, classes, "this", closure, prototypes, inheritance, error handling, callbacks, promise, async/await.',
        icon: js
    }, {
        id: 2,
        title: 'HTML',
        description: 'Tags, attributes, links, images, lists, tables, forms.',
        icon: html
    }, {
        id: 3,
        title: 'CSS',
        description: 'Positioning, Flexbox, Grid, pseudo-classes, pseudo-elements, absolute and relative units, form styling, media queries.',
        icon: css
    }, {
        id: 4,
        title: 'React',
        description: 'Function and class components, hooks, HOCs, lifecycle methods, props.',
        icon: react
    }, {
        id: 5,
        title: 'Redux',
        description: 'Store, actions, reducers, thunks, dispatch, Redux application data flow, Redux Toolkit, React-Redux.',
        icon: redux
    },
    ]
    const myWorks: Array<MyWork> = [{
        id: 1,
        img: todoImg,
        projectName: 'Task tracker',
        shortDescription: 'A web application for compiling to-do lists and tracking the status of their completion.',
        link: 'https://github.com/ElenaBoyko1992/it-incubator-todolist-ts-01'
    }, {
        id: 2,
        img: socialNetworkImg,
        projectName: 'Friends Finder',
        shortDescription: 'An online platform for communication, acquaintance with new people, information exchange and entertainment.',
        link: 'https://github.com/ElenaBoyko1992/samurai-way-in-TS'
    }, {
        id: 3,
        img: cardsImg,
        projectName: 'Study cards',
        shortDescription: 'A convenient and affordable tool for remembering specific events, terms and other important information.',
        link: 'https://github.com/ElenaBoyko1992/cards'
    }]

    const myContactsForFooter: Array<ContactsForFooterType> = [
        {
            id: 1,
            name: 'Telegram',
            logo: telegramLogo,
            link: 'https://t.me/ElenaBoyko1992'
        },
        {
            id: 2,
            name: 'VK',
            logo: vkLogo,
            link: 'https://vk.com/id10962974'
        },
        {
            id: 3,
            name: 'GitHub',
            logo: githubLogo,
            link: 'https://github.com/ElenaBoyko1992'
        }
    ]
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Main/>
                <Skills skills={skills}/>
                <MyWorks myWorks={myWorks}/>
                <DistantWork/>
                <Contacts/>
                <Footer contactsForFooter={myContactsForFooter}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
