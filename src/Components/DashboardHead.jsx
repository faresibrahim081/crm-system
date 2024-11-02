// import React from "react";
// import GroupIcon from "@mui/icons-material/Group";
// import PermIdentityIcon from "@mui/icons-material/PermIdentity";
// import MonitorIcon from "@mui/icons-material/Monitor";

// const DashboardHead = () => {
//   const stats = [
//     {
//       label: "Total Customers",
//       value: "5,423",
//       icon: <GroupIcon fontSize="large" className="text-green-500" />,
//     },
//     {
//       label: "Total Finished",
//       value: "1,893",
//       icon: <PermIdentityIcon fontSize="large" className="text-green-500" />,
//     },
//     {
//       label: "Total Pending",
//       value: "189",
//       icon: <MonitorIcon fontSize="large" className="text-green-500" />,
//     },
//   ];

//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center">
//       {stats.map((stat, index) => (
//         <div
//           key={index}
//           className="rounded shadow flex w-[80%] items-center p-6 space-x-4 bg-white"
//         >
//          <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
//             {stat.icon} 
//           </div>
//           <div>
//             <h3 className="text-sm font-medium text-gray-600">{stat.label}</h3>
//             <p className="text-xl font-bold text-gray-800">{stat.value}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DashboardHead;

import React from "react";
import GroupIcon from "@mui/icons-material/Group";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MonitorIcon from "@mui/icons-material/Monitor";

const DashboardHead = () => {
  const stats = [
    {
      label: "Total Customers",
      value: "5,423",
      icon: <GroupIcon fontSize="large" className="text-green-500" />,
    },
    {
      label: "Total Finished",
      value: "1,893",
      icon: <PermIdentityIcon fontSize="large" className="text-green-500" />,
    },
    {
      label: "Total Pending",
      value: "189",
      icon: <MonitorIcon fontSize="large" className="text-green-500" />,
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
