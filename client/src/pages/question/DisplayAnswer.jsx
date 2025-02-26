import LeftSidebar from '../../components/leftSidebar/LeftSidebar'
import RightSidebar from '../../components/rightSidebar/RightSidebar'
import { QuestionDetails } from '../../pages/question/QuestionDetails'

import copy from 'copy-to-clipboard';
import moment from 'moment';

import upvote from '../../assets/sort-up.svg';
import downvote from '../../assets/sort-down.svg';

import './DisplayAnswer.css';
import upvote from '../../assets/sort-up.svg';
export function DisplayAnswer({ slideIn }) {
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