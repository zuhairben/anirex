import React, { useState } from 'react'
import './login.css'
import { database } from './FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {

  const history = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value; 

    signInWithEmailAndPassword(database, email, password).then(data=> {
      console.log(data, "authData")
      history('/homeanime')
    }).catch(err => {
      alert(err.code)
    })
  }

  return (
    <div className="login-page">
      <div className="container">
        <div className="form-box">
          <h1>Login</h1>
          <form action='' onSubmit={(e) => handleLogin(e)}>
            <div className="input-group">
              <div className="input-field">
                <i className="fa-solid fa-user"></i>
                <input type="email"  name="email"  id="email" placeholder='Email'/>
              </div>

              <div className="input-field">
                <i className="fa-solid fa-lock"></i>
                <input type="password"  name="password"  id="password" placeholder='Password'/>
              </div>
            </div>
            <div className="btn-field my-3">
              <button type='submit'>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div >

  )
}

export default Login
