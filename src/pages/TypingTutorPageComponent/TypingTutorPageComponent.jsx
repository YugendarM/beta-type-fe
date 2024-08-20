// // // import React, { useEffect, useRef, useState } from 'react'
// // // import TypingInterfaceComponent from '../../components/TypingInterfaceComponent/TypingInterfaceComponent'
// // // import TutorTypingInterfaceComponent from '../../components/TutorTypingInterfaceComponent/TutorTypingInterfaceComponent'

// // // const TypingTutorPageComponent = () => {

// // //   const [assessment, setAssessment] = useState("asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj".replaceAll(" ", '\u00A0'))
// // //   const [userInput, setUserInput] = useState("")
// // //   const [isFocus, setIsFocus] = useState(true)
// // //   const [nextKey, setNextKey] = useState("")

// // //   const handleKeyPress = (event) => {
// // //     if (event.key === " ") {
// // //       event.preventDefault() 
// // //       event.target.blur() 
// // //       setUserInput(prevText => prevText + "\u00A0") 
// // //       return 
// // //     }
// // //     if (event.key === "Enter") {
// // //       event.preventDefault() 
// // //       return 
// // //     }
// // //     setUserInput(prevText => prevText + event.key) 
// // //   } 

// // //   useEffect(() => {
// // //     document.addEventListener("keypress", handleKeyPress) 
// // //     setNextKey(assessment[userInput.length])
// // //     return () => {
// // //       document.removeEventListener("keypress", handleKeyPress) 
// // //     } 
// // //   }, [userInput]) 

// // //   return (
// // //     <div className='typing-tutor-page-container flex justify-center'>
// // //       <div className='w-full max-w-[1220px] px-5 md:px-10 flex flex-col items-center gap-5'>
// // //         <div className='typing-test-header-container flex flex-col gap-4'>
// // //           <h1 className='text-3xl md:text-5xl font-semibold text-betatypeDarkBlue text-center'>Typing Tutor</h1>
// // //           <p className='text-xl text-betatypeDarkBlue font-medium text-opacity-90 text-center'>Take up these beginner lessons to get familiarized with touch typing practice.</p>
// // //         </div>

// // //         <div className={`relative typing-interface-container h-[100px] rounded-xl shadow-custom w-full px-2 py-2 overflow-hidden ${!isFocus ? "blur-sm" : ""}`}>
// // //           <TutorTypingInterfaceComponent assessment={assessment} text={userInput}/>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default TypingTutorPageComponent


// // import React, { useEffect, useRef, useState } from 'react' 
// // import TypingInterfaceComponent from '../../components/TypingInterfaceComponent/TypingInterfaceComponent' 
// // import TutorTypingInterfaceComponent from '../../components/TutorTypingInterfaceComponent/TutorTypingInterfaceComponent' 

// // const TypingTutorPageComponent = () => {
// //   const [assessment, setAssessment] = useState(
// //     "asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj"
// //       .replaceAll(" ", '\u00A0')
// //   ) 
// //   const [userInput, setUserInput] = useState("") 
// //   const [isFocus, setIsFocus] = useState(true) 
// //   const [nextKey, setNextKey] = useState("") 
// //   const containerRef = useRef(null)  // Ref for the container div

// //   const handleKeyPress = (event) => {
// //     if (event.key === " ") {
// //       event.preventDefault() 
// //       event.target.blur() 
// //       setUserInput((prevText) => prevText + "\u00A0") 
// //       return 
// //     }
// //     if (event.key === "Enter") {
// //       event.preventDefault() 
// //       return 
// //     }
// //     setUserInput((prevText) => prevText + event.key) 
// //   } 

// //   useEffect(() => {
// //     document.addEventListener("keypress", handleKeyPress) 
// //     setNextKey(assessment[userInput.length]) 

