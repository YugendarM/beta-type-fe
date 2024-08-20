import React from "react" 

const TypingInterfaceComponent = ({assessment, text}) => {
    let userTextIndex = 0 
  
    return assessment.split('\u00A0').map(word => word.trimEnd() + '\u00A0').map((word, wordIndex) => {
      const wordParts = word.split("") 
  
      return (
        <div key={wordIndex} className='inline-block py-1.5'>
          {wordParts.map((letter, letterIndex) => {
            const currentAssessmentLetter = assessment[userTextIndex] || ''
            const userLetter = text[userTextIndex] || ''
  
            let spanClass = 'text-3xl font-medium px-[2px] py-[1px] mx-0.5 font-mono'
  
            if (userTextIndex < text.length) {
              if (userLetter === currentAssessmentLetter) {
                spanClass += ' text-green-500'
              } else if (userLetter !== currentAssessmentLetter) {
                spanClass += ' bg-red-100 text-red-500 rounded-md' 
              }
            }
  
            // cursor bottom border
            if (userTextIndex === text.length) {
              spanClass += ' border-b-4 border-blue-500' 
            }
  
            userTextIndex++ 
  
            return (
              <span className={spanClass} key={letterIndex}>
                {letter}
              </span>
            )
          })}
        </div>
      ) 
    }) 
  } 

export default TypingInterfaceComponent
  