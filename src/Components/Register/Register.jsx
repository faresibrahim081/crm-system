import React from 'react'
import leftSideimage from "../../assets/Dashboard Login Page illustration.png"
import topLeftSideimage from '../../assets/top.png'
import Form from './Form/Form'
import './Register.css';

const Register = () => {
    return (
        <>
            <div className='w-full h-screen flex gap-[%] items-center justify-center p-3'>
                <div className='w-[2/3] h-full LS'>
                    <div class="relative group h-[100%] w-full">
                        <img src={leftSideimage} class="h-full w-full object-contain" alt="Image" />
                        <div class="absolute text-right inset-0 flex items-center justify-center bg-white bg-opacity-80 text-black text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            :أدخل بياناتك في الحقول التالية <br /><br />لإنشاء حساب جديد - <br />لإنشاء عقد - <br />لمتابعة مشاريعك - <br />للتواصل معنا -
                        </div>
                    </div>
                </div>
                <div className='w-[1/3] h-full flex items-center justify-between flex-col RS'>
                    <div className='h-[9%]'>
                        <img src={topLeftSideimage} />
                    </div>
                    <div className='h-[91%] flex items-center justify-around flex-col w-full '>
                        <Form />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register