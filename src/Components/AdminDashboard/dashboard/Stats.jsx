
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlinePermIdentity } from "react-icons/md";
import { CiMonitor } from "react-icons/ci";

const DashboardHead = () => {
  const stats = [
    {
      label: "اجمالي العملاء",
      value: "5,423",
      icon: (
        <FaUserGroup fontSize="large" className="text-4xl text-white " />
      ),
    },
    {
      label: "اجمالي المنتهية",
      value: "1,893",
      icon: (
        <MdOutlinePermIdentity
          fontSize="large"
          className="text-5xl text-white "
        />
      ),
    },
    {
      label: "اجمالي المعلقة",
      value: "189",
      icon: <CiMonitor fontSize="large" className="text-5xl text-white " />,
    },
  ];

  return (
    <div className="flex flex-col  items-center justify-center md:flex-row ">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex rounded-lg items-center justify-between w-screen p-6 space-x-4 bg-[#0d0d0d] shadow"
        >
          <div className="flex items-center justify-center w-16 h-16 bg-[#0f430f] rounded-full">
            {stat.icon}
          </div>
          <div className="flex flex-col text-right justify-center">
            <h3 className="text-sm font-medium text-white">{stat.label}</h3>
            <p className="text-xl font-bold text-gray-500">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardHead;
