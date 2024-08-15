import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent/NavbarComponent'
import FooterComponent from './components/FooterComponent/FooterComponent'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ScrollToTop/>
        <NavbarComponent/>
        <FooterComponent/>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
