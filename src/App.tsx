import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import MyWorks from "./MyWorks/MyWorks";
import DistantWork from "./DistantWork/DistantWork";
import Contacts from "./Сontacts/Contacts";
import Footer from "./Footer/Footer";

function App() {
    const skills = [{
        id: 1,
        title: 'JS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci ducimus eaque illo ipsam laudantium molestiae nesciunt optio possimus provident.'
    }, {
        id: 2,
        title: 'CSS',
        description: 'Quos sequi soluta tempore velit, voluptatibus? Provident saepe sapiente ullam.'
    }, {
        id: 3,
        title: 'React',
        description: 'Adipisicing elit. Accusamus, adipisci ducimus eaque illo ipsam laudantium molestiae nesciunt optio possimus provident.'
    }]
    const myWorks = [{
        id: 1,
        img: '',
        projectName: 'Project name',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci ducimus eaque illo ipsam laudantium molestiae nesciunt optio possimus provident.'
    }, {
        id: 2,
        img: '',
        projectName: 'Project name',
        shortDescription: 'Quos sequi soluta tempore velit, voluptatibus? Provident saepe sapiente ullam.'
    }]

    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills skills={skills}/>
            <MyWorks myWorks={myWorks}/>
            <DistantWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
