
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/login.tsx';
import Register from './Components/Register/register.tsx';
import Master_Dashboard from './Components/Dashboards/master_dashboard.tsx';


enum AppRoutes {
  LOGIN = '/',
  REGISTER = '/register',
  MASTER = '/master_dashboard',
}
function App() {
  

  return (
    
    <Router>
    <Routes>
      <Route path={AppRoutes.LOGIN} element={<Login />} />
      <Route path={AppRoutes.REGISTER} element={<Register />} />
      <Route path={AppRoutes.MASTER} element={<Master_Dashboard />} />
    </Routes>
  </Router>
     
  );
}

export default App
