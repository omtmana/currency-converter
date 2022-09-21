// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Convert from './pages/Convert';
import Header from './components/Header'
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/convert' element={<Convert />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
