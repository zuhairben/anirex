import React, {useState} from 'react'
import './login.css'
import { database } from './FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


function SignUp() {
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value; 

    createUserWithEmailAndPassword(database, email, password).then(data=> {
      console.log(data, "authData")
      history('/login')
    }).catch(err => {
      alert(err.code)
    })
  }

  return (
    <div className="login-page">
      <div className="container">
        <div className="form-box">
          <h1>SignUp</h1>
          <form action='' onSubmit={(e) => handleSubmit(e)}>
            <div className="input-group">
              <div className="input-field">
              <i className="fa-solid fa-user"></i>
              <input type="email"  name="email"  id="email" placeholder='Email'/>
              </div>

              <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input type="password" name="password"  id="password" placeholder='Password'/>
              </div>
            </div>
            <div className="btn-field my-3">
              <button type='submit'>SignUp</button>
            </div>
          </form>
        </div>
      </div>
    </div >

  )
}

export default SignUp
