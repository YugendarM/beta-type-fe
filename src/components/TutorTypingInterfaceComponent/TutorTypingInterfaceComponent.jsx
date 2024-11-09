import React from "react";

const TutorTypingInterfaceComponent = ({ assessment, text }) => {
  return (
    <div className="relative w-full whitespace-nowrap hover:cursor-default ">
      {assessment && assessment.split("").map((letter, index) => {
        const userLetter = text[index] || "";

        let spanClass = 'text-3xl font-semibold px-[2px] py-[1px] mx-0.5 font-mono';

        // Highlight correct and incorrect letters
        if (userLetter === letter) {
          spanClass += ' text-green-500'; // Correct letters in green
        } else if (userLetter !== letter && text.length > index) {
          spanClass += ' bg-red-100 text-red-500 rounded-md'; // Incorrect letters in red
        }

        // Add cursor-like bottom border for the next letter
        if (text.length === index) {
          spanClass += ' border-b-4 border-blue-500'; // Cursor-like bottom border
        }

        return (
          <span className={spanClass} key={index}>
            {letter}
          </span>
        );
      })}
    </div>
  );
};

export default TutorTypingInterfaceComponent;
