import { Link } from 'react-router-dom'
import { } from 'react-redux'

import './Navbar.css'
import bars from '../../assets/bars-solid.svg'
import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import { Avatar } from '../avatar/Avatar'

export const Navbar = () => {

    const User = null;

    return (
        <nav className="main-nav">

            <div className="navbar">
                <button className='slide-in-icon'>
                    <img src={bars} width={15} />
                </button>

                <div className="navbar-1">
                    <Link to={'/'} className='nav-item nav-logo'>
                        <img src={logo} alt="" />
                    </Link>
                    <Link to={'/'} className="nav-item nav-btn res-nav">
                        About
                    </Link>
                    <Link to={'/'} className="nav-item nav-btn res-nav">
                        Products
                    </Link>
                    <Link to={'/'} className="nav-item nav-btn res-nav">
                        For Products
                    </Link>
                    <form>
                        <input type="text" placeholder='Search...' />
                        <img src={search} alt="" width={18} className='search-icon' />
                    </form>
                </div>

                <div className="navbar-2">
                    {User === null ?
                        (<Link to={'/'} className='nav-item nav-links'>Login</Link>) :
                        (<>
                            <Avatar
                                backgroundcolor={"#009dff"}
                                px={"10"}
                                py={"7"}
                                borderRadius={"50%"}
                                color={"white"}>
                                <Link to={'/'} style={{ color: "white", textDecoration: "none" }} ></Link>
                            </Avatar>
                            <button className='nav-items nav-links'></button>
                        </>)
                    }
                </div>

            </div>
        </nav >
    )
}