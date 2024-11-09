import React, { useState } from "react";
import img1 from "../../../assets/Media/Dashboard Login Page illustration.png";
import logo from "../../../assets/Media/top.png";
import { Link } from "react-router-dom";
import axios from "axios";
function User() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function submit(e) {
        e.preventDefault();
        let res = await axios.post(" ", {
            //Api
            email: email,
            password: password,
        });
        if (res.status === 200) {
            window.localStorage.setItem("email", email);
            window.location.pathname = "/UserDashboard";
        }
    }
    return (
        <section className="User" dir="rtl">
            <div className="w-full h-screen flex gap-[5%] items-center justify-center p-3 bg-[#292929]">
                <div className="w-[2/3] h-full hidden md:block">
                    <div className="relative group h-[100%] w-full">
                        <img
                            src={img1}
                            className="h-full w-full object-contain"
                            alt="logo"
                        />
                    </div>
                </div>

                <div className="w-[1/3] h-full flex items-center justify-between flex-col RS">
                    <div className="h-[9%]">
                        <Link to='/'>
                            <img src={logo} />
                        </Link>
                    </div>
                    <div className="h-[91%] flex justify-center flex-col w-full">
                        <div className='text-right headd mb-8'>
                            <h1 className='text-[32px] text-[white] font-bold'>تسجيل الدخول</h1>
                            <p className='text-[18px] text-[#969696]'>تسجيل الدخول لمتابعة مشاريعك</p>
                        </div>
                        <form
                            action="#"
                            method="get"
                            onSubmit={submit}
                            className="flex items-center flex-col w-full">
                            <div className="w-full mb-4">
                                <label className="block text-[#969696] text-sm font-bold mb-2 text-right">
                                    البريد الإلكتروني
                                </label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    value={email}
                                    id="email"
                                    type="email"
                                    placeholder="البريد الالكتروني"
                                    className="text-right border rounded-[10px] w-full py-2 px-3 text-[white] focus:outline-none focus:ring-1 focus:ring-[#0A8F0A] bg-[#292929]"
                                />
                            </div>

                            <div className="w-full">
                                <label className="block text-[#969696] text-sm font-bold mb-2 text-right">
                                    رمز المرور
                                </label>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    id="password"
                                    type="password"
                                    placeholder="كلمه المرور"
                                    className="text-right border rounded-[10px] w-full py-2 px-3 text-[white] focus:outline-none focus:ring-1 focus:ring-[#0A8F0A] bg-[#292929]"
                                />
                            </div>

                            <button
                                className="bg-[#0A8F0A] hover:bg-[#0F430F] transition duration-300 p-[10px] w-full rounded-[5px] font-bold mb-[20px] mt-[20px]"
                                type="submit">
                                تسجيل الدخول
                            </button>

                            <div className="flex items-center my-4 w-full">
                                <div className="flex-1 border-b border-gray-300"></div>
                                <span className="mx-4 text-gray-600">or</span>
                                <div className="flex-1 border-b border-gray-300"></div>
                            </div>

                            <p className="text-[#959595] mt-[10px] text-[12px]">
                                تحتاج الي حساب؟
                                <Link to={"/register"} className="text-[#3679FD] underline"> انشئ الان </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        // <div className="Sign" dir="rtl">
        //     <div className="middle md:flex justify-between items-center">
        //         <div className="main md:w-[40%] h-screen flex justify-center flex-col items-center  ">
        //             <img
        //                 src={logo}
        //                 className="logo absolute top-[25px] right-[25px]"
        //                 alt="logo"
        //             />
        //             <div className="form md:w-[75%] w-[90%] px-[20px] py-[40px] md:text-start">
        //                 <h3 className="font-bold text-[30px] md:text-[50px] text-[#232323] p-[10px]">
        //                     سجل الدخول
        //                 </h3>
        //                 <p className="text-[#959595] text-[medium]  mb-[20px]">
        //                     ادخل البريد الالكتروني وكلمه المرور
        //                 </p>
        //                 <form
        //                     action="#"
        //                     method="get"
        //                     onSubmit={submit}
        //                     className="flex items-center flex-col"
        //                 >
        //                     <input
        //                         onChange={(e) => setEmail(e.target.value)}
        //                         required
        //                         value={email}
        //                         type="email"
        //                         placeholder="البريد الالكتروني"
        //                         className="focus:outline-[#00FFA9] border-[1px] border-[solid] border-[#959595]  w-[100%]  rounded-[5px] px-[10px] py-[5px] mx-[5px] my-[10px]"
        //                     ></input>
        //                     <input
        //                         onChange={(e) => setPassword(e.target.value)}
        //                         value={password}
        //                         type="password"
        //                         placeholder="كلمه المرور"
        //                         className="focus:outline-[#00FFA9] border-[1px] border-[solid] border-[#959595] w-[100%] rounded-[5px]  px-[10px] py-[5px] mx-[5px] my-[10px]"
        //                     ></input>
        //                     <button
        //                         className="bg-[#00FFA9] p-[10px] w-[100%] rounded-[5px]  font-bold mb-[20px] mt-[20px]"
        //                         type="submit"
        //                     >
        //                         تسجيل الدخول
        //                     </button>
        //                     <div className="divider after:bg-[#959595] before:bg-[#959595]">
        //                         or
        //                     </div>
        //                     <p className="text-[#959595] mt-[10px]">
        //                         تحتاج الي حساب؟
        //                         <Link to={"/registerUser"} className="text-[#3679FD]  underline"> انشئ الان </Link>
        //                     </p>
        //                 </form>
        //                 {/* <div className="flex justify-center items-center gap-3 mt-8">
        //                     <Link to={"/"} >
        //                         <AdminPanelSettingsIcon className="cursor-pointer text-[#232323]" style={{ fontSize: "35px" }} />
        //                     </Link>
        //                     <Link to={"/User"}>
        //                         <PersonIcon className="cursor-pointer text-[#232323]" style={{ fontSize: "35px" }} />
        //                     </Link>
        //                 </div> */}
        //             </div>
        //         </div>
        //         <div className="hidden relative im2 overflow-hidden md:flex justify-center  items-center h-screen  w-[50%]">
        //             <img
        //                 src={img1}
        //                 className="object-cover h-[95%] rounded-[10px] shadow-2xl w-[90%]"
        //                 alt="signUser"
        //             />
        //             {/* <img
        //                 src={Rectangle}
        //                 className="absolute object-cover h-[95%] rounded-[10px] shadow-2xl w-[90%]"
        //                 alt="rec"
        //             /> */}
        //         </div>
        //     </div>
        // </div>
    );
}

export default User;