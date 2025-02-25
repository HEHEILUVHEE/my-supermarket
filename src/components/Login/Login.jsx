import React, { useState } from 'react'
import './Login.css'
import { RxCross2 } from "react-icons/rx";

const Login = ({ setShowLogin }) => {

    const [currState, setCurrState] = useState("Login")

    return (


        <div className='login-popup'>
            <form action="" className="login-popup-container">
                <div className="login-popup-title">

                    <h2>{currState}</h2>
                    <RxCross2 onClick={() => setShowLogin(false)} />

                </div>

                <div className='login-popup-inputs'>
                    {currState === "Login" ? <></> : <input type="text" placeholder='Your name' required />}
                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='Your Password' required />
                </div>
                <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>  login ให้สำเร็จสิไอเปรต </p>
                </div>
                {currState==="Login"
                ?<p> Create a new account? <span onClick={()=>setCurrState("Sign up")}>Click here</span> </p>
                : <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
                }
                
               
            </form>
        </div>
    )
}

export default Login