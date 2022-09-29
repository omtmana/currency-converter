
const Profile = ({user}) => {
   const {email, first_name} = user 

   return (
      <div className='profile'>
         <div className='profile-header'>
            <h1>{first_name}</h1>
         </div>
      </div>
   )
}

export default Profile;