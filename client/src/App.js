// import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import './styles/App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Convert from './pages/Convert';
import Profile from './pages/Profile';
import PaymentForm from './components/PaymentForm';
// import Header from './components/Header'
// import Layout from './components/Layout';

function App() {
  const [convert, setConvert] = useState([])
  const [user, setUser] = useState([])

  useEffect(() => {
    fetch('/users')
    .then(res => res.json)
    .then((data) => console.log(data))
  },[])

  useEffect(() => {
    fetch('https://api.exchangerate.host/convert?from=USD&to=PHP')
      .then(res => res.json())
      .then((convert) => setConvert([convert]))
    // .then((data) => console.log(data))
  }, [])
  
  return (
    <div className="App">
      <BrowserRouter>
        <nav className='nav'>
          {/* <div> */}
          <Link to='/' style={{ textDecoration: "none" }}> HOME </Link>
          <Link to='/convert' style={{ textDecoration: "none" }}> CONVERT </Link>
          <Link to='/profile' style={{textDecoration: "none"}}> PROFILE </Link>
          <Link to='/login' style={{ textDecoration: "none" }}> LOGIN </Link>
          <Link to='/signup' style={{ textDecoration: "none" }}> SIGNUP </Link>
          {/* <Link to='/paymentform'> PAYMENT FORM </Link> */}
          {/* </div> */}
        </nav>
        {/* <Layout> */}
        <Routes>
          <Route path='/' element={<Home convert={convert}/>} />
          <Route path='/profile' element={<Profile user={user} />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/convert' element={<Convert convert={convert} />} />
          {/* <Route path='/paymentform' element={<PaymentForm />} /> */}
        </Routes>
        {/* </Layout> */}
      </BrowserRouter>
      <img src='earth.jpeg' />
    </div>
  );
}

export default App;
