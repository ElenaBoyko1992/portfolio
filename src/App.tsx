import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills, {SkillType} from "./Skills/Skills";
import MyWorks, {MyWork} from './MyWorks/MyWorks';
import DistantWork from './DistantWork/DistantWork';
import Contacts from './Сontacts/Contacts';
import Footer, {ContactsForFooterType} from './Footer/Footer';
import {BrowserRouter} from 'react-router-dom';
import css from './assets/icons/css-file-type-svgrepo-com.svg'
import js from './assets/icons/java-script-svgrepo-com.svg'
import react from './assets/icons/react-svgrepo-com.svg'
import todoImg from './assets/images/to-do-list.webp'
import socialNetworkImg from './assets/images/socialNetwork.jpg'
import vkLogo from './assets/icons/vk-logo-svgrepo-com.svg'
import telegramLogo from './assets/icons/telegram-svgrepo-com.svg'
import githubLogo from './assets/icons/github-svgrepo-com.svg'


function App() {
    const skills: Array<SkillType> = [{
        id: 1,
        title: 'JS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci ducimus eaque illo ipsam laudantium molestiae nesciunt optio possimus provident.',
        icon: js
    }, {
        id: 2,
        title: 'CSS',
        description: 'Quos sequi soluta tempore velit, voluptatibus? Provident saepe sapiente ullam.',
        icon: css
    }, {
        id: 3,
        title: 'React',
        description: 'Adipisicing elit. Accusamus, adipisci ducimus eaque illo ipsam laudantium molestiae nesciunt optio possimus provident.',
        icon: react
    },
    ]
    const myWorks: Array<MyWork> = [{
        id: 1,
        img: todoImg,
        projectName: 'To-do list',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci ducimus eaque illo ipsam laudantium molestiae nesciunt optio possimus provident.',
        link: 'https://github.com/ElenaBoyko1992/it-incubator-todolist-ts-01'
    }, {
        id: 2,
        img: socialNetworkImg,
        projectName: 'Social network',
        shortDescription: 'Quos sequi soluta tempore velit, voluptatibus? Provident saepe sapiente ullam.',
        link: 'https://github.com/ElenaBoyko1992/samurai-way-in-TS'
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
