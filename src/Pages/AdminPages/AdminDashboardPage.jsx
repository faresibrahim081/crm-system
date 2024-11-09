import Stats from "../../Components/AdminDashboard/dashboard/Stats";
import Graph from "../../Components/AdminDashboard/dashboard/Graph";
import SideBar from "../../Components/AdminDashboard/Utilities/SideBar";

const AdminDashboardPage = () => {
  return (
    <div className="flex justify-between">
      <div className="md:w-[70vw] flex flex-col justify-between bg-[#292929] mx-auto">
        {/* Added margin-right to account for the sidebar */}
        <Stats />
        <Graph />
      </div>
      <div className="">
      <SideBar /> {/* Sidebar now on the right */}
      </div>
    </div>
  );
};

export default AdminDashboardPage;
