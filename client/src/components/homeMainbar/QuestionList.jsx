import { Question } from "./Question"
import { Link } from 'react-router-dom'
import moment from 'moment'

export const QuestionList = ({ questionList }) => {
    return (<div>{
        questionList.map((question) => (
            <Question question={question} key={question._id} />
        ))
    }</div>)
}