import { Link } from 'react'

const Header = () => {
   return (
      <div className='header'>
         <Link to='/'>
            <div className='header-home'>
               <h1> Home </h1>
            </div>
         </Link>
         <div className='header-nav-links'>
            <Link to='/login'>
               <h1> Login </h1>
            </Link>
            <Link to='/signup'>
               <h1> Signup </h1>
            </Link>
            <Link to='/convert'>
               <h1> Convert </h1>
            </Link>
         </div>
      </div>
   )
}

export default Header;