import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent/NavbarComponent'
import FooterComponent from './components/FooterComponent/FooterComponent'

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavbarComponent/>
        <FooterComponent/>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
