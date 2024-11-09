import Stats from "../../Components/AdminDashboard/dashboard/Stats";
import Graph from "../../Components/AdminDashboard/dashboard/Graph";
import SideBar from "../../Components/AdminDashboard/Utilities/SideBar";

const AdminDashboardPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-grow bg-[#292929] p-4 mr-64">
        {/* Added margin-right to account for the sidebar */}
        <Stats />
        <Graph />
      </div>
      <SideBar /> {/* Sidebar now on the right */}
    </div>
  );
};

export default AdminDashboardPage;
