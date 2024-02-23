import React from 'react'

export default function Login() {
  return (
    <div>
        <h1>Login Page</h1>
        <div className="form">
            <input type="email"  placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <button>Login</button>
        </div>
    </div>
  )
}
