 doaa
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sign from './Components/Sign'
import User from './Components/User'
import { Route , Routes  } from 'react-router-dom'
import RegisterAdmin from './Pages/RegisterAdmin'
import RegisterUser from './Pages/RegisterUser'
import AdminDashboard from './Pages/AdminDashboard'
import UserDashboard from './Pages/UserDashboard'
import ControlPage from './Components/ControlPage'
import Users from './Components/Users'


function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<Sign/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/registerAdmin' element={<RegisterAdmin/>}/>
      <Route path='/registerUser' element={<RegisterUser/>}/>
      <Route path='/AdminDashboard' element={<AdminDashboard/>}>
        <Route path='controlPage' element={<ControlPage/>}/>
        <Route path='Users' element={<Users/>}/>

      </Route> 
      
      <Route path='/UserDashboard' element={<UserDashboard/>}>
      </Route>
      </Routes> 
      
      
    </>
    
  )

import "./App.css";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <>
      <SideBar />
    </>
  );
 main
}

export default App;
