import { useState } from 'react'
import '../styles/SignUp.css'

const Signup = ({ setUser }) => {
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
      const formData = {
         'name': `${firstName} ${lastName}`,
         'email': `${email}`,
         'password': `${password}`,
         'birthday': `${birthMonth}/${birthDay}/${birthYear}`,
         'address': `${streetNum} ${streetName} ${apt} ${city} ${state} ${zipcode} ${country}`
      }
      fetch('/signup', {
         method: 'POST',
         headers: {
            'Content-Type': 'applicatio/json',
         },
         body: JSON.stringify(formData)
      }).then((res) => {
         if (res.ok) {
            res.json().then((user) => setUser(user))
            // navigate('/profile')
            console.log(formData)
         }
         // else {
         //    res.json().then((data) = alert(data.error))
         // }
      })
   })
   return (
      <div className="signup">
         <div className="form-signup-main-container">
            <form onSubmit={handleSubmit}>
               <div className="form-signup-name">
                  <p> <span style={{ fontFamily: 'Caveat', fontSize: '2em'}}>Sign up</span></p>
                  <div>
                     <input
                        type='text'
                        placeholder="First Name"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        className='first-name'
                     />
                  </div>
                  <div>
                     <input
                        type='text'
                        placeholder='Last Name'
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                     />
                  </div>
               </div>
               {/* <br></br> */}
               <div className="form-signup-login">
                  <div>
                     <input
                        type='text'
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                     />
                  </div>
                  <input
                     type='text'
                     placeholder='Password'
                     value={password}
                     onChange={e => setPassword(e.target.value)}
                  />
               </div>
               <div className="form-signup-dob">
                  <div>
                     <input
                        type='text'
                        placeholder='MM'
                        value={birthMonth}
                        onChange={e => setBirthMonth(e.target.value)}
                     />
                  </div>
                  <div>
                     <input
                        type='text'
                        placeholder='DD'
                        value={birthDay}
                        onChange={e => setBirthDay(e.target.value)}
                     />
                  </div>
                  <div>
                     <input
                        type='text'
                        placeholder='YYYY'
                        value={birthYear}
                        onChange={e => setBirthYear(e.target.value)}
                     />
                  </div>
               </div>
               <div className="form-signup-address">
                  <div>
                     <input
                        type='text'
                        placeholder='Street Number'
                        value={streetNum}
                        onChange={e => setStreetNum(e.target.value)}
                     />
                  </div>
                  <div>
                     <input
                        type='text'
                        placeholder='Street Name'
                        value={streetName}
                        onChange={e => setStreetName(e.target.value)}
                     />
                  </div>
                  <div>
                     <input
                        type='text'
                        placeholder="Apt"
                        value={apt}
                        onChange={e => setApt(e.target.value)}
                     />
                  </div>
                  <div>
                     <input
                        type='text'
                        placeholder="City"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                     />
                  </div>
                  <div>
                     <input
                        type='text'
                        placeholder='State'
                        value={state}
                        onChange={e => setState(e.target.value)}
                     />
                  </div>
                  <div>
                     <input
                        type='text'
                        placeholder='Zipcode'
                        value={zipcode}
                        onChange={e => setZipcode(e.target.value)}
                     />
                  </div>
                  <div>
                     <input
                        type='text'
                        placeholder='Country'
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                     />
                  </div>
               </div>
               <button> Submit </button>
            </form>
         </div>
         <div className='man-image'>
            <img src='man.jpeg' style={{}}/>
         </div>
      </div>
   )
}

export default Signup;