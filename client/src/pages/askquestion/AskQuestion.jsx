
import { useNavigate } from 'react-router-dom'
import './AskQuestion.css'
import { useState } from 'react';

export function AskQuestion() {

    const navigate = useNavigate();
    const user = 1;

    const [questionTitle, setQuestionTitle] = useState('')
    const [questionBody, setQuestionBody] = useState('')
    const [questionTags, setQuestionTags] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user) {
            if (questionTitle && questionBody && questionTitle) {
                alert("you have successfully posted a question")
            } else {
                alert("Please enter all the field")
            }
        }
    }

    const handleEnter = (e) => {
        if (e.code == "Enter") {
            setQuestionBody(questionBody + "\n")
        }
    }

    return (
        <div className='ask-question'>
            <div className="ask-ques-container">
                <h1>Ask a public Question</h1>
                <form onSubmit={handleSubmit}>
                    <div className='ask-form-container'>
                        <label htmlFor="ask-ques-title">
                            <h4>Title</h4>
                            <p>Be specific and imagine you're asking a question from another person</p>
                            <input
                                type="text"
                                id='ask-ques-title'
                                onChange={(e) => { setQuestionTitle(e.target.value) }}
                                placeholder='e.g. Is there an R function for finding the index of an element in a vector?'
                            />
                        </label>
                        <label htmlFor='ask-ques-body'>
                            <h4>Body</h4>
                            <p>Include all the information someone would need to answer</p>
                            <textarea name=''
                                id='ask-ques-body'
                                onChange={(e) => { setQuestionBody(e.target.value) }}
                                onKeyDown={handleEnter}
                                cols={"30"}
                                rows={'10'}
                            >
                            </textarea>
                        </label>
                        <label htmlFor='ask-ques-tags'>
                            <h4>Tags</h4>
                            <p>Add up to 5 tags to describe what your question is about </p>
                            <input
                                type="text"
                                className='ask-ques-tags'
                                onChange={(e) => { setQuestionTags(e.target.value.split(" ")) }}
                                placeholder='e.g. xml typescript wordpress'
                            />
                        </label>
                    </div>
                    <input type="submit" value="Review your question" className='review-btn' />
                </form>
            </div>
        </div>
    )
}