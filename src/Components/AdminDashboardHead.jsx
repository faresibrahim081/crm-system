import React from "react";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlinePermIdentity } from "react-icons/md";
import { CiMonitor } from "react-icons/ci";

const DashboardHead = () => {
  const stats = [
    {
      label: "Total Customers",
      value: "5,423",
      icon: <FaUserGroup fontSize="large"  className="text-green-500 text-4xl" />,
    },
    {
      label: "Total Finished",
      value: "1,893",
      icon: <MdOutlinePermIdentity fontSize="large" className="text-green-500 text-5xl" />,
    },
    {
      label: "Total Pending",
      value: "189",
      icon: <CiMonitor fontSize="large" className="text-green-500 text-5xl" />,
    },
  ];

  return (
  
    <div className="flex flex-col md:flex-row items-center justify-center ">
      
      {stats.map((stat, index) => (
        <div
          key={index}
          className="rounded shadow flex items-center justify-center w-screen  p-6 space-x-4 bg-white"
        >
          <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
            {stat.icon}
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-sm font-medium text-gray-600">{stat.label}</h3>
            <p className="text-xl font-bold text-gray-800">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardHead;