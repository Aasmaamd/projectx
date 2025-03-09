import React from 'react'
import './CSS/loginsignup.css'

const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <h1>Sign Up</h1>
      <div className="entries">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
      </div>
      <div className="btn">
        <button>Continue</button>
      </div>
      <p>Already have an account? <span className="login-link">Login here</span></p>
      <label className="terms">
        <input type="checkbox" />
        <span>By continuing, I agree to the Terms of Use & Privacy Policy</span>
      </label>
    </div>
  )
}

export default LoginSignup

