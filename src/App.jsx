import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Sign from './Components/Forms/Sign/Sign';
import User from './Components/Forms/User/User';
import Register from './Components/Forms/Register/Register';

function App() {
  return (
    <div className="bg-[#292929]">
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/user" element={<User />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
