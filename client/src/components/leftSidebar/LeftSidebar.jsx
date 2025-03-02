import { NavLink } from 'react-router-dom'

import Globe from '../../assets/Globe.svg'
import './LeftSidebar.css'

function LeftSidebar({ slideIn }) {

    const slideInStyle = {
        transform: "translateX(0%)",
    }

    const slideOutStyle = {
        transform: "translateX(-100%)",
    }

    return (
        <div className="left-sidebar" style={slideIn ? slideInStyle : slideOutStyle}>
            <nav className="side-nav">
                <button className="nav-btn">
                    <NavLink to='/' className={"side-nav-links"} >
                        <p>Home</p>
                    </NavLink>
                </button>
                <div className="side-nav-div">
                    <p>PUBLIC</p>
                </div>

                <button className='nav-btn'>
                    <NavLink to={'/Question'} className={"side-nav-links"} >
                        <img src={Globe} alt="earth svg" />
                        <p style={{ paddingLeft: "10px" }}>Questions</p>
                    </NavLink>
                </button>

                <button className='nav-btn'>
                    <NavLink to={'/Tags'} className={"side-nav-links"} style={{ paddingLeft: "40px" }}>
                        <p>Tags</p>
                    </NavLink>
                </button>

                <button className='nav-btn'>
                    <NavLink
                        to={'/Users'}
                        className={"side-nav-links"}
                        style={{ paddingLeft: "40px" }}>
                        <p>Users</p>
                    </NavLink>
                </button>

            </nav>
        </div>
    )
}
export default LeftSidebar