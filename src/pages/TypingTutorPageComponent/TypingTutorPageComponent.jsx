import React, { useEffect, useRef, useState } from 'react' 
import TutorTypingInterfaceComponent from '../../components/TutorTypingInterfaceComponent/TutorTypingInterfaceComponent' 
import KeyboardInterfaceComponent from '../../components/KeyboardInterfaceComponent/KeyboardInterfaceComponent'
import hands from "../../assets/hands.svg"
import { AiOutlineAim } from 'react-icons/ai'
import { BiErrorCircle } from "react-icons/bi";
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getLessonData } from '../../redux/lesson/lessonSlice'
import { getUserDetails, updateEducationResult } from '../../redux/user/userSlice'

const TypingTutorPageComponent = () => {
  const [assessment, setAssessment] = useState("") 
  const [userInput, setUserInput] = useState("")
  const [nextKey, setNextKey] = useState("") 
  const [isHandsVisible, setIsHandsVisible] = useState(true)
  const [isResultVisible, setIsResultVisible] = useState(false) 
  const [result, setResult] = useState({
    typos: 0,
    accuracy: 0
  })
  const containerRef = useRef(null)
  const dispatch = useDispatch()
  const lessonData = useSelector((state) => state.lesson.data)
  const userData = useSelector((state) => state.user.data)

  const navigate = useNavigate()

  const handleKeyPress = (event) => {
    if (event.key === " ") {
      event.preventDefault() 
      event.target.blur() 
      setUserInput((prevText) => prevText + "\u00A0") 
      return 
    }
    if (event.key === "Enter") {
      event.preventDefault() 
      return 
    }
    setUserInput((prevText) => prevText + event.key) 
  } 

  const handleLessonComplete = () => {
    let correctCount = 0;
    userInput.split("").map((letter, index) => {
      if(letter === assessment.charAt(index)){
        correctCount++;
      }
    })
    const accuracy = Number(((correctCount / userInput.length) * 100).toFixed(1))
    const typos = assessment.length - correctCount
    setResult({accuracy: accuracy, typos: typos})
    dispatch(updateEducationResult({lesson: lessonData[0].lesson, accuracy: accuracy}))
  }

  const handleLessonInitialize = () => {
    if (lessonData && lessonData[0]?.content) {
      const formattedContent = lessonData[0]?.content.replaceAll(" ", '\u00A0');
      setAssessment(formattedContent);
    }
  }

  const handleNext = () => {
    setIsResultVisible(false)
    dispatch(getUserDetails())
    navigate("/typing-tutor")
    setUserInput("")
    // const nextLesson =  lessonData[0]?.lesson + 1
    // nextLesson && dispatch(getLessonData({lessonNumber: nextLesson}))
  }

  const handleTryAgain = () => {
    setUserInput("")
    setIsResultVisible(false)
    setNextKey(assessment[0])
    setIsHandsVisible(true)
    handleLessonInitialize();
    document.addEventListener("keypress", handleKeyPress);
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
    }
  }

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress) 
    setNextKey(assessment[userInput.length])
    if(userInput.length > 0){
      setIsHandsVisible(false)
    }
    if(assessment.length > 0 && userInput.length === assessment.length){
      document.removeEventListener("keypress", handleKeyPress)
      handleLessonComplete()
      setIsResultVisible(true)
    }
    if (containerRef.current && userInput.length > 3) {
      const container = containerRef.current 
      const letterOffset = container.scrollWidth / assessment.length 
      container.scrollLeft = (userInput.length - 3) * letterOffset 
    }
    return () => {
      document.removeEventListener("keypress", handleKeyPress) 
    } 
  }, [userInput]) 

  const nextLesson =  userData && userData.lessonsCompleted + 1
  useEffect(() => {
     nextLesson && dispatch(getLessonData({lessonNumber: nextLesson}))
  }, [userData])

  useEffect(() => {
    handleLessonInitialize()
  }, [lessonData]);

  return (
    <div className='typing-tutor-page-container flex justify-center min-h-[85vh]'>
      <div className='w-full max-w-[1220px] px-5 md:px-10 flex flex-col items-center gap-5'>
        <div className='typing-test-header-container flex flex-col gap-4'>
          <h1 className='text-3xl md:text-5xl font-semibold text-betatypeDarkBlue text-center'>Typing Tutor</h1>
          <p className='text-xl text-betatypeDarkBlue font-medium text-opacity-90 text-center'>Take up these beginner lessons to get familiarized with touch typing practice.</p>
          <p className='text-xl text-betatypeDarkBlue font-medium text-opacity-90 text-center'>Continue from where you left... <span className='font-bold text-opacity-100'>Lesson : {lessonData && lessonData[0]?.lesson}</span></p>
        </div>

        <div className={`typing-interface-container rounded-xl shadow-custom w-full px-10 py-2 overflow-hidden flex items-center`}>
          <div ref={containerRef} className='overflow-hidden h-[80px] flex items-center w-full'>
            {
              !assessment ? 
              <div className='h-8 bg-gray-200 w-full rounded-md animate-pulse'></div>
              : 
              <TutorTypingInterfaceComponent assessment={assessment} text={userInput} />
            }

          </div>
        </div>

        { !isResultVisible ? 
          <div className='lg:flex flex-col gap-5 py-5 hidden'>
            <p className='text-xl text-betatypeDarkBlue font-medium text-opacity-90 text-center'>Put your fingers on the
                <span className='border border-betatypePrimaryBlue shadow-buttonBlue rounded-md w-7 h-8 inline-block text-center mx-1'>A</span>
                <span className='border border-betatypePrimaryBlue shadow-buttonBlue rounded-md w-7 h-8 inline-block text-center mx-1'>S</span>
                <span className='border border-betatypePrimaryBlue shadow-buttonBlue rounded-md w-7 h-8 inline-block text-center mx-1'>D</span>
                <span className='border border-betatypePrimaryBlue shadow-buttonBlue rounded-md w-7 h-8 inline-block text-center mx-1'>F</span>
                 -
                <span className='border border-betatypePrimaryBlue shadow-buttonBlue rounded-md w-7 h-8 inline-block text-center mx-1'>J</span>
                <span className='border border-betatypePrimaryBlue shadow-buttonBlue rounded-md w-7 h-8 inline-block text-center mx-1'>K</span>
                <span className='border border-betatypePrimaryBlue shadow-buttonBlue rounded-md w-7 h-8 inline-block text-center mx-1'>L</span>
                <span className='border border-betatypePrimaryBlue shadow-buttonBlue rounded-md w-7 h-8 inline-block text-center mx-1'>;</span>
                keys and follow the keys</p>
            
              <div className="keyboard-interface-container h-[200px] w-full relative">
                <KeyboardInterfaceComponent nextKey={nextKey}/>
                <img src={hands} className={`absolute top-20 left-1/2 right-1/2 -translate-x-1/2 w-4/6 ${isHandsVisible ? "block" : "hidden"}`}/>
              </div>
            
          </div>
          : 
          <div className='flex flex-col items-center gap-10 w-full py-6 pb-14'>
            <h1 className='text-xl md:text-3xl font-semibold text-betatypeDarkBlue text-center'>Hurray! Lesson {lessonData[0]?.lesson} Completed</h1>

            <div className='flex items-center gap-10'>
              <div className='speed-container bg-betatypePrimaryPurple flex flex-col items-center w-48 rounded-2xl'>
                <div className='bg-betatypePrimaryDarkPurple w-full rounded-t-2xl'>
                  <p className='text-white text-opacity-80 py-2 flex justify-center items-center gap-1'><BiErrorCircle className='text-2xl'/>Typos</p>
                </div>
                <p className='text-5xl text-white font-medium py-4 flex justify-center items-end'>{result.typos && result.typos}<span className='text-lg text-white font-normal text-opacity-90'>typos</span></p>
              </div>

              <div className='speed-container bg-betatypePrimaryOrange flex flex-col items-center w-48 rounded-2xl'>
                <div className='bg-betatypePrimaryDarkOrange w-full rounded-t-2xl'>
                  <p className='text-white text-opacity-80 py-2 flex justify-center items-center gap-1'><AiOutlineAim className='text-2xl'/>Accuracy</p>
                </div>
                <p className='text-5xl text-white font-medium py-4 flex justify-center items-end'>{result.accuracy && result.accuracy}<span className='text-lg text-white font-normal text-opacity-90'>%</span></p>
              </div>
            </div>

            <div className='flex items-center gap-10 justify-center w-full'>
              <button onClick={handleTryAgain} className='w-1/6 px-10 text-xl text-betatypeDarkBlue font-medium py-2 rounded-lg transition shadow-button text-center hover:transform hover:-translate-y-1 hover:shadow-button_hover bg-betatypePrimaryYellow border-2 border-betatypeDarkYellow'>Try Again</button>
              <button onClick={handleNext} className='w-1/6 flex justify-center text-betatypeDarkBlue text-xl font-medium bg-betatypeSecondaryBlue rounded-lg py-2 gap-2 border-2 border-betatypePrimaryBlue shadow-buttonBlue hover:shadow-buttonBlue_hover hover:transform hover:-translate-y-1 transition'>Next</button>
            </div>
          </div>
          
        }
      </div>
    </div>
  ) 
} 

export default TypingTutorPageComponent 
