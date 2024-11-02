import React, { useState } from 'react'
import logo from '../assets/top.png'
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import GavelIcon from '@mui/icons-material/Gavel';
import ChatIcon from '@mui/icons-material/Chat';
import { Link } from 'react-router-dom';
function Sidebar() {
    return (
        <div className="hidden md:block  w-[22%] Sidebar  p-[20px]  bg-[#FEFEFE] ">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="links mt-10 flex flex-col text-[#8B909A] text-[20px]">
                <Link to={"/AdminDashboard/controlPage"}  className='rounded-xl mb-2 focus:text-[#016643] focus:font-bold focus:bg-[#00FFA9] px-[10px] py-[15px] '><SettingsRemoteIcon/> لوحه التحكم</Link>
                <Link to={"/AdminDashboard/Users"} className='p-[10px]   mb-2'>< PeopleAltIcon/>  العملاء</Link>
                <a href="#!" className='p-[10px]   mb-2'><TextSnippetIcon/> الملاحظات </a>
                <a href="#!" className='p-[10px]  mb-2'><AccessTimeFilledIcon/> المواعيد </a>
                <a href="#!" className='p-[10px]  mb-2'><GavelIcon/> العقود </a>
                <a href="#!" className='p-[10px]   mb-2'><ChatIcon/> المحادثات </a>
                
            </div>
        </div>
    )
}

export default Sidebar