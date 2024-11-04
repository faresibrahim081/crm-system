import { useState } from "react";
import "./App.css";
import Register from "./Components/Forms/Register/Register";
import "./App.css";
import SideBar from "./Components/SideBar";
import Home from "./Pages/Home";
// import ShowStatuesModal from "./Components/ShowStatuesModal";
import Chat from "./Pages/Chat";

function App() {
  return (
    <>
      <SideBar />
      {/* <ShowStatuesModal /> */}
      <Chat />
      {/* <Home/> */}
      {/* <Register /> */}
    </>
  );
}

export default App;
