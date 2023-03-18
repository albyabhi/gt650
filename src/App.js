import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './Signup';
import Home1 from './components/Home1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home2 from './components/Home2';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Home1/>
      <Routes>
        <Route path='/' element={<Home2/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
