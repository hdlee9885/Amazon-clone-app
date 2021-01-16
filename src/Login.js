import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="login">
            <Link to="/">

            
            <img className="login-logo"
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'  alt="" />
            </Link>

            <div className='login-container'>
                <h1>Sign in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' />

                    <h5>Password</h5>
                    <input type='password' />

                    <button type='submit' className='login-signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the <strong>AMAZON FAKE CLONE</strong> Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className="login-register">Create your account</button>
            </div>

        </div>
    )
}

export default Login
