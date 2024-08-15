import React from 'react'
import { FaBoltLightning } from "react-icons/fa6";
import gold from "../../assets/gold.png"
import silver from "../../assets/silver.png"
import bronze from "../../assets/bronze.png"

const ScoreCardComponent = ({user, index}) => {

    const bgColor = {
        1: "bg-betatypeKeyPurpleShadow",
        2: "bg-betatypeKeyGreenShadow",
        3: "bg-betatypeKeyRedShadow",
        4: "bg-betatypeKeyBlueShadow",
        5: "bg-betatypeKeyYellowShadow",
        6: "bg-betatypeKeyOrangeShadow",
        7: "bg-betatypeScoreCardPink",
        8: "bg-betatypeScoreCardOrange"
    }

    const bgClass = bgColor[Math.floor(Math.random() * 8) + 1]

  return (
    <div className='relative flex py-4 border-b-2 border-betatypeBgHalfWhite'>
      <p className='w-1/6 flex justify-center items-center text-betatypeDarkBlue text-xl font-medium'>{index + 1}</p>
      <div className='flex items-center justify-between w-1/3 gap-2'>
        <div className='w-full flex items-center gap-2'>
            <h1 className={`rounded-full w-12 h-12 flex justify-center items-center text-white font-medium text-2xl ${bgClass}`}>{user.name[0].toUpperCase()}</h1>
            <p className='text-betatypeDarkBlue text-xl font-medium overflow-hidden text-ellipsis'>{user.name}</p>
        </div>
        <div className='h-10 w-10'>
            <img
                className='w-full'
                src={index === 0 ? gold : index === 1 ? silver : index === 2 ? bronze : null }
            />
      </div>
      </div>
      <p className='w-1/6 flex justify-center items-center text-betatypeDarkBlue text-xl font-semibold'>{user.topSpeed} <span className='font-medium text-lg'>wpm</span></p>
      <p className='w-1/6 flex justify-center items-center text-betatypeDarkBlue text-xl font-medium'>{user.topAccuracy}%</p>
      <div className='w-1/6 flex justify-center items-center'>
        <div className='flex justify-end gap-1'>
            <p className='text-betatypeDarkBlue text-xl font-medium'>{user.betaScore}</p>
            <FaBoltLightning className='text-betatypeDarkYellow text-xl'/>
        </div>
      </div>
    </div>
  )
}

export default ScoreCardComponent
