import React , { useState } from 'react'
import './LoginStyles.css'
import { Link, useHistory } from 'react-router-dom'

const Login = ()=> {

    const[email , setEmail] = useState("")
    const[password , setPassword] = useState("")

    const history = useHistory()

    const PostLogindetails = () => {
        fetch('/login' , {
            method:"post" ,
            headers: {
                "Content-Type" : "application/json"
            } ,
            body:JSON.stringify({
                email: email ,
                password: password 
            })
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.error) {
                console.log("galat fehmi hai bhai !")
            } else{
                history.push('/community')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }


    return(
        <div className="login-god">
            <div className="login-father">
                <h1>Login</h1>
                <div className="login-email">
                    <label className="label-email" for="email" >Email</label>
                    <input  autoComplete="off" 
                            className="input-email" 
                            name="email" 
                            type="text" 
                            value={email} 
                            onChange={e=> setEmail(e.target.value)}
                            />
                </div>
                <div className="login-email">
                    <label for="password" >Password</label>
                    <input  autoComplete="off" 
                            name="password" 
                            type="password" 
                            value={password} 
                            onChange={e=> setPassword(e.target.value)}
                            />
                </div>
                <div className="login-buttons">
                    <button type="submit"
                            onClick={ () => PostLogindetails() }
                            >Login</button>
                    <Link id="login-link" to="/Signup"><p>Don't have an account ? Sign up here.</p></Link>
                </div>
                
            </div>
            <div className="login-mother"></div>
        </div>
    )
}
export default Login