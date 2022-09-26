import '../styles/Login.css'

const Login = () => {
   return (
      <div className="login">
         <div className='login-form'>
            <p style={{ fontSize: "2em", fontFamily: "Caveat", fontWeight:"900"}} > Login </p>
            <form>
               <input type='text'
                  placeholder="Email"
                  className="login-email"
               />
               <input type='text'
                  placeholder="Password"
                  className="login-password"
               />
            </form>
            <button className="login-submit-button"> Submit </button>
         </div>
      </div>
   )
}

export default Login;