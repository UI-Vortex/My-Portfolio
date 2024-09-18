import logo from '../../assets/logo.png'
import './footer.css'
import github from '../../assets/github.png'
import twitter from '../../assets/Twitter.png'
import linkedin from '../../assets/Linkedin.png'

function Footer() {
    return (
        <div className='dom'>
            <footer className='footer'>
                <img src={logo} alt="Error" />
                <div className="footer-whereAbouts">
                    <h3 className='footer-about'>About</h3>
                    <h3 className='footer-project'>Project</h3>
                    <h3 className='footer-contact'>Contact</h3>
                </div>
                <div className="logoes">
                    <a href="https://github.com/UI-Vortex"><i class="fa-brands fa-github"></i></a>
                    <a href="https://www.instagram.com/zubayir_walker/"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/zubayir-mukhammadjonov-02a78326a/"><i class="fa-brands fa-linkedin"></i></a>
                </div>
            </footer>
        </div>
    )
}

export default Footer