import { useState } from "react";
import "./App.css";
import Register from "./Components/Forms/Register/Register";
import "./App.css";
import SideBar from "./Components/SideBar";
import Home from "./Pages/Home";
import BarChart from "./Components/barChrt/BarChart";
function App() {
  return (
    <>
    <HEAD/>
    <SideBar/>
    <Home/>
    <Register/>
    {/* <Home /> */}
    <BarChart />
    </>
  )
    
// import BarChart from "./Components/barChrt/BarChart";
// import Home from "./Pages/Home";

// function App() {
//   return (
//     <>
//       <Home />
//       {/* <BarChart /> */}
// >>>>>>> pr/12
//     </>
//   );
}

export default App;
