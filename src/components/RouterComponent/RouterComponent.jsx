import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LearnPageComponent from '../../pages/LearnPageComponent/LearnPageComponent'
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
import TestResultPageComponent from '../../pages/TestResultPageComponent/TestResultPageComponent'

const RouterComponent = () => {
  return (
    <Routes>
        <Route exact path='/' element={<HomePageComponent/>}/>
        <Route path='/typing-test' element={<TypingTestPageComponent/>}/>
        <Route path='/typing-test/result' element={<TestResultPageComponent/>}/>
        <Route path='/typing-tutor' element={<TypingTutorPageComponent/>}/>
        <Route path='/learn' element={<LearnPageComponent/>}/>
        <Route path="/profile/*" element={<ProfilePageComponent />} />
        <Route path='/leader-board' element={<LeaderBoardPageComponent/>}/>
        <Route path='/login' element={<LoginPageComponent/>}/>
        <Route path='/signup' element={<SignupPageComponent/>}/>
        <Route path='/about' element={<AboutPageComponent/>}/>
        <Route path='/contact' element={<ContactPageComponent/>}/>
        {/* <Route path='/*' element={<ErrorPageComponent/>}/> */}
      </Routes>
  )
}

export default RouterComponent
