import Stats from "../../Components/AdminDashboard/dashboard/Stats";
import Graph from "../../Components/AdminDashboard/dashboard/Graph";
import SideBar from "../../Components/AdminDashboard/Utilities/SideBar";

const AdminDashboardPage = () => {
  return (
    <div className="flex h-screen ">
      <div className="flex flex-col justify-around px-5 w-full bg-[#292929] overflow-auto">
        <Stats />
        <Graph />
      </div>
      <SideBar />
    </div>
  );
};

export default AdminDashboardPage;
