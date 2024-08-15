import React, { useEffect } from 'react'
import KeyComponent from '../../components/KeyComponent/KeyComponent'
import keyboard from "../../assets/keyboard.svg"
import hands from "../../assets/hands.svg"
import { Link } from 'react-router-dom'
import enLeft from "../../assets/en_left.svg"
import enRight from "../../assets/en_right.svg"

const LearnPageComponent = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  
  return (
    <React.Fragment>
      <div className='w-full flex justify-center py-10'>
        <div className='w-full max-w-[900px] px-5 md:px-10 flex flex-col gap-10 '>
          <div className="learn-page-section1-container w-full flex flex-col gap-5">
            <h1 className='text-4xl md:text-6xl font-semibold text-betatypeDarkBlue text-center'>Learn how to touch type</h1>
            <h2 className='text-xl md:text-2xl font-medium text-betatypeDarkBlue'>Why You Should Learn How to Type and Improve Touch Typing Skills?</h2>
            <p className='text-lg text-betatypeDarkBlue text-opacity-90 text-justify'>The rapid advancement of technology has made computer skills more crucial than ever, with touch typing emerging as a highly valuable skill for employees and job seekers. Mastering touch typing can unlock numerous career opportunities, making it an essential skill to learn.</p>
          </div>

          <div className="learn-page-section2-container flex flex-col gap-5">
            <h1 className='text-3xl md:text-5xl font-semibold text-betatypeDarkBlue text-center'>Sitting posture for typing</h1>
            <ul className='list-outside list-disc px-5 leading-10'>
              <li className='text-lg text-betatypeDarkBlue text-opacity-90 text-justify leading-10'>Maintain an upright posture with your back straight.</li>
              <li className='text-lg text-betatypeDarkBlue text-opacity-90 text-justify leading-10 '>Bend your elbows at a comfortable angle.</li>
              <li className='text-lg text-betatypeDarkBlue text-opacity-90 text-justify leading-10'>Face the screen with a slight forward tilt of your head.</li>
              <li className='text-lg text-betatypeDarkBlue text-opacity-90 text-justify leading-10'>Keep a distance of 45-70 cm between your eyes and the screen.</li>
              <li className='text-lg text-betatypeDarkBlue text-opacity-90 text-justify leading-10'>Minimize strain on your shoulder, arm, and wrist muscles.</li>
              <li className='text-lg text-betatypeDarkBlue text-opacity-90 text-justify leading-10'>Allow your wrists to rest lightly on the tabletop in front of the keyboard without shifting your body weight onto them.</li>
            </ul>
          </div>

          <div className='home-row-section-container flex flex-col gap-5'>
            <h1 className='text-3xl md:text-5xl font-semibold text-betatypeDarkBlue text-center'>Home row position</h1>
            <div className='home-row-key-container flex items-center gap-5 justify-center w-full'>
              <div>
                <img src={enLeft}/>
              </div>
              <div>
                <img src={enRight}/>
              </div>
            </div>
            <div className=''>
              <p className='text-lg text-betatypeDarkBlue text-opacity-90 text-justify inline-block'>
                Curve your fingers a little and put them on the 
                <span className='border border-betatypePrimaryBlue shadow-buttonBlue rounded-md w-7 h-8 inline-block text-center mx-2'>A</span>
                <span className='border border-betatypePrimaryBlue shadow-buttonBlue rounded-md w-7 h-8 inline-block text-center mx-2'>S</span>
                <span className='border border-betatypePrimaryBlue shadow-buttonBlue rounded-md w-7 h-8 inline-block text-center mx-2'>D</span>
                <span className='border border-betatypePrimaryBlue shadow-buttonBlue rounded-md w-7 h-8 inline-block text-center mx-2'>F</span> 
                and keys which are located in the middle row of the letter keys. This row is called HOME ROW because you always start from these keys and always return to them.</p>
            </div>
            <p className='text-lg text-betatypeDarkBlue text-opacity-90 text-justify inline-block'>
              <span className='border border-betatypePrimaryBlue shadow-buttonBlue rounded-md w-7 h-8 inline-block text-center mr-2'>F</span>
              and 
              <span className='border border-betatypePrimaryBlue shadow-buttonBlue rounded-md w-7 h-8 inline-block text-center mx-2'>J</span>
              keys under your index fingers should have a raised line on them to aide in finding these keys without looking.</p>
          </div>

          <div className='keyboard-section-container flex flex-col items-center gap-5'>
            <h1 className='text-3xl md:text-5xl font-semibold text-betatypeDarkBlue text-center'>Keyboard Scheme</h1>
            <div className='relative my-10'>
              <img src={keyboard} alt='keyboard'/>
              <img className='absolute -bottom-14 md:left-16' src={hands} alt='keyboard-hands'/>
            </div>
            <h2 className='text-betatypeDarkBlue text-2xl font-medium text-center'>The color-coded keyboard under lesson input field will help you to understand which finger should press each key.</h2>
            <ul className='list-outside list-disc px-5 leading-10'>
              <li className='text-lg text-betatypeDarkBlue text-opacity-90 text-justify leading-10'>Hit keys only with the fingers for which they have been reserved.</li>
              <li className='text-lg text-betatypeDarkBlue text-opacity-90 text-justify leading-10'>
                Always return to the starting position of the fingers"
                <span className='border border-betatypePrimaryBlue shadow-buttonBlue rounded-md w-7 h-8 inline-block text-center mx-1'>A</span>
                <span className='border border-betatypePrimaryBlue shadow-buttonBlue rounded-md w-7 h-8 inline-block text-center mx-1'>S</span>
                <span className='border border-betatypePrimaryBlue shadow-buttonBlue rounded-md w-7 h-8 inline-block text-center mx-1'>D</span>
                <span className='border border-betatypePrimaryBlue shadow-buttonBlue rounded-md w-7 h-8 inline-block text-center mx-1'>F</span>
                 – 
                <span className='border border-betatypePrimaryBlue shadow-buttonBlue rounded-md w-7 h-8 inline-block text-center mx-1'>J</span>
                <span className='border border-betatypePrimaryBlue shadow-buttonBlue rounded-md w-7 h-8 inline-block text-center mx-1'>K</span>
                <span className='border border-betatypePrimaryBlue shadow-buttonBlue rounded-md w-7 h-8 inline-block text-center mx-1'>L</span>
                <span className='border border-betatypePrimaryBlue shadow-buttonBlue rounded-md w-7 h-8 inline-block text-center mx-1'>;</span>
                ".</li>
              <li className='text-lg text-betatypeDarkBlue text-opacity-90 text-justify leading-10'>Establish and maintain a rhythm while typing. Your keystrokes should come at equal intervals.</li>
              <li className='text-lg text-betatypeDarkBlue text-opacity-90 text-justify leading-10'>When typing, imagine the location of the symbol on the keyboard.</li>
              <li className='text-lg text-betatypeDarkBlue text-opacity-90 text-justify leading-10'>
                The 
                <span className='border border-betatypePrimaryBlue shadow-buttonBlue rounded-md px-2 h-8 inline-block text-center mx-1 align-middle'>SHIFT</span> 
                key is always pressed by the pinky finger opposite to the one hitting the other key.</li>
              <li className='text-lg text-betatypeDarkBlue text-opacity-90 text-justify leading-10'>Use the thumb of whichever hand is more convenient for you to press the Space bar.</li>
            </ul>
          </div>

          <div className='finger-motion-section-container flex flex-col gap-5'>
            <h1 className='text-3xl md:text-5xl font-semibold text-betatypeDarkBlue text-center'>Fingers motion</h1>
            <div className='flex flex-col gap-5'>
              <p className='text-lg text-betatypeDarkBlue text-justify inline-block'>
                Don't look at the keys when you type. Just slide your fingers around until they find the home row marking.
              </p>
              <p className='text-lg text-betatypeDarkBlue text-justify inline-block'>
                Limit your hand and finger movement only to what is necessary to press a specific key. Keep your hands and fingers close to the base position. This improves typing speed and reduces stress on the hands.
              </p>
              <p className='text-lg text-betatypeDarkBlue text-justify inline-block'>
                Pay attention to ring fingers and little fingers, since they are considerably underdeveloped.
              </p>
            </div>
          </div>

          <div className='typing-speed-section-container'>
            <h1 className='text-3xl md:text-5xl font-semibold text-betatypeDarkBlue text-center'>Typing speed</h1>
            <ul className='list-outside list-disc px-5 leading-10'>
              <li className='text-lg text-betatypeDarkBlue text-opacity-90 text-justify leading-10'>Do not rush when you just started learning. Speed up only when your fingers hit the right keys out of habit.</li>
              <li className='text-lg text-betatypeDarkBlue text-opacity-90 text-justify leading-10'>Take your time when typing to avoid mistakes. The speed will pick up as you progress.</li>
              <li className='text-lg text-betatypeDarkBlue text-opacity-90 text-justify leading-10'>Always scan the text a word or two in advance.</li>
              <li className='text-lg text-betatypeDarkBlue text-opacity-90 text-justify leading-10'>If you're having trouble typing, use a keyboard test to determine if it's a software or hardware issue.</li>
              <li className='text-lg text-betatypeDarkBlue text-opacity-90 text-justify leading-10'>Pass all typing lessons at Ratatype. It will help you to get above the average typing speed.</li>
            </ul>
          </div>

          <div className='test-section-container flex flex-col items-center gap-10'>
            <h1 className='text-3xl md:text-5xl font-semibold text-betatypeDarkBlue text-center'>Hurray!! You are good to go..</h1>
            <Link to={"/typing-test"} type='submit' className='text-center w-full md:w-2/5 text-xl text-betatypeDarkBlue font-medium py-2 rounded-lg transition shadow-button hover:transform hover:-translate-y-1 hover:shadow-button_hover bg-betatypePrimaryYellow border-2 border-betatypeDarkYellow'>Test your speed</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LearnPageComponent
