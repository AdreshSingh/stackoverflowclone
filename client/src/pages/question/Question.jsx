import LeftSidebar from '../../components/leftSidebar/LeftSidebar'
import RightSidebar from '../../components/rightSidebar/RightSidebar'
import HomeMainbar from '../../components/homeMainbar/HomeMainbar'

import './Question.css'

export function Question({ slideIn }) {
    return (
        <div className="home-container-1">
            <LeftSidebar slideIn={slideIn} />
            <div className="home-container-2">
                <HomeMainbar />
                <RightSidebar />
            </div>
        </div>
    )
}