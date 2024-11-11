import Stats from "../../Components/AdminDashboard/dashboard/Stats";
import Graph from "../../Components/AdminDashboard/dashboard/Graph";
import SideBar from "../../Components/AdminDashboard/Utilities/SideBar";

const AdminDashboardPage = () => {
  return (
    <div className="flex justify-between">
      <div className= "w-full md:w-[70vw] flex flex-col gap-24 mx-auto">
        {/* Added margin-right to account for the sidebar */}
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
