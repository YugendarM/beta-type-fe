import React, { useEffect, useState } from 'react'
import ScoreCardComponent from '../../components/ScoreCardComponent/ScoreCardComponent'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersBasedOnTopBetaScore, getUsersBasedOnTopSpeed } from '../../redux/scoreBoard/scoreBoardSlice'
import ScoreBoardLoadingComponent from '../../components/ScoreBoardLoadingComponent/ScoreBoardLoadingComponent'

const LeaderBoardPageComponent = () => {

  const user = {
    name: "Yugendar",
    topSpeed: 47,
    topAccuracy: 94,
    betaScore: 999999
  }
  const dispatch = useDispatch()
  const scoreBoardData = useSelector((state) => state.scoreBoard)

  const [tabContext, setTabContext] = useState("speed")

  const handleSwitchTabSpeed = () => {
    setTabContext("speed")
    dispatch(getUsersBasedOnTopSpeed())
  }

  const handleSwitchTabBetaScore = () => {
    setTabContext("betaScore")
    dispatch(getUsersBasedOnTopBetaScore())
  }

  useEffect(() => {
    dispatch(getUsersBasedOnTopSpeed())
  }, [])

  return (
    <div className='leader-board-page-container w-full flex justify-center min-h-[90vh]'>
      <div className='w-full max-w-[1020px] px-5 md:px-10'>
        <h1 className='text-3xl md:text-5xl font-semibold text-betatypeDarkBlue text-center'>Leader Board</h1>
        <div className='leader-board-option-container w-full flex justify-center py-4 px-40'>
          <button 
            className={`text-xl font-semibold py-2 w-1/2 transition ${tabContext === "speed" ? "text-betatypePrimaryBlue border-b-2 border-betatypePrimaryBlue" : "text-gray-500"}`}
            onClick={handleSwitchTabSpeed}
          >Top Speed</button>
          <button 
            className={`text-xl font-semibold py-2 w-1/2 transition ${tabContext === "betaScore" ? "text-betatypePrimaryBlue border-b-2 border-betatypePrimaryBlue" : "text-gray-500"}`}
            onClick={handleSwitchTabBetaScore}
          >Top Beta Score</button>
        </div>

        <div className='w-full flex justify-center bg-betatypeBgHalfWhite py-3 text-base text-gray-600 font-medium rounded-lg'>
          <p className='w-1/6 text-center'>#</p>
          <p className='w-1/3'>Name</p>
          <p className='w-1/6 text-center'>Speed</p>
          <p className='w-1/6 text-center'>Accuracy</p>
          <p className='w-1/6 text-center'>Beta Score</p>
        </div>

        {
          scoreBoardData && scoreBoardData.loading ? 
            <ScoreBoardLoadingComponent/>
          :
          <div>
            {
              scoreBoardData && scoreBoardData.data.length > 0 && scoreBoardData.data.map((user, index) => (
                <ScoreCardComponent user={user} key={index} index={index}/>
              ))
            }
          </div>
        }
      </div>
    </div>
  )
}

export default LeaderBoardPageComponent