import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/Home'

function AllRoutes({ slideIn, handleSlideIn }) {

    return (
        <Routes>
            <Route path='/' element={<Home slideIn={slideIn} handleSlideIn={handleSlideIn} />} />
        </Routes>)
}
export default AllRoutes