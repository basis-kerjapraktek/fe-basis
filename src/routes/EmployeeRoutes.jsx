import { Routes, Route } from "react-router-dom";
import HomePage from "/src/pages/employee/HomePage";
import EmployeeLayouts from "/src/layouts/EmployeeLayouts";
import ItemList from "/src/pages/employee/ItemList";
import RequestLoanStep1 from "../pages/employee/RequestLoanStep1";
import RequestLoanStep2 from "../pages/employee/RequestLoanStep2";
import RequestLoanStep3 from "../pages/employee/RequestLoanStep3";
import ReturnRequestStep1 from "../pages/employee/ReturnRequestStep1";
import ReturnRequestStep2 from "../pages/employee/ReturnRequestStep2";
import ReturnRequestStep3 from "../pages/employee/ReturnRequestStep3";
import Sending from "../pages/employee/Sending";
import LoanHistory from "/src/pages/employee/LoanHistory";
import Detail from "../pages/employee/Detail";
import Notification from "../pages/employee/Notification";
import Profile from "/src/pages/employee/Profile";

const EmployeeRoutes = () => {
  return (
    <Routes>
      <Route path="/employee" element={<EmployeeLayouts />}>
        <Route index element={<HomePage />} />
        <Route path="ItemList" element={<ItemList />} /> 
        <Route path="RequestLoanStep1" element={<RequestLoanStep1 />} />
        <Route path="RequestLoanStep2" element={<RequestLoanStep2 />} />
        <Route path="RequestLoanStep3" element={<RequestLoanStep3 />} />
        <Route path="ReturnRequestStep1" element={<ReturnRequestStep1 />} />
        <Route path="ReturnRequestStep2" element={<ReturnRequestStep2 />} />
        <Route path="ReturnRequestStep3" element={<ReturnRequestStep3 />} />
        <Route path="Sending" element={<Sending />} />
        <Route path="LoanHistory" element={<LoanHistory />} />
        <Route path="Detail" element={<Detail />} />
        <Route path="Notification" element={<Notification />} />
        <Route path="Profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default EmployeeRoutes;
