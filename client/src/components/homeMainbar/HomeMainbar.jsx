import { useLocation, useNavigate } from 'react-router-dom'

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

    const questionList = {
        data: [
            {
                "_id": "q1",
                "questiontitle": "How to implement a binary search algorithm in Python?",
                "questionbody": "I am trying to implement binary search algorithm in Python but i am stuck. Can someone provide example of it.",
                "questiontags": ["Python", "Algorithms", "Binary Search"],
                "noofanswers": 2,
                "upvote": ["user1", "user2"],
                "downvote": ["user789"],
                "userposted": "codenewbie",
                "userid": "u12345",
                "askedon": "2024-06-10T12:00:02",
                "answer": [{
                    "answerbody": "Here's a simple example of a binary search algorithm in Python",
                    "useranswered": "algoExpert",
                    "userid": "u67890",
                    "answeredon": "2024-06-11T12:00:02",
                },
                {
                    "answerbody": "To add to the previous answer, remember that the array needs to be sorted for binary search",
                    "useranswered": "techGuru",
                    "userid": "u11223",
                    "answeredon": "2024-06-15T12:00:02",
                }]
            }
        ]
    }
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