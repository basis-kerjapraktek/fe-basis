import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import EmployeeRoutes from "./routes/EmployeeRoutes";
import Login from "./pages/auth/Login";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        Rute untuk admin
        <Route element={<ProtectedRoute />}>
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Route>

        {/* Rute untuk employee */}
        <Route path="/*" element={<EmployeeRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;