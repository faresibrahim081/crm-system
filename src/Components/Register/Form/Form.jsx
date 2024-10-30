import React from 'react'
import { FaRegUser, FaCity } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { div } from 'framer-motion/client';

const Form = () => {

  const formFields = [
    { id: "username", label: "اسم المستخدم", type: "text", placeholder: "اسم المستخدم"},
    { id: "email", label: "البريد الإلكتروني", type: "email", placeholder: "البريد الإلكتروني"},
    { id: "address", label: "العنوان", type: "text", placeholder: "العنوان"},
    { id: "active-address", label: "موقعك الحالي", type: "text", placeholder: "شارك موقعك الحالي"},
    { id: "password", label: "الرقم السري", type: "password", placeholder: "********"}
  ];

  return (
    <section className='w-full pl-[64px] pr-[64px]'>
      <div class="w-full">
        <div className='text-right'>
          <h1 className='text-[32px] font-bold'>
            إنشاء حساب
          </h1>
          <p className='text-[18px] text-[#969696]'>
            إنشاء حساب لمتابعة أعمالك
          </p>
        </div>
        <form class="bg-white w-full rounded space-y-2 pt-6 pb-8 mb-4">
          {
            formFields.map(field =>
              <div className="mb-3" key={field.id}>
                <label className="block text-gray-700 text-sm font-bold mb-2 text-right" htmlFor={field.id}>
                  {field.label}
                </label>
                <input
                  className="text-right border rounded-[10px] w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00FFA9]"
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                />
              </div>
            )
          }
          <div>
            <button class="bg-[#00FFA9] hover:bg-[#2ea880] mt-2 w-full text-white font-bold py-2 px-4 rounded-[10px] focus:outline-none focus:shadow-outline transition duration-300" type="button">
              انشاء حساب
            </button>

          </div>

          <div class="flex items-center my-4">
            <div class="flex-1 border-b border-gray-300"></div>
            <span class="mx-4 text-gray-600">or</span>
            <div class="flex-1 border-b border-gray-300"></div>
          </div>

          <div className='text-center flex items-center justify-center gap-[8px] text-[12px]'>
            <a className='text-[#367AFF] underline' href="#">سجل دخول</a>
            <p>لديك بالفعل حساب؟</p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Form