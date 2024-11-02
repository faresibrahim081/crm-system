import React from 'react'
import leftSideimage from "../../assets/Dashboard Login Page illustration.png"
import topLeftSideimage from '../../assets/top.png'
import Form from './Form/Form'
import './Register.css';

const Register = () => {
  return (
    <>
        <div className='w-full h-screen flex items-center justify-around p-3'>
            <div className='w-[2/3] h-full LS'>
                <img src={leftSideimage} className='h-[100%] w-full object-contain'/> 
            </div>
            <div className='w-[1/3] h-full flex items-center justify-between flex-col RS'>
                <div className='h-[9%]'>
                    <img src={topLeftSideimage}/>
                </div>
                <div className='h-[91%] flex items-center justify-around flex-col w-full '>
                    <Form/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register