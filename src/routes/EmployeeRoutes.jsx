import { Routes, Route } from "react-router-dom";
import HomePage from "/src/pages/employee/HomePage";
import EmployeeLayouts from "/src/layouts/EmployeeLayouts";

export default function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/employee" element={<EmployeeLayouts />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}
