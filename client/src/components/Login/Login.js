import React from 'react'
import { useSpring , animated } from 'react-spring'
import './LoginStyles.css'

const Login = ()=> {

const fade = useSpring({ opacity: 1 , from : {opacity:0} } )


    return(
        <div className="father">
        <animated.h1 className="login" style={fade}>Login</animated.h1>
       
        <input className="son-first" type="text" required />
        <label id="son-first" className="username" for="son-first"><span className="content-username">Username</span></label>
        
        <input className="son-second" type="password" required />
        <label id="son-second" for="son-second"><span className="content-password">Password</span></label>
        
        <animated.button className="son-third" style={fade}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            submit</animated.button>
        </div>
    )
}
export default Login