// //     // Scroll the container when the user types
// //     if (containerRef.current) {
// //       const container = containerRef.current 
// //       const lastLetter = container.querySelector('span:last-child') 
// //       if (lastLetter) {
// //         const letterOffset = lastLetter.offsetLeft + lastLetter.offsetWidth 
// //         const containerWidth = container.offsetWidth 
        
// //         if (letterOffset > containerWidth) {
// //           container.scrollLeft = letterOffset - containerWidth 
// //         }
// //       }
// //     }

// //     return () => {
// //       document.removeEventListener("keypress", handleKeyPress) 
// //     } 
// //   }, [userInput]) 

// //   return (
// //     <div className='typing-tutor-page-container flex justify-center'>
// //       <div className='w-full max-w-[1220px] px-5 md:px-10 flex flex-col items-center gap-5'>
// //         <div className='typing-test-header-container flex flex-col gap-4'>
// //           <h1 className='text-3xl md:text-5xl font-semibold text-betatypeDarkBlue text-center'>Typing Tutor</h1>
// //           <p className='text-xl text-betatypeDarkBlue font-medium text-opacity-90 text-center'>
// //             Take up these beginner lessons to get familiarized with touch typing practice.
// //           </p>
// //         </div>

// //         <div 
// //           ref={containerRef} // Attach the ref to the container
// //           className={`relative typing-interface-container h-[100px] rounded-xl shadow-custom w-full px-2 py-2 overflow-hidden ${!isFocus ? "blur-sm" : ""}`}>
// //           <TutorTypingInterfaceComponent assessment={assessment} text={userInput} />
// //         </div>
// //       </div>
// //     </div>
// //   ) 
// // } 

// // export default TypingTutorPageComponent 


// import React, { useEffect, useRef, useState } from 'react' 
// import TutorTypingInterfaceComponent from '../../components/TutorTypingInterfaceComponent/TutorTypingInterfaceComponent' 

// const TypingTutorPageComponent = () => {
//   const [assessment, setAssessment] = useState(
//     "asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj asdf  lkj"
//       .replaceAll(" ", '\u00A0')
//   ) 
//   const [userInput, setUserInput] = useState("") 
//   const [isFocus, setIsFocus] = useState(true) 
//   const [nextKey, setNextKey] = useState("") 
//   const containerRef = useRef(null)  // Ref for the container div

//   const handleKeyPress = (event) => {
//     if (event.key === " ") {
//       event.preventDefault() 
//       event.target.blur() 
//       setUserInput((prevText) => prevText + "\u00A0") 
//       return 
//     }
//     if (event.key === "Enter") {
//       event.preventDefault() 
//       return 
//     }
//     setUserInput((prevText) => prevText + event.key) 
//   } 

//   useEffect(() => {
//     document.addEventListener("keypress", handleKeyPress) 
//     setNextKey(assessment[userInput.length]) 

//     // Scroll the container when the user types
//     if (userInput.length > 5 && containerRef.current) {
//       const container = containerRef.current 
//       const letterOffset = container.scrollWidth / assessment.length 
//       console.log(container.scrollWidth)
//       container.scrollLeft = userInput.length * letterOffset 
//     }

//     return () => {
//       document.removeEventListener("keypress", handleKeyPress) 
//     } 
//   }, [userInput, assessment.length]) 

//   return (
//     <div className='typing-tutor-page-container flex justify-center'>
//       <div className='w-full max-w-[1220px] px-5 md:px-10 flex flex-col items-center gap-5'>
//         <div className='typing-test-header-container flex flex-col gap-4'>
//           <h1 className='text-3xl md:text-5xl font-semibold text-betatypeDarkBlue text-center'>Typing Tutor</h1>
//           <p className='text-xl text-betatypeDarkBlue font-medium text-opacity-90 text-center'>
//             Take up these beginner lessons to get familiarized with touch typing practice.
//           </p>
//         </div>

