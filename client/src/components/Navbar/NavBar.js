import React from 'react'
import { Link } from 'react-router-dom';
import { useSpring , animated } from 'react-spring';
import './NavbarStyles.css'

function NavBar() {

    const fade = useSpring({ opacity: 1 , from : {opacity:0} } )

    return (
        <animated.nav className="nav-bar" style={fade}>
            <ul className="nav-ul">
                <li><Link className="nav-link" to="/signup">Signup</Link></li>
                <li><Link className="nav-link" to="/login">Community</Link></li>
                <li><Link className="nav-link" to="/resume">Resume</Link></li>
                <li><Link className="nav-link" to="/ecommerce">E Commerce</Link></li>
                <li><Link className="nav-link" to="/elearning">E Learning</Link></li>
                <li><Link className="nav-link" to="/about">About</Link></li>
                <li><Link className="nav-link" to="/">Home</Link></li>


            </ul>
        </animated.nav>
    )
}

export default NavBar
