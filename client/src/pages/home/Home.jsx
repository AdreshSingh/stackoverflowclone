
import LeftSidebar from '../../components/leftSidebar/LeftSidebar'
import RightSidebar from '../../components/rightSidebar/RightSidebar'
import HomeMainbar from '../../components/homeMainbar/HomeMainbar'

import '../../App.css'

export const Home = ({ slideIn }) => {
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