import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent/NavbarComponent'

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavbarComponent/>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
