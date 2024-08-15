import React, { useEffect, useState, useRef } from 'react';
import { VscDebugRestart } from "react-icons/vsc";
import TypingInterfaceComponent from '../../components/TypingInterfaceComponent/TypingInterfaceComponent';
import { useTimer } from 'react-timer-hook';
import { useDispatch, useSelector } from 'react-redux';
import { setAttemptReviewData } from '../../redux/testAttempt/testAttemptSlice';
import { useNavigate } from 'react-router-dom';
import KeyboardInterfaceComponent from '../../components/KeyboardInterfaceComponent/KeyboardInterfaceComponent';
import { updateScore } from '../../redux/user/userSlice';

const ONE_MINUTE = 60
const SPEED_WEIGHT = 6
const ACCURACY_WEIGHT = 4

const TypingTestPageComponent = () => {
  const [text, setText] = useState("");
  const [assessment, setAssessment] = useState("The quick brown fox jumps over the lazy dog. This sentence contains every letter in the English alphabet, making it a perfect practice tool for typing. As you type, focus on accuracy and speed. Remember to keep your hands positioned correctly on the keyboard, with your fingers resting on the home row keys. Typing is not just about speed; it is also about precision. Every keystroke should be deliberate and precise. Practice regularly to improve your muscle memory and typing skills. Over time, you will find yourself typing faster and with fewer errors. Stay patient and persistent, and you will see progress. Happy typing. The quick brown fox jumps over the lazy dog. This sentence contains every letter in the English alphabet, making it a perfect practice tool for typing. As you type, focus on accuracy and speed. Remember to keep your hands positioned correctly on the keyboard, with your fingers resting on the home row keys. Typing is not just about speed; it is also about precision. Every keystroke should be deliberate and precise. Practice regularly to improve your muscle memory and typing skills. Over time, you will find yourself typing faster and with fewer errors. Stay patient and persistent, and you will see progress. Happy typing. The quick brown fox jumps over the lazy dog. This sentence contains every letter in the English alphabet, making it a perfect practice tool for typing. As you type, focus on accuracy and speed. Remember to keep your hands positioned correctly on the keyboard, with your fingers resting on the home row keys. Typing is not just about speed; it is also about precision. Every keystroke should be deliberate and precise. Practice regularly to improve your muscle memory and typing skills. Over time, you will find yourself typing faster and with fewer errors. Stay patient and persistent, and you will see progress. Happy typing.".replaceAll(" ", '\u00A0')); // Example assessment
  const [isFocus, setIsFocus] = useState(true)
  const [nextKey, setNextKey] = useState("")

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const containerRef = useRef(null);
  
  const handleKeyPress = (event) => {
    if (event.key === " ") {
      event.preventDefault();
      event.target.blur();
      setText(prevText => prevText + "\u00A0");
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      return;
    }
    setText(prevText => prevText + event.key);
  };

  const scrollToLine = (lineNumber) => {
    const container = containerRef.current;
    const lineHeight = parseFloat(getComputedStyle(container).lineHeight);
    container.scrollTo({
      top: lineHeight * (lineNumber - 4),
      behavior: 'smooth',
    });
  };

  const handleRestart = () => {
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + ONE_MINUTE);
    restart(expiryTimestamp, false)
    setText("")
    setIsFocus(true)
  }

  const handleExpiry = () => {
    const wordsCount = assessment.substring(0, text.length).split("\u00A0").length
    let correctCount = 0;
    text.split("").map((letter, index) => {
      if(letter === assessment.charAt(index)){
        correctCount++;
      }
    })
    const accuracy = Number(((correctCount / text.length) * 100).toFixed(1))
    const betaScore = Number(((wordsCount * SPEED_WEIGHT) + (accuracy * ACCURACY_WEIGHT)).toFixed(0)) 
    dispatch(updateScore({speed:wordsCount, accuracy: accuracy, betaScore: betaScore})) 
    dispatch(setAttemptReviewData({speed: wordsCount, accuracy: Number(accuracy), betaScore: Number(betaScore)}))
    navigate("/typing-test/result")
  }

  const handleFocusBlur = () => {
    if (document.visibilityState === 'hidden' ) {
      setIsFocus(false)
      pause()
    }
  }

  const handleFocus = () => {
    if (document.visibilityState === 'visible') {
      setIsFocus(true)
      resume()
    }
  }

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + ONE_MINUTE); 
  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: handleExpiry ,autoStart: false});

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
    setNextKey(assessment[text.length])
    if(text.length === 1){
      start()
    }

    const currentLine = Math.floor(text.length / 15) + 1;
    if (currentLine >= 1 && currentLine % 4 === 0) {
      scrollToLine(currentLine + 1);
    }
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [text]);

  useEffect(() => {
    window.addEventListener('beforeunload', handleFocusBlur)
    document.addEventListener('visibilitychange', handleFocusBlur);
    return () => {
      window.removeEventListener('beforeunload', handleFocusBlur)
      document.removeEventListener('visibilitychange', handleFocusBlur);
    }
  },[])

  return (
    <div className='typing-test-container flex justify-center h-screen'>
      <div className='w-full max-w-[900px] px-5 md:px-10 flex flex-col gap-1'>
        <div className='typing-test-header-container flex flex-col gap-4'>
          <h1 className='text-3xl md:text-5xl font-semibold text-betatypeDarkBlue text-center'>Typing Test</h1>
          <p className='text-xl text-betatypeDarkBlue font-medium text-opacity-90 text-center'>Take up the 1 min test to determine your speed and accuracy in English typing</p>
        </div>

        <div className='relative'>
          <div ref={containerRef} className={`relative typing-interface-container h-[250px] rounded-xl shadow-custom w-full px-2 py-2 overflow-hidden ${!isFocus ? "blur-sm" : ""}`}>
            <TypingInterfaceComponent assessment={assessment} text={text}/> 
          </div>
          {
              !isFocus && 
              <div className='h-full w-full flex justify-center items-center absolute top-0 z-30'>
                <button onClick={handleFocus} className='px-10 text-xl text-betatypeDarkBlue font-medium py-2 rounded-lg transition shadow-button hover:transform hover:-translate-y-1 hover:shadow-button_hover bg-betatypePrimaryYellow border-2 border-betatypeDarkYellow'>Continue</button>
              </div>
            }
        </div>
        <div className='flex shadow-custom justify-center items-center  text-xl py-2 rounded-md'>
            <p className='font-semibold w-40 text-center'>{minutes}:{seconds}{minutes === 0 ? " sec" : "0min"}</p>
            <button className='flex items-center hover:-translate-y-0.5 transition w-40 text-center focus:outline-none' onClick={handleRestart}><VscDebugRestart />Restart</button>
          </div>

        <div className="keyboard-interface-container h-[200px] w-full ">
          {/* Keyboard interface can be implemented here */}
          <KeyboardInterfaceComponent nextKey={nextKey}/>
        </div>

      </div>
    </div>
  );
};

export default TypingTestPageComponent;


