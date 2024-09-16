import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router } from 'react-router-dom'

import { Navbar } from './components/navbar/Navbar'
import AllRoutes from './AllRoutes'

function App() {
  const [slideIn, setSlideIn] = useState(true)


  useEffect(() => {
    if (window.innerWidth <= 768) {
      setSlideIn(false)
    }
  }, [])


  const handleSlideIn = () => {
    if (window.innerWidth <= 768) {
      setSlideIn((state) => !state)
    }
  }

  return (
    <div className='App'>
      <h1>
        Welcome to StackOverflow Clone
      </h1>
      <Router>
        <Navbar slideIn={handleSlideIn} />
        <AllRoutes slideIn={slideIn} handleSlideIn={handleSlideIn} />
      </Router>
    </div>
  )
}

export default App
