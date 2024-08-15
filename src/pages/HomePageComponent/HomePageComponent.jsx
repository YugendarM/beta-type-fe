import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import stopwatch from '../../assets/stopwatch.png'
import bulb from '../../assets/bulb.png'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../../redux/user/userSlice'

const HomePageComponent = () => {

  const dispatch = useDispatch()
  const userState = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getUserDetails())
  }, [])


  return (
    <React.Fragment>
      <div className='w-full flex flex-col gap-10 items-center py-10'>
        {
          userState.data && userState.data.name ?
          <div className='w-full max-w-[800px] flex flex-col items-center gap-6 px-5 md:px-0'>
            <h1 className='text-6xl text-betatypeDarkBlue font-semibold text-center capitalize'>Hey, {userState.data && userState.data.name}</h1>
            <p className='text-center text-2xl opacity-60 font-medium'>Wonderful to have you here! Together, we'll uncover all the mysteries of touch typing. Let's dive into the learning journey!</p>
            <Link to={"/typing-tutor"} type='submit' className='w-full md:w-1/3 flex justify-center text-betatypeDarkBlue text-xl font-medium py-2 rounded-lg transition shadow-button hover:transform hover:-translate-y-1 hover:shadow-button_hover bg-betatypePrimaryYellow border-2 border-betatypeDarkYellow text-center'>Continue Learning</Link>
          </div>
          :
          <div className='w-full max-w-[800px] flex flex-col items-center gap-6 px-5 md:px-0'>
            <h1 className='text-4xl md:text-6xl text-betatypeDarkBlue font-semibold text-center capitalize'>Learn Touch Typing</h1>
            <p className='text-center text-2xl opacity-60 font-medium'>Enhance your typing skills with Betatype's typing tutor</p>
            <Link to={"/login"} type='submit' className='w-full md:w-1/3 flex justify-center text-betatypeDarkBlue text-xl font-medium py-2 rounded-lg transition shadow-button hover:transform hover:-translate-y-1 hover:shadow-button_hover bg-betatypePrimaryYellow border-2 border-betatypeDarkYellow text-center'>Start Learning</Link>
          </div>
        }

        <div className='md:px-10 w-full md:max-w-[1220px]'>
          <div className='home-tips-container w-full flex flex-col md:flex-row items-center md:rounded-3xl bg-betatypeBgViolet px-5 py-10'>
            <div className='w-1/2 flex justify-center'>
              <img src={bulb} alt='idea-bulb' className='w-2/5'/>
            </div>
            <div className='flex flex-col items-center md:items-start gap-5'>
              <h1 className=' text-3xl md:text-5xl text-betatypeBgHalfWhite font-semibold text-center md:text-start'>Learn touch typing</h1>
              <p className='text-betatypeBgHalfWhite text-lg md:text-xl text-center md:text-start'>Accelerate your learning and build essential keyboarding skills with the Betatype typing tutor!</p>
              <Link to={"/learn"} className='w-1/4 flex justify-center text-betatypeDarkBlue text-xl font-medium bg-betatypeSecondaryBlue rounded-lg py-2 gap-2 border-2 border-betatypePrimaryBlue shadow-buttonBlue hover:shadow-buttonBlue_hover hover:transform hover:-translate-y-1 transition'>Learn</Link>
            </div>
          </div>
        </div>

        <div className='home-stopwatch-container w-full max-w-[1220px] flex flex-col-reverse md:flex-row items-center justify-between gap-5 md:gap-20 md:px-10 px-5'>
          <div className='home-stopwatch-content w-full md:w-[75%] flex flex-col items-center gap-5 md:items-start '>
            <h1 className='text-betatypeDarkBlue font-semibold text-5xl text-center md:text-start'>Test your typing speed</h1>
            <p className='text-betatypeDarkBlue text-xl font-medium text-center md:text-start'>Enhance your typing skills and impress your friends or employers by taking an online typing test. Discover your typing speed and show off your position on the leaderboard!</p> 
            <Link to={"/typing-test"} className=' flex justify-center text-betatypeDarkBlue text-xl font-medium w-full md:w-1/3 bg-betatypeSecondaryBlue rounded-lg py-2 gap-2 border-2 border-betatypePrimaryBlue shadow-buttonBlue hover:shadow-buttonBlue_hover hover:transform hover:-translate-y-1 transition'>Take your test</Link>
          </div>
          <div className='home-stopwatch-img-container w-1/2 md:w-[25%] flex justify-center'>
            <img className=' object-fill' src={stopwatch} alt='stopwatch'/>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HomePageComponent
