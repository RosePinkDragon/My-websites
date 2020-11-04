import React, { useState } from 'react'
import './styles/Login.css'
import { Link, useHistory } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './Firebase'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (e) => {
        e.preventDefault()
        //do the login logic
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) =>{
            //logged in redirect
            history.push("/")
        })
        .catch(e => alert(e.message));
    }

    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            //created user and loged in, redirect

            history.push("/")
        })
        .catch(e => alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/">
            <img
                    className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="something you should see" />
            </Link>
            <div className="login_container">
                
                <form>
                    <h5>E-mail</h5>
                    <input value={email}  onChange={e => setEmail(e.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password"/>
                    <button className="login_signInBtn" onClick={login}>Sign In</button>
                </form>
                <p>
                    By signing-in you afree to Amazon's conditons of Use and Sale. Please see our privacy Notice, our cookies notice and our Internet based Ads Notice.
                </p>
                <button className="login_registerBtn" onClick={register}>Create your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login
