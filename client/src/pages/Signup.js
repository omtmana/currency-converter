import { useState } from 'react'

const Signup = () => {
   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [birthMonth, setBirthMonth] = useState('')
   const [birthDay, setBirthDay] = useState('')
   const [birthYear, setBirthYear] = useState('')
   const [streetNum, setStreetNum] = useState('')
   const [streetName, setStreetName] = useState('')
   const [apt, setApt] = useState('')
   const [city, setCity] = useState('')
   const [state, setState] = useState('')
   const [zipcode, setZipcode] = useState('')
   const [country, setCountry] = useState('')

   const handleSubmit = ((e) => {
      e.preventDefault();
   })
   return (
      <div className="signup">
         <div className="form-signup-main-container">
            <form onSubmit={handleSubmit}>
               <div className="form-signup-name">
                  <p> Sign up to send money to your loved ones</p>
                  <input
                     type='text'
                     placeholder="First Name"
                     value={firstName}
                     onChange={e => setFirstName(e.target.value)}
                  />
                  <input
                     type='text'
                     placeholder='Last Name'
                     value={lastName}
                     onChange={e => setLastName(e.target.value)}
                  />
               </div>
               {/* <br></br> */}
               <div className="form-signup-login">
                  <input
                     type='text'
                     placeholder='Email'
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                  />
                  <input
                     type='text'
                     placeholder='Password'
                     value={password}
                     onChange={e => setPassword(e.target.value)}
                  />
               </div>
               <div className="form-signup-dob">
                  <input
                     type='text'
                     placeholder='MM'
                     value={birthMonth}
                     onChange={e => setBirthMonth(e.target.value)}
                  />
                  <input
                     type='text'
                     placeholder='DD'
                     value={birthDay}
                     onChange={e => setBirthDay(e.target.value)}
                  />
                  <input
                     type='text'
                     placeholder='YYYY'
                     value={birthYear}
                     onChange={e => setBirthYear(e.target.value)}
                  />
               </div>

               <div className="form-signup-address">
                  <input
                     type='text'
                     placeholder='Street Number'
                     value={streetNum}
                     onChange={e => setStreetNum(e.target.value)}
                  />
                  <input
                     type='text'
                     placeholder='Street Name'
                     value={streetName}
                     onChange={e => setStreetName(e.target.value)}
                  />
                  <input
                     type='text'
                     placeholder="Apt"
                     value={apt}
                     onChange={e => setApt(e.target.value)}
                  />
                  <input
                     type='text'
                     placeholder="City"
                     value={city}
                     onChange={e => setCity(e.target.value)}
                  />
                  <input
                     type='text'
                     placeholder='State'
                     value={state}
                     onChange={e => setState(e.target.value)}
                  />
                  <input
                     type='text'
                     placeholder='Zipcode'
                     value={zipcode}
                     onChange={e => setZipcode(e.target.value)}

                  />
                  <input
                     type='text'
                     placeholder='Country'
                     value={country}
                     onChange={e => setCountry(e.target.value)}
                  />
               </div>
               <button> Submit </button>
            </form>
         </div>
      </div>
   )
}

export default Signup;