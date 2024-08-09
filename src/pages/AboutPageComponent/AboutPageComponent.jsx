import React, { useEffect } from 'react'

const AboutPageComponent = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <div className='flex justify-center py-5 md:py-10'>
      <div className='w-full max-w-[900px] px-5 md:px-10 flex flex-col items-center gap-10'>
        <div className="about-container flex flex-col gap-5">
          <h1 className='text-3xl md:text-5xl font-semibold text-betatypeDarkBlue text-center'>About Betatype</h1>
          <p className='text-lg text-betatypeDarkBlue text-justify inline-block'>
          Welcome to Betatype, your go-to platform for mastering the art of touch typing. Whether you’re a beginner looking to improve your typing speed and accuracy, or an advanced typist aiming to polish your skills, Betatype is designed to help you achieve your goals efficiently.
          </p>
        </div>

        <div className='flex flex-col gap-5'>
          <h1 className='text-xl md:text-3xl font-semibold text-betatypeDarkBlue'>Our Mission</h1>
          <p className='text-lg text-betatypeDarkBlue text-justify inline-block'>
          At Betatype, we believe that typing is more than just a skill—it’s a foundation for effective communication in the digital world. Our mission is to provide a comprehensive, user-friendly platform that makes touch typing accessible to everyone, helping you boost your productivity and confidence in typing.
          </p>
        </div>

        <div className='flex flex-col gap-5'>
          <h1 className='text-xl md:text-3xl font-semibold text-betatypeDarkBlue'>What We Offer</h1>
          <p className='text-lg text-betatypeDarkBlue text-justify inline-block'>
            Inspired by the widely recognized platform Ratatype, Betatype offers a range of features tailored to enhance your typing journey:
          </p>
          <ul className='list-outside list-disc px-5 leading-10'>
            <li className='text-lg text-betatypeDarkBlue text-opacity-90 text-justify leading-10'><span className='font-semibold text-opacity-100'>Personalized Practice Sessions: </span>Practice with custom exercises designed to suit your skill level, ensuring that you always have the right challenge to improve your speed and accuracy.</li>
            <li className='text-lg text-betatypeDarkBlue text-opacity-90 text-justify leading-10 '><span className='font-semibold text-opacity-100'>Typing Tests: </span>Take our typing tests to measure your progress over time, and compare your results with typists from around the world.</li>
            <li className='text-lg text-betatypeDarkBlue text-opacity-90 text-justify leading-10'><span className='font-semibold text-opacity-100'>Engaging Challenges: </span>Participate in typing challenges and compete with friends or other users to make learning fun and interactive.</li>
            <li className='text-lg text-betatypeDarkBlue text-opacity-90 text-justify leading-10'><span className='font-semibold text-opacity-100'>Leaderboard: </span>See how you stack up against others with our competitive leaderboard. Whether you're striving to climb the ranks or just curious about your standing, the leaderboard adds an exciting competitive edge to your practice.</li>
          </ul>
        </div>

        <div className='flex flex-col gap-5'>
          <h1 className='text-xl md:text-3xl font-semibold text-betatypeDarkBlue'>Why Choose Betatype?</h1>
          <p className='text-lg text-betatypeDarkBlue text-justify inline-block'>
            Betatype is designed with you in mind. We focus on creating an intuitive and engaging experience that makes learning to type both fun and effective. Our platform is constantly evolving, with new features and improvements based on user feedback, ensuring that you always have the best tools at your fingertips.
          </p>
          <p className='text-lg text-betatypeDarkBlue text-justify inline-block'>
            Join us on Betatype and take your typing skills to the next level!
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPageComponent
