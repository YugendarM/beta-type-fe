import React, { useState } from 'react'
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";


const LoginPageComponent = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: ""
  })

  const handleLogin = (event) => {
    event.preventDefault()
    console.log(userCredential)
  }

  const handleChange = (event) => {
    setUserCredential((prev) => (
      {
      ...prev,
      [event.target.name] : event.target.value
    }))
  }

  return (
    <React.Fragment>
      <div className='w-full flex justify-center items-center h-[80vh] '>
        <div className='w-full px-5 max-w-[500px] flex flex-col justify-center items-center gap-5'>
          <h1 className='text-betatypeDarkBlue text-6xl font-bold py-10'>Log in</h1>
          <div className='w-full flex flex-col items-center gap-4'>
            <button className='flex items-center justify-center rounded-lg py-2 gap-2 border-2 w-full border-betatypePrimaryBlue shadow-buttonBlue hover:shadow-buttonBlue_hover hover:transform hover:-translate-y-1 transition'>
              <FcGoogle className='text-2xl'/>
              <p className='text-xl text-betatypeDarkBlue font-semibold'>Log in with Google</p>
            </button>
            <p className='text-xl font-semibold text-betatypeDarkBlue'>or</p>
          </div>
          <form className='w-full flex flex-col gap-8' onSubmit={(event) => handleLogin(event)}>
            <div 
              className={`bg-betatypeBgHalfWhite border-gray-300 rounded-lg px-4 py-3 border-2 focus-within:outline focus-within:outline-[2px] focus-within:outline-white focus-within:ring-[3px] focus-within:ring-betatypePrimaryBlue focus-within:ring-opacity-80`}
            >
              <input 
                name='email'
                className='bg-inherit w-full text-xl focus:outline-none placeholder:text-betatypeDarkBlue placeholder:text-opacity-80' 
                placeholder="Email address" 
                type='email' 
                onChange={(event) => handleChange(event)}
                required
                title='Provided email address is not valid'
              />
            </div>
            <div className='flex flex-col'>
              <div 
                className={`bg-betatypeBgHalfWhite flex items-center border-gray-300 rounded-lg px-4 py-3 border-2 focus-within:outline focus-within:outline-[2px] focus-within:outline-white focus-within:ring-[3px] focus-within:ring-betatypePrimaryBlue focus-within:ring-opacity-80`}
              >
                <input
                  name='password'
                  className='bg-inherit w-full text-xl focus:outline-none placeholder:text-betatypeDarkBlue placeholder:text-opacity-80' 
                  placeholder="Password" 
                  type={`${passwordVisible ? "text" : "password"}`} 
                  onChange={(event) => handleChange(event)}
                  required
                  minLength={8}
                  title='Password is a mandatory field and must be of atleast 8 characters'
                />
                {
                  passwordVisible ? 
                  <MdOutlineVisibilityOff className='cursor-pointer text-2xl text-gray-500' onClick={() => setPasswordVisible(false)}/> :
                  <MdOutlineVisibility className='cursor-pointer text-2xl text-gray-500' onClick={() => setPasswordVisible(true)}/>
                }
              </div>

              {/* <Link className='opacity-80 mt-2 border-b border-betatypeDarkBlue hover:text-betatypePrimaryBlue hover:border-betatypePrimaryBlue transition w-fit' to={"signup"}>Forgot your password?</Link> */}
            </div>

            <div className='w-full flex flex-col items-center'>
              <button type='submit' className='w-full text-xl font-semibold py-2 rounded-lg transition shadow-button hover:transform hover:-translate-y-1 hover:shadow-button_hover bg-betatypePrimaryYellow border-2 border-betatypeDarkYellow'>Login</button>
              <div className='flex items-center text-lg font-normal text-betatypeDarkBlue gap-3 py-3'>
                <p>Not yet Registered?</p><Link className='border-b border-betatypeDarkBlue hover:text-betatypePrimaryBlue hover:border-betatypePrimaryBlue transition' to={"signup"}>Signup now</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LoginPageComponent
