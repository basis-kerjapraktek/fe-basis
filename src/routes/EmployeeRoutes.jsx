import { Routes, Route } from "react-router-dom";
import HomePage from "/src/pages/employee/HomePage";
import EmployeeLayouts from "/src/layouts/EmployeeLayouts";
import ItemList from "/src/pages/employee/ItemList";
import RequestLoan from "/src/pages/employee/RequestLoan";
import ReturnRequest from "/src/pages/employee/ReturnRequest";
import LoanHistory from "/src/pages/employee/LoanHistory";
import Notification from "/src/pages/employee/Notification";
import Profile from "/src/pages/employee/Profile";

const EmployeeRoutes = () => {
  return (
    <Routes>
      <Route path="/employee" element={<EmployeeLayouts />}>
        <Route index element={<HomePage />} />
        <Route path="items" element={<ItemList />} />
        <Route path="request" element={<RequestLoan />} />
        <Route path="return" element={<ReturnRequest />} />
        <Route path="history" element={<LoanHistory />} />
        <Route path="notification" element={<Notification />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default EmployeeRoutes;
