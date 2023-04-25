import React from 'react';
import style from './Main.module.scss'
import photo from '../assets/images/myPhoto.jpeg'
import {useCallback} from "react";
import Particles from "react-tsparticles";
import type {Container, Engine} from "tsparticles-engine";
import {loadFull} from "tsparticles";
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';
import {Tilt} from 'react-tilt'

const defaultOptionsForTilt = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

function Main() {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <div id={'main'} className={style.mainBlock}>
            <Particles className={style.tsparticles}
                       init={particlesInit}
                       loaded={particlesLoaded}

                       options={{
                           fullScreen: false,
                           background: {
                               color: {
                                   value: "transparent",
                               },
                           },
                           fpsLimit: 120,
                           interactivity: {
                               events: {
                                   onClick: {
                                       enable: false,
                                       mode: "push",
                                   },
                                   onHover: {
                                       enable: false,
                                       mode: "repulse",
                                   },
                                   resize: true,
                               },
                               modes: {
                                   push: {
                                       quantity: 4,
                                   },
                                   repulse: {
                                       distance: 200,
                                       duration: 0.4,
                                   },
                               },
                           },
                           particles: {
                               color: {
                                   value: "#ffffff",
                               },
                               links: {
                                   color: "#ffffff",
                                   distance: 150,
                                   enable: true,
                                   opacity: 0.5,
                                   width: 1,
                               },
                               collisions: {
                                   enable: true,
                               },
                               move: {
                                   direction: "none",
                                   enable: true,
                                   outModes: {
                                       default: "bounce",
                                   },
                                   random: false,
                                   speed: 2,
                                   straight: false,
                               },
                               number: {
                                   density: {
                                       enable: true,
                                       area: 800,
                                   },
                                   value: 80,
                               },
                               opacity: {
                                   value: 0.5,
                               },
                               shape: {
                                   type: "circle",
                               },
                               size: {
                                   value: {min: 1, max: 5},
                               },
                           },
                           detectRetina: true,
                       }}
            />
            <Fade direction={'left'} triggerOnce={true}>
                <div className={style.mainContainer}>
                    <div className={style.contentBlock}>
                        <div className={style.photo}>
                            <Tilt options={defaultOptionsForTilt} className={style.largeScreen}>
                                <img src={photo}/>
                            </Tilt>
                            <img src={photo} className={style.mobileScreen}/>
                        </div>
                        <div className={style.text}>
                            <span>Welcome</span>
                            <h1>My name is Elena Boiko</h1>
                            <ReactTypingEffect
                                className={style.reactTyping}
                                text={'I`m a frontend developer'}
                                cursor={' '}
                            />
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )

}

export default Main;
