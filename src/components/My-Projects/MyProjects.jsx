import './myprojects.css'
import landingPage from '../../assets/landinPage.jpg'
import ticTacToe from '../../assets/tic-tact-game.jpg'
import shop from '../../assets/shop.jpg'
import { forwardRef } from 'react'
import { animated, useSpring } from 'react-spring'

const MyProjects = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <h1  className='project-title'>My Projects</h1>

            <div  className="project">
                <div className="project-project">
                    <img src={landingPage} alt="Error" />
                    <h2 className='project-name'>Landing Page</h2>
                    <p className="project-desc">Working closely with the Landing page, I have learned to ensure that the website not only met but exceeded their expectations. </p>
                    <button className="project-live"><a href="https://monarch-landing-page.netlify.app/">Visit Site</a></button>
                </div>
                <div className="project-project">
                    <img src={ticTacToe} alt="Error" />
                    <h2 className='project-name'>Tic Tac Toe Game</h2>
                    <p className="project-desc">in order to strengthen my skills, i have created a tic tac toe game, during coding i learned valuable things and boost my logic</p>
                    <button className="project-live"><a href="https://monarch-tic-tac-toe-game.netlify.app/">Visit Site</a></button>
                </div>
                <div className="project-project">
                    <img src={shop} alt="" />
                    <h2 className="project-name">Shopping Cart</h2>
                    <p className="project-desc">creating a shopping cart was quite difficult but i learned how to use useContext() and challenge my React js skills</p>
                    <button className="project-live"><a href="https://walkers-shopping-cart.netlify.app/">Visit Site</a></button>
                </div>
            </div>
            <hr className='line-2' />
        </div>
    )
})



export default MyProjects