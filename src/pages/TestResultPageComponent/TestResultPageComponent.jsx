import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { MdOutlineShutterSpeed } from "react-icons/md";
import { AiOutlineAim } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { FaBoltLightning } from "react-icons/fa6";

const TestResultPageComponent = () => {

    const [betaScoreLabelOpen, setBetaScoreLabelOpen] = useState(false) 

    const attemptReview = useSelector((state) => state.testAttempt)
    const userData = useSelector((state) => state.user)

    useEffect(() => {
       
    }, [])
    
  return (
    <div className='result-page-container flex justify-center'>
      <div className='w-full max-w-[1220px] px:5 md:px-10 flex justify-center items-center h-[85vh]'>
        {
            Object.keys(attemptReview.data).length > 0 ?
            <div className='bg-betatypeBgHalfWhite h-[500px] w-4/5 rounded-2xl flex flex-col'>
                <div className='p-10 flex items-center justify-between'>
                    <h1 className='text-3xl text-betatypeDarkBlue '>Perfect Score!</h1>
                    <div 
                        className='flex flex-col items-center'
                        onMouseEnter={() => setBetaScoreLabelOpen(true)}
                        onMouseLeave={() => setBetaScoreLabelOpen(false)}
                    >
                        {
                            betaScoreLabelOpen && 
                            <div className='fixed tooltip-container w-72 top-20 shadow-lg rounded-lg bg-white border p-2 transition text-sm'>
                                <p>The Betascore is calculated based on speed and accuracy, with a weight of 60% given to speed and 40% to accuracy.</p>
                            </div>
                        }
                        <div className='flex items-center gap-1 cursor-pointer'>
                            <p className='text-3xl font-semibold text-betatypeDarkBlue'><span className='text-xl text-betatypeDarkBlue text-opacity-90 font-medium'>BetaScore:</span> {attemptReview && attemptReview.data && attemptReview.data.betaScore} </p>
                            <FaBoltLightning className='text-betatypeDarkYellow text-3xl'/>
                        </div>
                    </div>
                </div>


                <div className='flex w-full relative overflow-hidden'>
                    <div className='bg-betatypeScoreCardPink w-2/5 h-36 -skew-x-12 origin-top-right flex items-center justify-end px-6'>
                        <div className='skew-x-12 flex flex-col'>
                            <div className='flex items-center gap-1'>
                                <MdOutlineShutterSpeed className='text-2xl text-white text-opacity-70'/>
                                <h4 className='text-base text-white font-medium'>TYPING SPEED</h4>
                            </div>
                            <div className='flex items-end gap-1'>
                                <h1 className='text-6xl font-semibold text-white'>{attemptReview && attemptReview.data && attemptReview.data.speed}</h1>
                                <span className='text-base text-white opacity-70 mb-1 font-medium'>WPM</span>
                            </div>
                            {
                                userData.data && userData.data.topSpeed && 
                                <div>
                                    <p className='text-sm text-white opacity-70 mb-1 font-medium'>YOUR BEST {userData.data.topSpeed && userData.data.topSpeed} WPM</p>
                                </div>
                            }
                        </div>
                    </div>
                    <div className='bg-betatypeScoreCardOrange w-3/5 h-36 -skew-x-12 origin-bottom-left flex items-center justify-start px-6'>
                        <div className='skew-x-12 flex flex-col'>
                            <div className='flex items-center gap-1'>
                                <AiOutlineAim className='text-2xl text-white text-opacity-70'/>
                                <h4 className='text-base text-white font-medium'>ACCURACY</h4>
                            </div>
                            <div className='flex items-end gap-1'>
                                <h1 className='text-6xl font-semibold text-white'>{attemptReview && attemptReview.data && attemptReview.data.accuracy}</h1>
                                <span className='text-base text-white opacity-70 mb-1 font-medium'>%</span>
                            </div>
                            {
                                userData.data && userData.data.topAccuracy && 
                                <div>
                                    <p className='text-sm text-white opacity-70 mb-1 font-medium'>YOUR BEST {userData.data.topAccuracy && userData.data.topAccuracy}%</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <div className='p-10'>
                    <p className='text-betatypeDarkBlue'>Try again to improve your score</p>
                    <p className='text-betatypeDarkBlue'>Or <Link to={"/typing-tutor"} className='text-betatypePrimaryBlue hover:underline hover:text-opacity-90'>take a lesson</Link> with our typing tutor</p>
                </div>

                <div className='flex px-10 gap-10'>
                    <Link to={"/typing-test"} className='px-10 text-xl text-betatypeDarkBlue font-medium py-2 rounded-lg transition shadow-button hover:transform hover:-translate-y-1 hover:shadow-button_hover bg-betatypePrimaryYellow border-2 border-betatypeDarkYellow'>Try Again</Link>
                    <Link to={"/"} className='w-1/4 flex justify-center text-betatypeDarkBlue text-xl font-medium bg-betatypeSecondaryBlue rounded-lg py-2 gap-2 border-2 border-betatypePrimaryBlue shadow-buttonBlue hover:shadow-buttonBlue_hover hover:transform hover:-translate-y-1 transition'>Go back Home</Link>
                </div>
            </div>

            :

            <div>
                <h1>An Error Occured</h1>
            </div>
        }
        
      </div>
    </div>
  )
}

export default TestResultPageComponent
