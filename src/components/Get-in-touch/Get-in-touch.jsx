import { forwardRef } from 'react'
import './getintouch.css'

const GetInTouch = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <h1 className='GetInTouch'>Get In Touch</h1>
            <div className="communication-projects">
                <div className="communication-back">
                    <h1 className="com-title">Let’s discuss
                        on something <span>cool</span> together</h1>
                </div>
                <div className="communication-texts">
                    <h1 className="com-text-title">Let's Get In Touch</h1>
                    <input className='input-1' type="text" placeholder='You name' />
                    <input className='input-2' type="text" placeholder='Your email' />
                    <input className='input-3' type="text" placeholder='Your message' />
                    <div className="com-button">
                        <button className='com-btn'><a href="https://t.me/Zubayir_Walkerr">Send Message</a></button>
                        <i class="fa-solid fa-paper-plane"></i>
                    </div>
                </div>
            </div>
            <hr className='line-3' />
        </div>
    )
})


export default GetInTouch