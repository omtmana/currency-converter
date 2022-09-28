import {useState, useEffect} from 'react'

const Profile = () => {
   const [user, setUser]=useState([])

   useEffect(() => {
      fetch('/users')
      .then(res => res.json())
      .then(user => setUser(user))
   })

   return (
      <p> Profile </p>
   )
}

export default Profile;