import React from "react";
import HomePage from "./Pages/AdminPages/HomePage";
import AdminSignINPage from "./Pages/AdminPages/AdminSignINPage";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Appointments from "./Pages/AdminPages/AppointmentsPage";
import CustomerPage from "./Pages/AdminPages/CustomersPage";
import TicketsPage from "./Pages/AdminPages/TicketsPage";
function App() {
  return (
    <div className="App ">
      {/* <Appointments /> */}
      {/* <HomePage/> */}
      {/* <AdminSignINPage /> */}
      {/* <CustomerPage /> */}
      <TicketsPage />
    </div>
  );
}

export default App;
