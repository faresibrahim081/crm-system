import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Outlet, Route, Routes } from 'react-router-dom'


function AdminDashboard() {
    return (
        <div className='AdminDashboard flex bg-[#E9EAEB] h-screen'>
            <Sidebar/>
            <div className='w-[80%]'>
                <Outlet/>
            </div>
        </div>
    )
}

export default AdminDashboard