import React, { useState } from 'react'

const ContactPageComponent = () => {

  const [userData, setUserData] = useState({
    email: "",
    name: "",
    message: ""
  })

  const handleChange = (event) => {
    setUserData((prev) => (
      {
        ...prev,
        [event.target.name] : event.target.value
      }
    ))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(userData)
  }

  return (
    <React.Fragment>
      <div className='flex flex-col items-center justify-center gap-3 w-full py-10'>
        <h1 className='text-6xl text-betatypeDarkBlue font-bold'>Contact Us</h1>
        <p className='text-xl text-betatypeDarkBlue'>Need support? Got a question? Just want to say hi?</p>
        <p className='text-xl text-betatypeDarkBlue'>Please Feel free to write to us :)</p>
        <form className='flex flex-col gap-5 w-full max-w-[500px] py-5' onSubmit={(event) => handleSubmit(event)}>
          <div 
            className={`bg-betatypeBgHalfWhite border-gray-300 rounded-lg px-4 py-3 border-2 focus-within:outline focus-within:outline-[2px] focus-within:outline-white focus-within:ring-[3px] focus-within:ring-betatypePrimaryBlue focus-within:ring-opacity-80`}
          >
            <input 
              name='name'
              className='bg-inherit w-full text-xl focus:outline-none placeholder:text-betatypeDarkBlue placeholder:text-opacity-80' 
              placeholder="Your Name" 
              type='text' 
              onChange={(event) => handleChange(event)}
              required
              title='Provided email address is not valid'
            />
          </div>
          <div 
            className={`bg-betatypeBgHalfWhite border-gray-300 rounded-lg px-4 py-3 border-2 focus-within:outline focus-within:outline-[2px] focus-within:outline-white focus-within:ring-[3px] focus-within:ring-betatypePrimaryBlue focus-within:ring-opacity-80`}
          >
            <input 
              name='email'
              className='bg-inherit w-full text-xl focus:outline-none placeholder:text-betatypeDarkBlue placeholder:text-opacity-80' 
              placeholder="Your Email" 
              type='email' 
              onChange={(event) => handleChange(event)}
              required
              title='Provided email address is not valid'
            />
          </div>
          <div 
            className={`bg-betatypeBgHalfWhite border-gray-300 rounded-lg px-4 py-3 border-2 focus-within:outline focus-within:outline-[2px] focus-within:outline-white focus-within:ring-[3px] focus-within:ring-betatypePrimaryBlue focus-within:ring-opacity-80`}
          >
            <textarea
              name='message'
              className='bg-inherit w-full text-xl focus:outline-none placeholder:text-betatypeDarkBlue placeholder:text-opacity-80' 
              placeholder="Your Message" 
              type='text' 
              onChange={(event) => handleChange(event)}
              required
              title='Provided email address is not valid'
            />
          </div>

          <button type='submit' className='w-full text-xl text-betatypeDarkBlue font-semibold py-2 rounded-lg transition shadow-button hover:transform hover:-translate-y-1 hover:shadow-button_hover bg-betatypePrimaryYellow border-2 border-betatypeDarkYellow'>Send</button>

        </form>
      </div>
    </React.Fragment>
  )
}

export default ContactPageComponent
