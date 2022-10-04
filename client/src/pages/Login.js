import '../styles/Login.css'
import '../styles/Button.css'
import { useState } from 'react'

const Login = ({ setUser }) => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault()
      const formData = {
         'email': email,
         'password': password
      }
      fetch('/login', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(formData)
      }).then((res) => {
         if (res.ok) {
            res.json().then((user) => setUser(user))
            // navigate('/profile')
            console.log(formData)
            // } else {
            //   res.json().then((err) => setErrors(err.errors))
            // }
         }
      })
      // .then(res => res.json())
      // .then(user => setUser(user))
   }

   return (
      <div className="login">
         <div className='login-form'>
            <p style={{ fontSize: "2em", fontFamily: "Caveat", fontWeight: "900" }} > Login </p>
            <form>
               <div>
               <input type='text'
                  placeholder="Email"
                  className="login-email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />
               </div>
               <div>
               <input type='password'
                  placeholder="Password"
                  className="login-password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
               />
               </div>
            </form>
            <button className='login-submit-button' onSubmit={handleSubmit}> Submit </button>
         </div>
      </div>
   )
}

export default Login;