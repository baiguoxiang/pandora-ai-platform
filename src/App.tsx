import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import TokenPage from "./pages/TokenPage";
import ContentPage from "./pages/ContentPage";
import EcommercePage from "./pages/EcommercePage";
import DigitalStaffPage from "./pages/DigitalStaffPage";
import BusinessCollabPage from "./pages/BusinessCollabPage";
import UsersPage from "./pages/UsersPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-primary overflow-x-hidden">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/token" element={<TokenPage />} />
              <Route path="/content" element={<ContentPage />} />
              <Route path="/ecommerce" element={<EcommercePage />} />
              <Route path="/digital-staff" element={<DigitalStaffPage />} />
              <Route path="/business" element={<BusinessCollabPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
    </Router>
  );
}

export default App;
