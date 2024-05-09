
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/login.tsx';
import Register from './Components/Register/register.tsx';
import { DashboardLayout } from './Components/Layouts'
import { Home } from './Components/pages';
import Master_Dashboard from './Components/Dashboards/master_dashboard.tsx';


export enum AppRoutes {
  LOGIN = '/',
  REGISTER = '/register',
  DASHBOARD = '/dashboard',
  HOME = '/home',
  MASTER = '/master_dashboard',
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
      <Route path={AppRoutes.MASTER} element={<Master_Dashboard />} />
    </Routes>
  </Router>
     
  );
}

export default App
