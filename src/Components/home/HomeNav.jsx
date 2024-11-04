import { MdAdminPanelSettings } from "react-icons/md";
import logo from "../../assets/Media/logo.png";
import { FaUserTie } from "react-icons/fa";

function HomeNav() {
  return (
    <div>
      <nav className="flex justify-between items-center h-[12vh] py-4">
        <div className="flex gap-3">
          <button
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="rounded-3xl line-clamp-1 w-fit text-[14px] shadow-sm shadow-slate-100 py-2 px-4"
          >
            {" "}
            تسجيل الدخول
          </button>
          <button className="rounded-3xl w-fit line-clamp-1 bg-[#00c853] shadow-sm py-2 px-4">
            مستخدم جديد
          </button>
        </div>
        <div className="w-[110px] md:w-[130px]">
          <img src={logo} alt="ZBOOMA-logo" />
        </div>
      </nav>
      {/* dialog */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box w-[300px] flex justify-around items-center bg-[#292929]">
        <button
            className="rounded-md flex gap-2 items-center line-clamp-1 w-fit  shadow-slate-100 text-[14px] shadow-sm py-2 px-4"
          >
            <FaUserTie className="size-5" />
            <span>مستخدم</span>
          </button>
          <button className="rounded-md flex gap-2 items-center w-fit line-clamp-1 bg-[#0f3d22] shadow-sm py-2 px-4">
          <MdAdminPanelSettings className="size-5" />
            <span>مسئول</span>
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default HomeNav;
