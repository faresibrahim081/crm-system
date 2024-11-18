import Stats from "../../Components/AdminDashboard/dashboard/Stats";
import Graph from "../../Components/AdminDashboard/dashboard/Graph";
import SideBar from "../../Components/AdminDashboard/Utilities/SideBar";

const AdminDashboardPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-grow bg-[#292929] p-4 overflow-hidden flex flex-col justify-around">
        <Stats />
        <Graph />
      </div>
      <SideBar/>
      
    </div>
  );
};

export default AdminDashboardPage;
