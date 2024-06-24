import React from 'react';
import './login.css';

const Login = () => {

  const logInWithGoogle = () => {
    window.open("http://localhost:9000/auth/google/callback", "_self")
  }
  return (
    <div className='login-page'>
    <h1 style={{textAlign: "center"}}> Login </h1>
    <div className='form'>
        <form className='login-form'>
          <input type='email' name='' id='' placeholder='Email'></input>
          <input type='password' name='' id='' placeholder='Password'></input>
          <button>Login</button>
          <p className='message'>Not Registerd? <a href='/'>Create an account</a></p>

        </form>

        <button className='login-with-google-btn' onClick={logInWithGoogle}> 
          Sign In With Google
        </button>
    </div>
  </div>
  )
}

export default Login