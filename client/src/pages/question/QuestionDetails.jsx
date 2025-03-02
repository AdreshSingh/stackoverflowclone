import { useState } from 'react';

import upvote from '../../assets/sort-up.svg';
import downvote from '../../assets/sort-down.svg';

import copy from 'copy-to-clipboard';
import moment from 'moment';


import './Question.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Avatar } from '../../components/avatar/Avatar';

import { DisplayAnswer } from './DisplayAnswer'

export function QuestionDetails() {
    const [answer, setAnswer] = useState()
    const navigate = useNavigate()
    const { id } = useParams()
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
    const user = null;
    const url = "http://localhost:5173";

    const handlepostans = (e, answerLength) => {
        e.preventDefault()
        if (user === null) {
            alert("Login or SignUp to answer a question")
            navigate("/Auth")
        } else {
            if (answer == "") {
                alert("Enter an answer before submitting")
            } else {
                setAnswer("");
            }
        }
    }

    const handleShare = () => {
        copy(url + location.pathname);
        alert("Copied url " + url + location.pathname)
    }

    const handleDelete = () => {

    }

    const handleDownVote = () => {
        if (user === null) {
            alert("Login or SignUp to answer a question")
            navigate("/Auth")
        }
    }

    const handleUpVote = () => {
        if (user === null) {
            alert("Login or SignUp to answer a question")
            navigate("/Auth")
        }
    }
    return (
        <div className='question-details-page'>
            {
                questionList === null ? (<h1>Loading...</h1>) : (
                    questionList.data.filter((question) => question._id === id).map((question) => (
                        <div key={question._id}>
                            <section className='question-details-container'>
                                <h1>{question.questionTitle}</h1>
                                <div className="question-details-container-2">
                                    <div className='question-votes'>
                                        <img src={upvote} alt='to increase popularity' width={18} className='votes-icon' onClick={handleUpVote} />
                                        <p>{question.upvote.length - question.downvote.length}</p>

                                        <img src={downvote} alt='to decrease popularity' width={18} className='votes-icon' onClick={handleDownVote} />
                                    </div>
                                    <div style={{ width: "100%" }}>
                                        <p className="question-body">
                                            {question.questionbody}
                                        </p>
                                        <p className="details tags">
                                            {
                                                question.questiontags.map((tag) => (<p key={tag}>{tag}</p>))
                                            }
                                        </p>
                                        <div className="question-actions-user">
                                            <button className='button' onClick={handleShare}>Share</button>
                                            {
                                                user?.result?._id === question.userid && (
                                                    <button type='button' onClick={handleDelete}>Delete</button>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        Asked {moment(question.askedon).fromNow()}
                                        <Link to={`/Users/${question.userid}`} className='user-link' style={{ color: "#0086d8" }}>
                                            <Avatar backgroundcolor={'orange'} px={'8px'} py={'5px'} borderRadius={'4px'}>
                                                {question.userposted.charAt(0).toUpperCase()}
                                            </Avatar>
                                            <div>{question.userposted}</div>
                                        </Link>
                                    </div>
                                </div>
                            </section>

                            {question.noofanswer != 0 && (
                                <section>
                                    <h3>{question.noofanswer}</h3>
                                    <DisplayAnswer key={question._id} handleShare={handleShare} />
                                </section>
                            )}

                            <section className='post-ans-container'>
                                <h3>Your Answer</h3>
                                <form onSubmit={(e) => { handlepostans(e, question.answer.length) }}>
                                    <textarea name="" id="" cols={30} rows={10} value={answer}
                                        onChange={(e) => (setAnswer(e.target.value))}></textarea>
                                    <input type="submit" className='post-ans-btn' value={"Post your answer"} />
                                </form>
                                <p>Browse other Question tagged</p>
                                {question.questiontags.map((tag) => (
                                    <Link to={'/tags'} key={tag} className='ans-tag'>
                                        {" "} {tag}{" "}
                                    </Link>
                                ))} or
                                <Link to={"/AskQuestion"} style={{ textDecoration: "none", color: "#009dff" }}>
                                    {" "}
                                    Ask own your question
                                </Link>
                            </section>
                        </div>
                    ))
                )
            }
        </div>
    )
}