import { Outlet } from "react-router-dom";
import Sidebar from "../components/employee/Sidebar";

function EmployeeLayouts() {
  return (
    <div className="flex">
      <Sidebar /> {/* Sidebar karyawan */}
      <div className="flex-grow p-4 bg-gray-100 min-h-screen">
        <Outlet /> {/* Halaman utama */}
      </div>
    </div>
  );
}

export default EmployeeLayouts;
