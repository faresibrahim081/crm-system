import React from "react";
import Tickets from "../../Components/AdminDashboard/tickets/Tickets";
import SideBar from "../../Components/AdminDashboard/Utilities/SideBar";

const TicketsPage = () => {
  return (
    <div className="flex w-full h-screen ">
      <div className="flex flex-col justify-around  items-center w-full bg-[#292929] overflow-auto">
        <Tickets />
      </div>
      <SideBar />
    </div>
  );
};
export default TicketsPage;
