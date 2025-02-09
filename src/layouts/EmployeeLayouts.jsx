import { Outlet } from "react-router-dom";
import Sidebar from "../components/employee/Sidebar";
import Header from "../components/employee/Header";

const EmployeeLayouts = () => {
  return (
    <div className="flex">
      <Sidebar /> {/* Sidebar tetap di kiri */}
      <div className="flex-grow bg-gray-100 min-h-screen">
        <Header /> {/* Tambahin header di layout */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default EmployeeLayouts;
