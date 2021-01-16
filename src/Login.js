import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const signIn = e => {
        e.preventDefault();
        // firebase login here
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                // successfully signed in
                history.push('/')
            }).catch(err => alert(err.message))

    } 

    const register = e => {
        e.preventDefault();
        // firebase register here
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // successfully signed up
                console.log(auth)
                if (auth) {
                    // redirect when signed up
                    history.push('/')
                }
            }).catch(err => alert(err.message))
    } 

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
                    <input type='text' 
                            value={email} 
                            onChange={e => setEmail(e.target.value)} 
                    />

                    <h5>Password</h5>
                    <input type='password' 
                            value={password} 
                            onChange={e => setPassword(e.target.value)}
                    />

                    <button 
                        type='submit' 
                        onClick={signIn}
                        className='login-signInButton'>
                        Sign In
                    </button>
                </form>

                <p>
                    By signing-in you agree to the <strong>AMAZON FAKE CLONE</strong> Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button 
                    onClick={register}
                    className="login-register">
                    Create your account
                </button>
            </div>

        </div>
    )
}

export default Login
