import Stats from "../../Components/AdminDashboard/dashboard/Stats";
import Graph from "../../Components/AdminDashboard/dashboard/Graph";
import SideBar from "../../Components/AdminDashboard/Utilities/SideBar";

const AdminDashboardPage = () => {
  return (
    <div className="flex justify-between bg-[#292929]">
      <div className="w-full md:w-[70vw] flex flex-col justify-center gap-24 mx-auto text-right">
        <h1 className="text-white font-semibold text-2xl">لوحة التحكم</h1>
        <Stats />
        <Graph />
      </div>
      <div className="">
        <SideBar />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