//         <div 
//           ref={containerRef} // Attach the ref to the container
//           className={`relative typing-interface-container h-[100px] rounded-xl shadow-custom w-full px-2 py-2 overflow-hidden ${!isFocus ? "blur-sm" : ""}`}>
//           <TutorTypingInterfaceComponent assessment={assessment} text={userInput} />
//         </div>
//       </div>
//     </div>
//   ) 
// } 

// export default TypingTutorPageComponent 



import React, { useEffect, useRef, useState } from 'react' 
import TutorTypingInterfaceComponent from '../../components/TutorTypingInterfaceComponent/TutorTypingInterfaceComponent' 
import KeyboardInterfaceComponent from '../../components/KeyboardInterfaceComponent/KeyboardInterfaceComponent'
import hands from "../../assets/hands.svg"
import { AiOutlineAim } from 'react-icons/ai'
import { BiErrorCircle } from "react-icons/bi";
import { Link } from 'react-router-dom'

const TypingTutorPageComponent = () => {
  const [assessment, setAssessment] = useState(
    "asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj "
      .replaceAll(" ", '\u00A0')
  ) 
  const [userInput, setUserInput] = useState("") 
  const [isFocus, setIsFocus] = useState(true)
  const [nextKey, setNextKey] = useState("") 
  const [isHandsVisible, setIsHandsVisible] = useState(true)
  const [isResultVisible, setIsResultVisible] = useState(false)
  const [result, setResult] = useState({
    typos: 0,
    accuracy: 0
  })
  const containerRef = useRef(null)

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
    console.log("typos" + typos)
    console.log("length" + assessment.length)
    console.log("accuracy" + accuracy)
  }

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress) 
    setNextKey(assessment[userInput.length])
    if(userInput.length > 0){
      setIsHandsVisible(false)
    }
    if(userInput.length === assessment.length){
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
  }, [userInput, assessment.length]) 

  return (
    <div className='typing-tutor-page-container flex justify-center min-h-[85vh]'>
      <div className='w-full max-w-[1220px] px-5 md:px-10 flex flex-col items-center gap-5'>
        <div className='typing-test-header-container flex flex-col gap-4'>
          <h1 className='text-3xl md:text-5xl font-semibold text-betatypeDarkBlue text-center'>Typing Tutor</h1>
          <p className='text-xl text-betatypeDarkBlue font-medium text-opacity-90 text-center'>Take up these beginner lessons to get familiarized with touch typing practice.</p>
          <p className='text-xl text-betatypeDarkBlue font-medium text-opacity-90 text-center'>Continue from where you left... <span className='font-bold text-opacity-100'>Lesson : 1</span></p>
        </div>

        <div className={`typing-interface-container rounded-xl shadow-custom w-full px-10 py-2 overflow-hidden flex items-center ${!isFocus ? "blur-sm" : ""}`}>
          <div ref={containerRef} className='overflow-hidden h-[80px] flex items-center'>
            <TutorTypingInterfaceComponent assessment={assessment} text={userInput} />
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
            <h1 className='text-xl md:text-3xl font-semibold text-betatypeDarkBlue text-center'>Hurray! Lesson 1 Completed</h1>

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
              <Link to={"/typing-test"} className='w-1/6 px-10 text-xl text-betatypeDarkBlue font-medium py-2 rounded-lg transition shadow-button text-center hover:transform hover:-translate-y-1 hover:shadow-button_hover bg-betatypePrimaryYellow border-2 border-betatypeDarkYellow'>Try Again</Link>
              <Link to={"/"} className='w-1/6 flex justify-center text-betatypeDarkBlue text-xl font-medium bg-betatypeSecondaryBlue rounded-lg py-2 gap-2 border-2 border-betatypePrimaryBlue shadow-buttonBlue hover:shadow-buttonBlue_hover hover:transform hover:-translate-y-1 transition'>Next</Link>
            </div>
          </div>
          
        }
      </div>
    </div>
  ) 
} 

export default TypingTutorPageComponent 
