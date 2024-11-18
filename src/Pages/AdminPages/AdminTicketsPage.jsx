import SideBar from "../../Components/AdminDashboard/Utilities/SideBar";
import SearchFilter from "../../Components/AdminDashboard/Utilities/SearchFilter";
import Tickets from "../../Components/AdminDashboard/tickets/Tickets";
const AdminTicketsPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-grow bg-[#292929] p-4 overflow-hidden ">
        <SearchFilter title="الملاحظات" />
        <Tickets />
      </div>
      <SideBar />
    </div>
  );
};
export default AdminTicketsPage;
