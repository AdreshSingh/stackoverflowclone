import LeftSidebar from '../../components/leftSidebar/LeftSidebar'
import RightSidebar from '../../components/rightSidebar/RightSidebar'
import { QuestionDetails } from '../../pages/question/QuestionDetails'

import copy from 'copy-to-clipboard';
import moment from 'moment';

import upvote from '../../assets/sort-up.svg';
import downvote from '../../assets/sort-down.svg';

import './Question.css';
import { DisplayAnswer } from './DisplayAnswer';
import { useState } from 'react';


export function QuestionDetails() {
    const [answer, setAnswer] = useState()
    const questionList = null;
    return (
        <div>
            {
                questionList === null ? (<h1>Loading...</h1>) : (
                    questionList.data.filter((question) => question._id === id).map((question) => (
                        <div key={question._id}>
                            <section className='question-details-container'>
                                <h1>{question.questionTitle}</h1>
                                <div className="question-details-container-2">
                                    <div className='question-votes'>
                                        <img src={upvote} alt='to increase popularity' width={18} className='votes-icon' onClick={handleVote} />
                                        <p>{question.upvote.length}</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    ))
                )
            }
        </div>
    )
}