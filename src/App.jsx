import React from "react";
import HomePage from "./Pages/AdminPages/HomePage";
import AdminSignINPage from "./Pages/AdminPages/AdminSignINPage";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AppointmentsPage from "./Pages/AdminPages/AppointmentsPage";
import CustomerPage from "./Pages/AdminPages/CustomersPage";
import TicketsPage from "./Pages/AdminPages/TicketsPage";
import AdminDashboardPage from "./Pages/AdminPages/AdminDashboardPage";

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admindashboard" element={<AdminDashboardPage />} />
        <Route path="/signin" element={<AdminSignINPage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/tickets" element={<TicketsPage />} />
      </Routes>
    </div>
  );
}
export default App;
