import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './SignupStyles.css'

function Signup() {

    const[email , setEmail] = useState("")
    const[name , setName] = useState("")
    const[password , setPassword] = useState("")

    const history = useHistory()

    const PostSignupdetails = () => {
        fetch('/signup' , {
            method:"post" ,
            headers: {
                "Content-Type" : "application/json"
            } ,
            body:JSON.stringify({
                name: name ,
                email: email ,
                password: password 
            })
        })
        .then(res=> {
            console.log(res)
        })
        .then(data=> {
            if(data.error) {
                console.log("ganwar hai kya sale?")
            } else {
                history.push('/community')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }


    return (
        <div className="signup-god">
            <div className="signup-father">
                <h1>Signup</h1>
                <div className="signup-email">
                    <label className="label-email" for="name" >Name</label>
                    <input  autoComplete="off" 
                            className="input-email" 
                            name="name" 
                            type="text"
                            value={name} 
                            onChange={e=> setName(e.target.value)}
                            />
                </div>
                <div className="signup-email">
                    <label className="label-email" for="email" >Email</label>
                    <input  autoComplete="off" 
                            className="input-email" 
                            name="email" 
                            type="text" 
                            value={email}
                            onChange={e=> setEmail(e.target.value)}
                            />
                </div>
                <div className="signup-email">
                    <label for="password" >Password</label>
                    <input  autoComplete="off" 
                            name="password" 
                            type="password"
                            value={password}
                            onChange={e=> setPassword(e.target.value)}
                             />
                </div>
                <div className="signup-buttons">
                    <button type="submit"
                            onClick={ () => PostSignupdetails() }
                            >signup</button>
                    <Link id="signup-link" to="/login"><p>Already have an account ? Login Here.</p></Link>
                </div>
                
            </div>
            <div className="signup-mother"></div>
        </div>
    )
}

export default Signup
