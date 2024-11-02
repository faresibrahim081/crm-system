import React, { useState } from 'react'
import logo from '../assets/top.png' 
import img1 from '../assets/Dashboard Login Page illustration -1.png'
import Rectangle from '../assets/Rectangle 1.png'
import { Link } from "react-router-dom";
import axios from 'axios';
function RegisterUser() {
  const[Name,SetName]=useState("");
  const[Email,SetEmail]=useState("");
  const[Address,SetAddress]=useState("");
  const[YourLocation,SetYourLocation]=useState("");
  const[Password,SetPassword]=useState("");
  const[PasswordRegister,SetPasswordRegister]=useState("");
  const[submitted,SetSubmitted]=useState(false)
  async function submit (e){
    let AllTrue=true;
    e.preventDefault();
    SetSubmitted(true);
    if(Name.length < 1 || Email.length < 1 || Password.length > 6 || PasswordRegister !== Password){
        AllTrue =false
    }else{
        AllTrue = true
        let res = await axios.post(" ",{    //Api 
            name : Name,
            email : Email,
            address : Address,
            yourLocation : YourLocation,
            password : Password ,
            passwordRe : PasswordRegister,
        })
        if (res.status === 200 ){
            window.localStorage.setItem('email' , Email)
            window.location.pathname = "/UserDashboard"
        }
    }
  }
  return (
    <div className="Register">
      <div className="middle md:flex justify-between items-center">
        <div className="main md:w-[40%] h-screen flex justify-center flex-col items-center  ">
          <img
            src={logo}
            className="logo absolute top-[25px] right-[25px]"
            alt="logo"
          />
          <div className="form md:w-[75%] w-[90%] px-[20px] py-[40px] md:text-start">
            <h3 className="font-bold md:text-[50px] text-[30px] text-[#232323] p-[10px]">
              انشئ حساب
            </h3>
            <p className="text-[#959595] text-[medium]  mb-[20px]">
              انشئ حساب الان لمتابعه اعمالك
            </p>
            <form
              action="#"
              method="get"
              onSubmit={submit}
              className="flex items-center flex-col"
            >
                <input onChange={(e)=>SetName(e.target.value)} type='text' placeholder='الاسم' value={Name} className='focus:outline-[#00FFA9] border-[1px] mb-3 border-[solid] border-[#959595]  w-[100%]  rounded-[5px] px-[10px] py-[5px] mx-[5px] my-[10px]"' ></input>
                {Name.length < 1 && submitted && <p className='text-[red]'>User Name is required</p>}
                <input onChange={(e)=>SetEmail(e.target.value)} value={Email} type='email' placeholder='البريد الاكلتروني' className='focus:outline-[#00FFA9] mb-3 border-[1px] border-[solid] border-[#959595]  w-[100%]  rounded-[5px] px-[10px] py-[5px] mx-[5px] my-[10px]"' ></input>
                {Email.length < 1 && submitted && <p className='text-[red]'>Email is required</p>}
                <input onChange={(e)=>SetAddress(e.target.value)} value={Address} type='text' placeholder='العنوان ' className='focus:outline-[#00FFA9] mb-3 border-[1px] border-[solid] border-[#959595]  w-[100%]  rounded-[5px] px-[10px] py-[5px] mx-[5px] my-[10px]"' ></input>
                <input onChange={(e)=>SetYourLocation(e.target.value)} value={YourLocation} type='text' placeholder='موقعك الالكتروني ' className='focus:outline-[#00FFA9] mb-3 border-[1px] border-[solid] border-[#959595]  w-[100%]  rounded-[5px] px-[10px] py-[5px] mx-[5px] my-[10px]"' ></input>
                <input onChange={(e)=>SetPassword(e.target.value)} value={Password} type='password' placeholder='كلمه المرور  ' className='focus:outline-[#00FFA9] mb-3 border-[1px] border-[solid] border-[#959595]  w-[100%]  rounded-[5px] px-[10px] py-[5px] mx-[5px] my-[10px]"' ></input>
                {Password.length >6 && submitted && <p className='text-[red]'>Password must be more than 6 character</p>}
                <input onChange={(e)=>SetPasswordRegister(e.target.value)} value={PasswordRegister} type='password' placeholder='تاكيد كلمه المرور ' className='focus:outline-[#00FFA9] mb-3 border-[1px] border-[solid] border-[#959595]  w-[100%]  rounded-[5px] px-[10px] py-[5px] mx-[5px] my-[10px]"' ></input>
                {PasswordRegister !== Password && submitted && <p className='text-[red]'> password not match</p>}
                <button
                className="bg-[#00FFA9] p-[10px] w-[100%] rounded-[5px]  font-bold mb-[20px] mt-[20px]"
                type="submit"
              >
                انشئ حسابك
              </button>
              <div className="divider after:bg-[#959595] before:bg-[#959595]">
                or
              </div>
              <p className="text-[#959595] mt-[10px]">
                لديك حساب بالفعل 
                <Link to={"/user"} className="text-[#3679FD]  underline">  سجل الدخول </Link>
              </p>
            </form>
          </div>
        </div>
        <div className="hidden relative im2 overflow-hidden md:flex justify-center  items-center h-screen  w-[50%]">
          <img
            src={img1}
            className="object-cover h-[95%] rounded-[10px] shadow-2xl w-[90%]"
            alt="signUser"
          />
          <img
            src={Rectangle}
            className="absolute object-cover h-[95%] rounded-[10px] shadow-2xl w-[90%]"
            alt="rec"
          />
        </div>
      </div>
    </div>
  )
}

export default RegisterUser