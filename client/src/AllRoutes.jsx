import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { AskQuestion } from './pages/askquestion/AskQuestion'
import { Auth } from './pages/auth/Auth'
import { AboutAuth } from './pages/auth/AboutAuth'
import { Question } from './pages/question/Question'
import { DisplayQuestion } from './pages/question/DisplayQuestion'
import Tags from './pages/tags/Tags'
import PropTypes from 'prop-types'
import Users from './pages/users/Users'
import UserProfile from './pages/userprofile/UserProfile'

function AllRoutes({ slideIn, handleSlideIn }) {

    return (
        <Routes>
            <Route path='/' element={<Home slideIn={slideIn} handleSlideIn={handleSlideIn} />} />
            <Route path='/AskQuestion' element={<AskQuestion />} />
            <Route path='/Auth' element={<Auth />} />
            <Route path='/AboutAuth' element={<AboutAuth />} />
            <Route path='/Question' element={<Question slideIn={slideIn} handleSlideIn={handleSlideIn} />} />
            <Route path='/Question/:id' element={<DisplayQuestion slidein={slideIn} handleslidein={handleSlideIn} />} />
            <Route path='/Tags' element={<Tags slideIn={slideIn} handleSlideIn={handleSlideIn} />} />
            <Route path='/Users' element={<Users slideIn={slideIn} />} />
            <Route path='/Users/:id' element={<UserProfile slideIn={slideIn} handleSlideIn={handleSlideIn} />} />
        </Routes>)
}


export default AllRoutes

AllRoutes.propTypes = {
    slideIn: PropTypes.bool.isRequired,
    handleSlideIn: PropTypes.func.isRequired,
}