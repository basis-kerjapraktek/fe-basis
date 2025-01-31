// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import EmployeeRoutes from "./routes/employeeRoutes";
// import AdminRoutes from "./routes/adminRoutes";
// import SupervisorRoutes from "./routes/supervisorRoutes";

function App() {
  return (
    <Router>
      <Routes>
        {EmployeeRoutes}
        {AdminRoutes}
        {SupervisorRoutes}
      </Routes>
    </Router>
  );
}
>>>>>>> e0dc7bd9ee67eb6a2537dddecab56e60bda5f257

export default App;
