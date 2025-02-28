import { Outlet } from "react-router-dom";
import Sidebar from "../components/employee/Sidebar";
import Header from "../components/employee/Header";

const EmployeeLayouts = () => {
  return (
    <div className="flex">
      <Sidebar /> 
      <div className="flex-grow bg-gray-100 min-h-screen">
        <Header /> 
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default EmployeeLayouts;
