import SideBar from "../../Components/AdminDashboard/Utilities/SideBar";
import SearchFilter from "../../Components/AdminDashboard/Utilities/SearchFilter";
import Tickets from "../../Components/AdminDashboard/tickets/Tickets";
const AdminTicketsPage = () => {
  return (
    <div className="flex w-full h-screen ">
      <div className="flex flex-col justify-around  items-center w-full bg-[#292929] overflow-auto">
        <SearchFilter title="الملاحظات" />
        <Tickets />
      </div>
      <SideBar />
    </div>
  );
};
export default AdminTicketsPage;
