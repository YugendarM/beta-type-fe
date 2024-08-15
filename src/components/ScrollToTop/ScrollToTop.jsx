import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {

    const location = useLocation()
    const pathName = location.pathname

    useEffect(() => {
        window.scrollTo(0,0)
    }, [pathName])

  return null
}

export default ScrollToTop
