
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/login.tsx';
import Register from './Components/Register/register.tsx';


enum AppRoutes {
  LOGIN = '/',
  REGISTER = '/register',
}
function App() {
  

  return (
    
    <Router>
    <Routes>
      <Route path={AppRoutes.LOGIN} element={<Login />} />
      <Route path={AppRoutes.REGISTER} element={<Register />} />
    </Routes>
  </Router>
     
  );
}

export default App
