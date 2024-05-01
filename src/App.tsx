
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/login.tsx';
import Register from './Components/Register/register.tsx';

function App() {
  

  return (
    
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </Router>
     
  );
}

export default App
