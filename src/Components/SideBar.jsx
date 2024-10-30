import React, { useState } from "react";
import logo from "../assets/Images/image 1.png";
import { LuHome } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FaRegNoteSticky } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { LiaFileContractSolid } from "react-icons/lia";
import { CiChat1 } from "react-icons/ci";
import { PiSignOut } from "react-icons/pi";

const SideBar = () => {
  const links = [
    { title: "لوحة التحكم", icon: LuHome },
    { title: "العملاء", icon: FaRegUser },
    { title: "الملاحظات", icon: FaRegNoteSticky },
    { title: "المواعيد", icon: IoTimeOutline },
    { title: "العقود", icon: LiaFileContractSolid },
    { title: "المحادثات", icon: CiChat1 },
  ];

  const [activeLink, setActiveLink] = useState("لوحة التحكم");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex w-64 h-screen flex-col justify-between border-e right-0 absolute">
      <div className="px-4 py-6 flex flex-col justify-center items-end w-full space-y-5">
        <span className="grid place-content-center rounded-lg text-xs text-gray-600">
          <img src={logo} />
        </span>

        <div className="space-y-2 w-full flex flex-col items-end">
          {links.map((link, i) => (
            <ul className="space-y-1 w-full text-right">
              <li key={i}>
                <a
                  href="#"
                  className={`flex items-center justify-end gap-2 rounded-lg px-4 py-3 text-sm text-gray-700 font-semibold
                    ${
                      activeLink === link.title
                        ? "bg-[#BFF6E4] text-[#016643]"
                        : ""
                    }`}
                  onClick={() => handleLinkClick(link.title)}
                >
                  {link.title}
                  <link.icon className="text-xl ml-2" />
                </a>
              </li>
            </ul>
          ))}
        </div>
      </div>

      {/* PROFILE_HERE */}
      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
        >
          <img
            alt=""
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="size-10 rounded-full object-cover"
          />

          <div className="">
            <p className="text-xs">
              <strong className="block font-medium">Eric Frusciante</strong>

              <span> eric@frusciante.com </span>
            </p>
          </div>
        </a>
        <span className="text-2xl p-4 text-red-400 hover:text-red-700 cursor-pointer">
          <PiSignOut />
        </span>
      </div>
    </div>
  );
};

export default SideBar;
