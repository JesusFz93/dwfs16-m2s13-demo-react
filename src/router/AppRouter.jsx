import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import NavBar from "../components/NavBar";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import CustomersPage from "../pages/CustomersPage";
import CustomerPage from "../pages/CustomerPage";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <div className="container pt-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/customers/:id" element={<CustomerPage />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
