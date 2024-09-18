import './main.css'
import aboutMyPicture from "../img-holder/aboutMePicture.png"
import React from "../img-holder/React.png"
import Javascript from "../img-holder/javascript.png"
import Tailwind from "../img-holder/tailwind.png"
import Html from "../img-holder/html.png"
import Css from "../img-holder/css.png"
import { forwardRef } from 'react'
import { animated, useSpring } from 'react-spring'

const Main = forwardRef((props, ref) => {

    const hey = useSpring({
        from: {
            opacity: 0,
            y: -200
        },
        to: {
            opacity: 1,
            y: 0
        },
    })

    const slider = useSpring({
        from: {
            opacity: 0,
            x: 400
        },
        to: {
            opacity: 1,
            x: 0
        }
    })

    return (
        <>
            <hr className='line-1' />
            <main ref={ref} className="main">
                <div className="main-about-me-flexer">
                    <animated.div style={hey} className="about-images">
                        <img src={aboutMyPicture} alt="Error" />
                    </animated.div>
                    <animated.div style={slider} className="about">
                        <h1 className="about-title">About Me</h1>
                        <p className="about-desc">I am currently a bacheler’s student in Applied Computer science at the  University of Vistula, Poland. I have a keen interest in React-frontend. My goal is to use my expertise in building exciting and functional user interfaces. Additionally, Deploy my Projects, and Work as team as much as possible to deepen my Frontend skills</p>
                        <div className="about-technologies-flexer">
                            <div className='about-technologies'>
                                <img src={React} alt="Error" />
                                <p className="about-tech-desc">React</p>
                            </div>
                            <div className='about-technologies'>
                                <img src={Javascript} alt="Error" />
                                <p className="about-tech-desc">Javascript</p>
                            </div>
                            <div className='about-technologies'>
                                <img src={Tailwind} alt="Error" />
                                <p className="about-tech-desc">Tailwind</p>
                            </div>
                            <div className='about-technologies'>
                                <img src={Html} alt="Error" />
                                <p className="about-tech-desc">HTML</p>
                            </div>
                            <div className='about-technologies'>
                                <img src={Css} alt="Error" />
                                <p className="about-tech-desc">CSS</p>
                            </div>
                        </div>
                    </animated.div>
                </div>
                <hr className='line-2' />
            </main>
        </>
    )
})

export default Main