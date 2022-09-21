// import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import './styles/App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Convert from './pages/Convert';
// import Header from './components/Header'
// import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <div>
          <Link to='/' > HOME </Link>
          <Link to='/login'> LOGIN </Link>
          <Link to='/signup'> SIGNUP </Link>
          <Link to='/convert'> CONVERT </Link>
        </div>
      </nav>
        {/* <Layout> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/convert' element={<Convert />} />
          </Routes>
        {/* </Layout> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
