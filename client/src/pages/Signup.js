
const Signup = () => {
   const handleSubmit = ((e) => {
      e.preventDefault();
   })
   return (
      <div className="signup">
         <div className="form-signup-main-container">
            <form onSubmit={handleSubmit}>
               <div className="form-signup-name">
                  <p> Sign up to send money to your loved ones</p>
                  <input type='text'
                     placeholder="First Name"
                  />
                  <input type='text'
                     placeholder='Last Name'
                  />
               </div>
               {/* <br></br> */}
               <div className="form-signup-login">
                  <input type='text'
                     placeholder='Email'
                  />
                  <input type='text'
                  placeholder='Password'
                  />
               </div>
               <div className="form-signup-dob">
                  <input type='text'
                  placeholder='MM'
                  />
                  <input type='text'
                  placeholder='DD'
                  />
                  <input type='text'
                  placeholder='YYYY'
                  />
               </div>
               <div className="form-signup-address">
                  <input type='text'
                  placeholder='Street Number and Name'
                  />
                  <input type='text'
                  placeholder="Apt"
                  />
                  <input type='text'
                  placeholder="City" 
                  />
                  <input type='text'
                  placeholder='State'
                  />
                  <input type='text'
                  placeholder='Zipcode'
                  />
                  <input type='text'
                  placeholder='Country'
                  />
               </div>
               <button> Submit </button>
            </form>
         </div>
      </div>
   )
}

export default Signup;