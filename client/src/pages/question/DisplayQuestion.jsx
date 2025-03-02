import LeftSidebar from '../../components/leftSidebar/LeftSidebar'
import RightSidebar from '../../components/rightSidebar/RightSidebar'


import './Question.css'
import { QuestionDetails } from './QuestionDetails'

export function DisplayQuestion({ slideIn }) {
    return (
        <div className="home-container-1">
            <LeftSidebar slideIn={slideIn} />
            <div className="home-container-2">
                <QuestionDetails />
                <RightSidebar />
            </div>
        </div>
    )
}