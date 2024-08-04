import React from 'react'
import errorImage from "../../assets/error.png"
import { Link } from 'react-router-dom'

const ErrorPageComponent = () => {
  return (
    <React.Fragment>
      <div className='error-image-container md:h-[70vh] flex justify-center'>
        <img className='h-full' src={errorImage} alt='Error-page not found'/>
      </div>
      <h3 className='text-2xl md:text-4xl font-mono text-center py-3'>Page not found...</h3>
      <p className='text-center text-lg md:text-xl py-3'>Return back to <Link to={"/"} className='underline text-blue-500 hover:text-blue-400' >Home</Link></p>
    </React.Fragment>
  )
}

export default ErrorPageComponent
