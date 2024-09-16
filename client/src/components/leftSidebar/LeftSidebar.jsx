import { NavLink } from 'react-router-dom'

import Globe from '../../assets/Globe.svg'
import './LeftSidebar.css'

function LeftSidebar({ slideIn }) {

    const slideInStyle = {
        transfrom: "translateX(0%)"
    }

    const slideOutStyle = {
        transfrom: "translateX(-100%)",
    }

    return (
        <div className="left-sidebar" style={slideIn ? slideInStyle : slideOutStyle}>
            <nav className="side-nav">
                <button className="nav-btn">
                    <NavLink to='/' className={"side-nav-links"} activeClassName="active">
                        <p>Home</p>
                    </NavLink>
                </button>
                <div className="side-nav-div">
                    <p>PUBLIC</p>
                </div>

                <button className='nav-btn'>
                    <NavLink to={'/Questions'} className={"side-nav-links"} activeClassName="active">
                        <img src={Globe} alt="earth svg" />
                        <p style={{ paddingLeft: "10px" }}>Questions</p>
                    </NavLink>
                </button>

                <button className='nav-btn'>
                    <NavLink to={'/Tags'} className={"side-nav-links"} activeClassName="active" style={{ paddingLeft: "40px" }}>
                        <p>Tags</p>
                    </NavLink>
                </button>

                <button className='nav-btn'>
                    <NavLink to={'/Users'} className={"side-nav-links"} activeClassName="active" style={{ paddingLeft: "40px" }}>
                        <p>Questions</p>
                    </NavLink>
                </button>

            </nav>
        </div>
    )
}
export default LeftSidebar