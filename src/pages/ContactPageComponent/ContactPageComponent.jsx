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
  }

  return (
    <div className='contact-page-container flex justify-center items-center h-[80vh]'>
      <div className='contact-container flex flex-col items-center justify-center gap-3 w-full py-10 px-5 max-w-[500px]'>
        <h1 className='contact-header text-6xl text-betatypeDarkBlue font-semibold text-center'>Contact Us</h1>
        <p className='text-xl text-betatypeDarkBlue text-center'>Need support? Got a question? Just want to say hi?</p>
        <p className='text-xl text-betatypeDarkBlue text-center'>Please Feel free to write to us :)</p>
        <form className='contact-form-container flex flex-col gap-5 w-full max-w-[500px] py-5' onSubmit={(event) => handleSubmit(event)}>
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
              className='bg-inherit w-full text-xl focus:outline-none placeholder:text-betatypeDarkBlue placeholder:text-opacity-80 max-h-32' 
              placeholder="Your Message" 
              type='text' 
              onChange={(event) => handleChange(event)}
              required
              title='Provided email address is not valid'
            />
          </div>

          <button type='submit' className='w-full text-xl text-betatypeDarkBlue font-medium py-2 rounded-lg transition shadow-button hover:transform hover:-translate-y-1 hover:shadow-button_hover bg-betatypePrimaryYellow border-2 border-betatypeDarkYellow'>Send</button>

        </form>
      </div>
    </div>
  )
}

export default ContactPageComponent
