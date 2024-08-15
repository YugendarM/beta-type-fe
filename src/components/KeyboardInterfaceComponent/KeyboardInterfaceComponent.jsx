import React from 'react'
import KeyComponent from '../KeyComponent/KeyComponent'

const KeyboardInterfaceComponent = ({nextKey}) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='keyboard-row1-container'>
        <KeyComponent group={"gray"} keyLabel={"`"} nextKey={nextKey}/>
        <KeyComponent group={"purple"} keyLabel={"1"} nextKey={nextKey}/>
        <KeyComponent group={"purple"} keyLabel={"2"} nextKey={nextKey}/>
        <KeyComponent group={"green"} keyLabel={"3"} nextKey={nextKey}/>
        <KeyComponent group={"red"} keyLabel={"4"} nextKey={nextKey}/>
        <KeyComponent group={"blue"} keyLabel={"5"} nextKey={nextKey}/>
        <KeyComponent group={"blue"} keyLabel={"6"} nextKey={nextKey}/>
        <KeyComponent group={"yellow"} keyLabel={"7"} nextKey={nextKey}/>
        <KeyComponent group={"red"} keyLabel={"8"} nextKey={nextKey}/>
        <KeyComponent group={"orange"} keyLabel={"9"} nextKey={nextKey}/>
        <KeyComponent group={"green"} keyLabel={"0"} nextKey={nextKey}/>
        <KeyComponent group={"green"} keyLabel={"-"} nextKey={nextKey}/>
        <KeyComponent group={"green"} keyLabel={"="} nextKey={nextKey}/>
        <KeyComponent group={"gray"} keyLabel={"<-"} nextKey={nextKey}/>
      </div>

      <div className='keyboard-row2-container'>
        <KeyComponent group={"gray"} keyLabel={"TAB"} nextKey={nextKey}/>
        <KeyComponent group={"purple"} keyLabel={"Q"} nextKey={nextKey}/>
        <KeyComponent group={"red"} keyLabel={"W"} nextKey={nextKey}/>
        <KeyComponent group={"green"} keyLabel={"E"} nextKey={nextKey}/>
        <KeyComponent group={"blue"} keyLabel={"R"} nextKey={nextKey}/>
        <KeyComponent group={"blue"} keyLabel={"T"} nextKey={nextKey}/>
        <KeyComponent group={"yellow"} keyLabel={"Y"} nextKey={nextKey}/>
        <KeyComponent group={"yellow"} keyLabel={"U"} nextKey={nextKey}/>
        <KeyComponent group={"red"} keyLabel={"I"} nextKey={nextKey}/>
        <KeyComponent group={"orange"} keyLabel={"O"} nextKey={nextKey}/>
        <KeyComponent group={"green"} keyLabel={"P"} nextKey={nextKey}/>
        <KeyComponent group={"green"} keyLabel={"["} nextKey={nextKey}/>
        <KeyComponent group={"green"} keyLabel={"]"} nextKey={nextKey}/>
        <KeyComponent group={"gray"} keyLabel={"|"} nextKey={nextKey}/>
      </div>

      <div className='keyboard-row2-container'>
        <KeyComponent group={"gray"} keyLabel={"CAPS"} nextKey={nextKey}/>
        <KeyComponent group={"purple"} keyLabel={"A"} nextKey={nextKey}/>
        <KeyComponent group={"green"} keyLabel={"S"} nextKey={nextKey}/>
        <KeyComponent group={"red"} keyLabel={"D"} nextKey={nextKey}/>
        <KeyComponent group={"blue"} keyLabel={"F"} nextKey={nextKey}/>
        <KeyComponent group={"blue"} keyLabel={"G"} nextKey={nextKey}/>
        <KeyComponent group={"yellow"} keyLabel={"H"} nextKey={nextKey}/>
        <KeyComponent group={"yellow"} keyLabel={"J"} nextKey={nextKey}/>
        <KeyComponent group={"red"} keyLabel={"K"} nextKey={nextKey}/>
        <KeyComponent group={"orange"} keyLabel={"L"} nextKey={nextKey}/>
        <KeyComponent group={"green"} keyLabel={";"} nextKey={nextKey}/>
        <KeyComponent group={"green"} keyLabel={"'"} nextKey={nextKey}/>
        <KeyComponent group={"gray"} keyLabel={"ENTER"} nextKey={nextKey}/>
      </div>

      <div className='keyboard-row2-container'>
        <KeyComponent group={"gray"} keyLabel={"SHIFT"} nextKey={nextKey}/>
        <KeyComponent group={"purple"} keyLabel={"Z"} nextKey={nextKey}/>
        <KeyComponent group={"green"} keyLabel={"X"} nextKey={nextKey}/>
        <KeyComponent group={"red"} keyLabel={"C"} nextKey={nextKey}/>
        <KeyComponent group={"blue"} keyLabel={"V"} nextKey={nextKey}/>
        <KeyComponent group={"blue"} keyLabel={"B"} nextKey={nextKey}/>
        <KeyComponent group={"yellow"} keyLabel={"N"} nextKey={nextKey}/>
        <KeyComponent group={"yellow"} keyLabel={"M"} nextKey={nextKey}/>
        <KeyComponent group={"red"} keyLabel={","} nextKey={nextKey}/>
        <KeyComponent group={"orange"} keyLabel={"."} nextKey={nextKey}/>
        <KeyComponent group={"green"} keyLabel={"/"} nextKey={nextKey}/>
        <KeyComponent group={"gray"} keyLabel={"SHIFT"} nextKey={nextKey}/>
      </div>

      <div className='keyboard-row2-container'>
        <KeyComponent group={"gray"} keyLabel={"\u00A0"} nextKey={nextKey}/>
      </div>
      
    </div>
  )
}

export default KeyboardInterfaceComponent
