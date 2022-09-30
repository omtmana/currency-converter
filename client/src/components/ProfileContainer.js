
const ProfileContainer = ({user}) => {
   const {first_name} = user
   return(
      <div>
         <p> {first_name}</p>
      </div>
   )
}

export default ProfileContainer;