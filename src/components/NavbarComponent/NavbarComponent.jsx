import React from 'react'
import { Route, Routes } from 'react-router-dom'
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

const NavbarComponent = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path='/' element={<HomePageComponent/>}/>
        <Route exact path='/typing-test' element={<TypingTestPageComponent/>}/>
        <Route exact path='/typing-tutor' element={<TypingTutorPageComponent/>}/>
        <Route exact path='/profile' element={<ProfilePageComponent/>}/>
        <Route exact path='/leader-board' element={<LeaderBoardPageComponent/>}/>
        <Route exact path='/login' element={<LoginPageComponent/>}/>
        <Route exact path='/signup' element={<SignupPageComponent/>}/>
        <Route exact path='/about' element={<AboutPageComponent/>}/>
        <Route exact path='/contact' element={<ContactPageComponent/>}/>
        <Route exact path='/*' element={<ErrorPageComponent/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default NavbarComponent
