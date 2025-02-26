import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './HomeMainBar.css'
import { QuestionList } from './QuestionList';

function HomeMainbar() {
    const user = 1;
    const location = useLocation()

    const navigate = useNavigate();

    //? responsible for auth navigation
    const checkAuth = () => {
        if (user === null) {
            alert("login or signup to ask a question")
            navigate("/Auth")
        } else {
            navigate("/AskQuestion")
        }
    }

    const questionList = null;
    return (
        <div className='main-bar'>
            <div className="main-bar-header">
                {

                    location.pathname === "/" ? (<h1>Top Questions</h1>) : (<h1>All Questions</h1>)
                }
                <button className='ask-btn' onClick={checkAuth}>Ask Question</button>
            </div>
            <div>
                {
                    questionList === null ? (
                        <h1>Loading......</h1>
                    ) : (
                        <>
                            <p>{questionList?.length} questions</p>
                            <QuestionList questionList={questionList?.data} />
                        </>
                    )
                }
            </div>
        </div>)
}
export default HomeMainbar