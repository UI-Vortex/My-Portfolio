import { useRef, useState } from "react";
import MyPicture from "../img-holder/myPicture.png"
import Logo from "../img-holder/PortLogo.png"
import './header.css'
import { useEffect } from "react";
import { useSpring } from "react-spring";
import { animated } from "react-spring";

function Header({ aboutRef, projectsRef, contactRef }) {

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };


    const text = "React Frontend Developer";
    const [displayedText, setDisplayedText] = useState('')
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText(displayedText + text[index])
                setIndex(index + 1)
            }, 100);
            return () => clearTimeout(timeoutId)
        }
    }, [index, displayedText, text])

    const handleSelect = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue === "About") {
            scrollToSection(aboutRef)
        } else if (selectedValue === "Projects") {
            scrollToSection(projectsRef)
        } else if (selectedValue === "Contact") {
            scrollToSection(contactRef)
        }
    }

    const anime = useSpring({
        from: {
            opacity: 0, 
            y: 300 },
        to: { 
            opacity: 1,
            y: 0 },
    })

    const animed = useSpring({
        from: {
            opacity: 0, 
            x: 1000 },
        to: { 
            opacity: 1,
            x: 0 },
    })

    return (
        <>
            <header className="header">
                <animated.div style={animed} className="header_navbar">
                    <a href="#!">
                        <img src={Logo} alt="Error" />
                    </a>

                    <select className="Selection" onChange={handleSelect}>
                        <option value="Select Page">Select Page</option>
                        <hr style={{ marginBottom: '5px' }} />
                        <option value="About">About</option>
                        <option value="Projects">Projects</option>
                        <option value="Contact">Contact</option>
                    </select>

                    <div className="header_buttons">
                        <button onClick={() => scrollToSection(aboutRef)} className="header-smooth">About</button>
                        <button onClick={() => scrollToSection(projectsRef)} className="header-smooth">Projects</button>
                        <button onClick={() => scrollToSection(contactRef)} className="header-smooth">Contact</button>
                    </div>
                </animated.div>

                <animated.div style={anime} className="header_frontend-flexer">
                    <div className="header_frontend">
                        <p className="frontend-name">Zubair Mukhammadjonov</p>
                        <h1 className="frontend-title" >{displayedText}</h1>
                        <h3 className="frontend_aboutMyself">A goal-oriented Entry Level Frontend Developer with knowledge of HTML, CSS, JavaScript, React, Angular, and Vue seeking to use technical proficiency and creativity to develop engaging user experiences and advance in a professional career. Looking to leverage code optimization and project collaboration capabilities to produce applications that exceed user expectations.</h3>
                        <button onClick={() => scrollToSection(contactRef)} className="frontend_GetInTouch">Get In Touch</button>
                    </div>
                    <div className="header_frontend-images">
                        <img src={MyPicture} alt="Error" />
                    </div>
                </animated.div>
            </header>
        </>
    )
}

export default Header