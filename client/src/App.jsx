import { useEffect, useState } from 'react'
import './App.css'

import { BrowserRouter as Router } from 'react-router-dom'

import { Navbar } from './components/navbar/Navbar'
import AllRoutes from './AllRoutes'

function App() {
  const [slideIn, setSlideIn] = useState(true)


  useEffect(() => {
    if (window.innerWidth <= 768) {
      setSlideIn(false)
      console.log("i'm off")
    }
  }, [])


  const handleSlideIn = () => {
    if (window.innerWidth <= 768) {
      setSlideIn((slideIn) => !slideIn)
      console.log(slideIn)
    }
  }

  return (
    <div className='App'>
      {/* <h1>
        Welcome to StackOverflow Clone
      </h1> */}
      <Router>
        <Navbar handleSlideIn={handleSlideIn} />
        <AllRoutes slideIn={slideIn} handleSlideIn={handleSlideIn} />
      </Router>
    </div>
  )
}

export default App
