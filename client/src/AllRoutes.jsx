import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { AskQuestion } from './pages/askquestion/AskQuestion'
import { Auth } from './pages/auth/Auth'
import { AboutAuth } from './pages/auth/AboutAuth'
import { Question } from './pages/question/Question'
import { DisplayAnswer } from './pages/question/DisplayAnswer'

function AllRoutes({ slideIn, handleSlideIn }) {

    return (
        <Routes>
            <Route path='/' element={<Home slideIn={slideIn} handleSlideIn={handleSlideIn} />} />
            <Route path='/AskQuestion' element={<AskQuestion />} />
            <Route path='/Auth' element={<Auth />} />
            <Route path='/AboutAuth' element={<AboutAuth />} />
            <Route path='/Question' element={<Question slideIn={slideIn} handleSlideIn={handleSlideIn} />} />
            <Route path='/Question:id' element={<DisplayAnswer slideIn={slideIn} handleSlideIn={handleSlideIn} />} />
        </Routes>)
}
export default AllRoutes