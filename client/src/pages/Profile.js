import ProfileContainer from "../components/ProfileContainer";

const Profile = ({ user }) => {
   return (
      <div>
         {
            user.map((user) => {
               return <ProfileContainer key={user.id} user={user}/>
            })
         }
      </div>
   )
}

export default Profile;