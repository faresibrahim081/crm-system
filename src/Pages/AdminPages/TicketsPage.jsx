import { div } from "framer-motion/client";
import SideBar from "../../Components/AdminDashboard/Utilities/SideBar";
import SearchFilter from "../../Components/AdminDashboard/Utilities/SearchFilter";
import Tickets from "../../Components/AdminDashboard/tickets/Tickets"
const TicketPage = () => {


    return(
        <div className="flex h-screen bg-[#292929]">
         <div className=" flex-grow">      
            <SearchFilter/>
            <Tickets/>

         </div>
            <SideBar/>
        </div>

    );
};
export default TicketPage;