import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import DashboardHead from './Components/DashboardHead'
import Register from './Components/Register/Register'
import "./App.css";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Register/>
      <Home />
    </>
  );
}

export default App;
