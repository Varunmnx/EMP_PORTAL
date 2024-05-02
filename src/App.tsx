
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/login.tsx';
import Register from './Components/Register/register.tsx';
import { DashboardLayout } from './Components/Layouts'
import { Home } from './Components/pages';

enum AppRoutes {
  LOGIN = '/',
  REGISTER = '/register',
  DASHBOARD = '/dashboard',
  HOME = '/home'
}
function App() {
  

  return (
    
    <Router>
    <Routes>
      <Route path={AppRoutes.LOGIN} element={<Login />} />
      <Route path={AppRoutes.REGISTER} element={<Register />} />
      <Route path={AppRoutes.DASHBOARD} element={<DashboardLayout />}>
          <Route index path={AppRoutes.DASHBOARD + AppRoutes.HOME} element={<Home/>} />
      </Route>
    </Routes>
  </Router>
     
  );
}

export default App
