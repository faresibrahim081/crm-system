import { useState } from "react";
import "./App.css";
import Register from "./Components/Forms/Register/Register";
import "./App.css";
import SideBar from "./Components/SideBar";
import Home from "./Pages/Home";
import AdminDashboard from "./Components/AdminDashboardHead";
import AdminTicket from "./Components/AdminTicket";

function App() {
  return (
    <>
    <AdminDashboard />
    < AdminTicket/>
      <SideBar />
      {/* <Home/> */}
      {/* <Register /> */}
    </>
  );
}

export default App;
