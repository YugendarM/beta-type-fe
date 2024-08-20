import React from 'react'
import profileAvatar from "../../assets/avatar.svg"
import { FaBoltLightning } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'
import { MdOutlineShutterSpeed } from "react-icons/md";
import { AiOutlineAim } from "react-icons/ai";
import { MdOutlineLogout } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const ProfilePageComponent = () => {

  const userData = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const createdAt = new Date(userData.data.createdAt && userData.data.createdAt);
  const formattedDate = createdAt.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: '2-digit',
  });

  const handleLogout = () => {
    dispatch(logoutUser())
    alert("User logged out")
    navigate("/login")
  }

  return (
    <div className='profile-page-container flex justify-center h-[85vh]'>
      <div className='w-full max-w-[1220px] px-5 md:px-10 flex gap-5 py-5'>

        <div className='w-[30%] flex flex-col gap-4'>
          {/* <button className='text-betatypeDarkBlue text-xl font-medium  border-gray-200 text-start py-2 px-3 rounded-lg w-2/3 flex items-center gap-3 justify-center hover:bg-gray-100 transition'>Dark Mode<MdDarkMode className='text-2xl'/></button> */}
          <button onClick={handleLogout} className='text-betatypeDarkBlue text-xl font-medium border-2 border-gray-200 text-start py-2 px-3 rounded-lg w-2/3 flex items-center gap-3 justify-center hover:bg-gray-100 transition'>Logout<MdOutlineLogout className='text-2xl'/></button>
        </div>

        <div className='w-[70%] flex flex-col gap-10 '>
          <div className='profile-container flex items-center gap-8'>
            <img alt='profile-avatar' src={profileAvatar} className='w-24'/>
            <div className='flex flex-col gap-2'>
              <h1 className='text-betatypeDarkBlue text-5xl font-semibold capitalize'>{userData.data.name && userData.data.name}</h1>
              <p className='text-xl text-betatypeDarkBlue text-opacity-70 font-medium'>Joined {formattedDate}</p>
            </div>
          </div>

          <div className='overview-container flex flex-col gap-8 max-w-[600px]'>
            <div className='flex justify-between items-center'>
              <h1 className='text-betatypeDarkBlue text-4xl font-semibold'>Overview</h1>
              <div className='flex items-center'>
                <p className='text-3xl font-semibold text-betatypeDarkBlue'><span className='text-xl text-betatypeDarkBlue text-opacity-90 font-medium'>BetaScore: </span>{userData.data.betaScore && userData.data.betaScore}</p>
                <FaBoltLightning className='text-betatypeDarkYellow text-3xl'/>
              </div>
            </div>

            {
              (userData.data.topSpeed > 0 && userData.data.topAccuracy > 0) && 
              <div className='flex items-center justify-around'>
                <div className='speed-container bg-betatypePrimaryPurple flex flex-col items-center w-48 rounded-2xl'>
                  <div className='bg-betatypePrimaryDarkPurple w-full rounded-t-2xl'>
                    <p className='text-white text-opacity-80 py-2 flex justify-center items-center gap-1'><MdOutlineShutterSpeed className='text-2xl'/>Top Speed</p>
                  </div>
                  <p className='text-5xl text-white font-medium py-4 flex justify-center items-end'>{userData.data.topSpeed && userData.data.topSpeed}<span className='text-lg text-white font-normal text-opacity-90'>wpm</span></p>
                </div>

                <div className='speed-container bg-betatypePrimaryOrange flex flex-col items-center w-48 rounded-2xl'>
                  <div className='bg-betatypePrimaryDarkOrange w-full rounded-t-2xl'>
                    <p className='text-white text-opacity-80 py-2 flex justify-center items-center gap-1'><AiOutlineAim className='text-2xl'/>Accuracy</p>
                  </div>
                  <p className='text-5xl text-white font-medium py-4 flex justify-center items-end'>{userData.data.topAccuracy && userData.data.topAccuracy}<span className='text-lg text-white font-normal text-opacity-90'>%</span></p>
                </div>
              </div>
            }
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default ProfilePageComponent
