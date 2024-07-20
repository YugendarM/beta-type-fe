import React, { useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import HomePageComponent from '../../pages/HomePageComponent/HomePageComponent'
import TypingTestPageComponent from '../../pages/TypingTestPageComponent/TypingTestPageComponent'
import TypingTutorPageComponent from '../../pages/TypingTutorPageComponent/TypingTutorPageComponent'
import ProfilePageComponent from '../../pages/ProfilePageComponent/ProfilePageComponent'
import LoginPageComponent from '../../pages/LoginPageComponent/LoginPageComponent'
import LeaderBoardPageComponent from '../../pages/LeaderBoardPageComponent/LeaderBoardPageComponent'
import SignupPageComponent from '../../pages/SignupPageComponent/SignupPageComponent'
import AboutPageComponent from '../../pages/AboutPageComponent/AboutPageComponent'
import ContactPageComponent from '../../pages/ContactPageComponent/ContactPageComponent'
import ErrorPageComponent from '../../pages/ErrorPageComponent/ErrorPageComponent'
import betatypeLogo from "../../assets/betatype-logo.png"
import defaultProfile from "../../assets/default_profile.png"
import avatar from "../../assets/avatar.svg"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const NavbarComponent = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const {pathname} = useLocation();
  console.log(pathname)

  return (
    <React.Fragment>

        <nav className='w-full flex items-center justify-center py-5'>
            
          <div className='w-full max-w-[1220px] flex items-center justify-between md:px-10 px-5'>
            <Link to={"/"} className=' flex justify-center'>
                <img className='h-16 object-fill' alt='betatype_logo' src={betatypeLogo}/>
            </Link>

            <div className='md:flex items-center justify-start hidden'>
                <ul className='flex items-center justify-around'>
                    <Link className={`${pathname === "/typing-tutor" ? "bg-betatypePrimaryBlue text-white" : "text-betatypeDarkBlue bg-white" } text-base font-semibold rounded-full  px-4 py-3 transition`} to={"/typing-tutor"}>Typing Tutor</Link>
                    <Link className={`${pathname === "/typing-test" ? "bg-betatypePrimaryBlue text-white" : "text-betatypeDarkBlue bg-white" }  text-base font-semibold rounded-full  px-4 py-3 transition`} to={"/typing-test"}>Typing Test</Link>
                    <Link className={`${pathname === "/about" ? "bg-betatypePrimaryBlue text-white" : "text-betatypeDarkBlue bg-white" } text-base font-semibold rounded-full  px-4 py-3 transition `} to={"/about"}>About</Link>
                </ul>
            </div>

            {
              10<2 ? 
              <div className=' md:flex justify-end hidden'>
                <Link to={"/profile"} className=' flex items-center gap-2 justify-end rounded-full px-3 py-2 hover:bg-blue-50 transition'>
                  <p className='text-xl font-semibold text-betatypeDarkBlue'>Yugendar</p> 
                  <img className='object-fill' alt="profile_doodle" src={avatar}/>
                </Link>
              </div> 
              :
              <div className=' md:flex items-center justify-end gap-5 hidden'>
                <Link className='text-betatypeDarkBlue font-semibold text-base hover:opacity-80 transition' to={"/login"}>Login</Link>
                <Link className='rounded-full bg-betatypeDarkBlue text-white px-5 py-3 text-base font-semibold hover:opacity-80 transition' to={"/signup"}>Signup</Link>
              </div>
            }
            <div className='md:hidden' onClick={() => {
              setIsMenuOpen((prev) => {
                if(!prev){
                  document.body.classList.add('no-scroll') 
                  return true
                }
                else{
                  document.body.classList.remove('no-scroll')
                  return false
                }
              })
            }}>
              {
                isMenuOpen ?
                <IoCloseSharp className='text-3xl text-betatypeDarkBlue'/> : 
                <GiHamburgerMenu  className='text-2xl text-betatypeDarkBlue'/>
              }
            </div>
            {
              isMenuOpen &&
              <div className={`md:hidden w-full bg-black bg-opacity-70 opacity-70 z-10 fixed left-0 top-20 flex flex-col ${isMenuOpen ? "animate-fall" : "animate-rise"}`}>
                <div className=' rounded-b-2xl bg-white pt-5'>
                  <div className='flex flex-col border-b border-betatypeDarkBlue border-opacity-15 px-6'>
                    <Link className='text-xl font-semibold text-betatypeDarkBlue py-2'>Typing Tutor</Link>
                    <Link className='text-xl font-semibold text-betatypeDarkBlue py-2'>Typing Test</Link>
                    <Link className='text-xl font-semibold text-betatypeDarkBlue py-2'>About</Link>
                  </div>
                  {
                    10<20 ? 
                    <div className='flex flex-col px-6 rounded-b-2xl pb-5'>
                      <div className=' flex flex-reverse items-start gap-2 rounded-full py-2 hover:bg-blue-50 transition'>
                        <img className='object-fill' alt="profile_doodle" src={avatar}/>
                        <p className='text-xl font-semibold text-betatypeDarkBlue'>Yugendar</p> 
                      </div>
                      <Link className='text-xl font-semibold text-betatypeDarkBlue py-2' to={"/profile"}>My Profile</Link>
                    </div>:
                    <div className='flex flex-col px-6 rounded-b-2xl pb-5'>
                      <Link className='text-xl font-semibold text-betatypeDarkBlue py-2'>Log In</Link>
                      <Link className='text-xl font-semibold text-betatypeDarkBlue py-2'>Sign Up</Link>
                    </div>
                  }
                </div>
                <div className='h-screen'></div>
              </div>
            }
          </div>
        </nav>

      <Routes>
        <Route exact path='/' element={<HomePageComponent/>}/>
        <Route path='/typing-test' element={<TypingTestPageComponent/>}/>
        <Route path='/typing-tutor' element={<TypingTutorPageComponent/>}/>
        <Route path='/profile' element={<ProfilePageComponent/>}/>
        <Route path='/leader-board' element={<LeaderBoardPageComponent/>}/>
        <Route path='/login' element={<LoginPageComponent/>}/>
        <Route path='/signup' element={<SignupPageComponent/>}/>
        <Route path='/about' element={<AboutPageComponent/>}/>
        <Route path='/contact' element={<ContactPageComponent/>}/>
        <Route path='/*' element={<ErrorPageComponent/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default NavbarComponent
