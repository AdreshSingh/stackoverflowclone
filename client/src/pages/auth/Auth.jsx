

import { AboutAuth } from './AboutAuth'
import icon from '../../assets/icon.png'
import './Auth.css';
import { useState } from 'react';


export function Auth() {

    const [isSignup, setIsSignup] = useState(false)
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email && !password) {
            alert("Enter email and password")
        }

        if (isSignup) {
            if (!name) {
                alert("Enter a name to continue")
                console.log({ email, password, name })
            } else {
                console.log({ email, password })
            }
        }
    }

    const handleSwitch = () => {
        setIsSignup(!isSignup);
        setName("");
        setEmail("");
        setPassword("");
    }

    return (
        <section className="auth-section">
            {isSignup && <AboutAuth />}
            <div className='auth-container-2'>
                <img src={icon} alt='icon' className='login-logo' />
                <form onSubmit={handleSubmit}>
                    {
                        isSignup && (
                            <label htmlFor='name'>
                                <h4>Display Name</h4>
                                <input type="text" id='name' name="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                            </label>
                        )
                    }
                    <label htmlFor='email'>
                        <h4>Display Name</h4>
                        <input type="text" id='email' name="email" value={email} onChange={(e) => { setName(e.target.value) }} />
                    </label>
                    <label htmlFor='password'>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h4>
                                Password
                            </h4>
                            {isSignup && (
                                <p style={{ color: "#007ac6", fontSize: "13px" }}>Forgot Password</p>
                            )}
                        </div>
                        <input type="text" name='password' id='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </label>
                    <button type='submit' className='auth-btn'>{isSignup ? "Sign up" : "Log In"}</button>
                </form>
                <p>{isSignup ? "Already have an account" : "Don't have an account"}
                    <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{
                        isSignup ? "Log in" : "Sign up"
                    }</button>
                </p>
            </div>

        </section>
    )
}