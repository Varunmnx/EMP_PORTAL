import "./master_dashboard.css";
import { IoIosAnalytics, IoIosSettings } from "react-icons/io"; 

const Master_Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <h1>Dashboard</h1>
      <div className="dashboard-item">
        <IoIosAnalytics />
        <h2>Sales Report</h2>
        <p>View sales performance for the current month.</p>
      </div>
      <div className="dashboard-item">
        <IoIosSettings />
        <h2>User Analytics</h2>
        <p>Analyze user behavior and engagement metrics.</p>
      </div>
      {/* Add more dashboard items as needed */}
    </div>
  );
};

export default Master_Dashboard;