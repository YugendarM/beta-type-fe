import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import betatypeLogo from "../../assets/betatype-logo.png"

const FooterComponent = () => {
  return (
    <div className='bg-betatypeBgHalfWhite flex justify-center'>
        <div className='w-full max-w-[1220px] px-10 py-4 '>
        <div className='footer-top-container flex justify-between border-b border-b-black border-opacity-20 py-6'>
            <div className='footer-top-left-container flex flex-col md:flex-row items-start gap-8 md:gap-20'>
                <div className='footer-typing-practice-container'>
                    <h2 className='text-gray-700 text-lg font-bold'>Typing Practice</h2>
                    <div className='footer-typing-practice-link-container flex flex-col pt-3'>
                        <Link className='text-base leading-8 text-gray-700 font-semibold hover:underline transition' to={"/typing-tutor"}>Typing Tutor</Link>
                        <Link className='text-base leading-8 text-gray-700 font-semibold hover:underline transition' to={"/typing-test"}>Typing Test</Link>
                        <Link className='text-base leading-8 text-gray-700 font-semibold hover:underline transition' to={"/leader-board"}>Leader Board</Link>
                    </div>
                </div>
                <div className='footer-resource-container'>
                    <h2 className='text-gray-700 text-lg font-bold'>Resources</h2>
                    <div className='footer-resources-link-container flex flex-col pt-3'>
                        <Link className='text-base leading-8 text-gray-700 font-semibold hover:underline transition' to={"/learn"}>Learn</Link>
                    </div>
                </div>
                <div className='footer-about-container'>
                    <h2 className='text-gray-700 text-lg font-bold'>About</h2>
                    <div className='footer-about-link-container flex flex-col pt-3'>
                        <Link className='text-base leading-8 text-gray-700 font-semibold hover:underline transition' to={"/about"}>About Betatype</Link>
                        <Link className='text-base leading-8 text-gray-700 font-semibold hover:underline transition' to={"/contact"}>Contact Us</Link>
                    </div>
                </div>
            </div>

            <div className='footer-top-right-container'>
                <img alt='logo' src={betatypeLogo} className='h-16 object-fill'/>
            </div>
        </div>

        <div className='footer-bottom-container flex items-center justify-between py-5 text-gray-700'>
            <div className='footer-copyright-container'>
                <p>© 2024 Betatype - Free Online Typing Tutor</p>
            </div>
            <div className='contributor-contact flex items-center text-black gap-4'>
                <a href='https://github.com/YugendarM'><FaGithub className='text-3xl'/></a>
                <a href='mailto:projectbetatype@gmail.com'><MdEmail className='text-3xl'/></a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FooterComponent
