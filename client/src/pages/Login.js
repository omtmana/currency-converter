import '../styles/Login.css'
import '../styles/Button.css'
import { useState } from 'react'

const Login = ({setUser}) => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const handleSubmit = ((e) => {
      e.preventDefault();
      fetch("/login", {
         method: 'POST,'
         headers: {
            'Content-Type': 'application/json'
         }
      }
      )
   })


   return (
      <div className="login">
         <div className='login-form'>
            <p style={{ fontSize: "2em", fontFamily: "Caveat", fontWeight:"900"}} > Login </p>
            <form onSubmit={handleSubmit}>
               <input type='text'
                  placeholder="Email"
                  className="login-email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />
               <input type='password'
                  placeholder="Password"
                  className="login-password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
               />
            </form>
            <button className="login-submit-button"> Submit </button>
         </div>
      </div>
   )
}

export default Login;