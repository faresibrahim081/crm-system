import React , {useState} from "react";
import DeleteButton from "./DeleteButton";
import ReplyButton from "./ReplyButton";


const AdminTicket = () => {
  const [tickets, setTickets] = useState([
    {
      sender: "ساره داود",
      title: "مشكلة في مرحلة التصميم الجرافيكي",
      notes: 
        `أعجبني التصميم بشكل عام، ولكن عندي بعض الملاحظات الصغيرة للتعديل. بالنسبة للألوان، أتمنى لو تم تخفيف اللون الأزرق قليلاً ليكون مريحاً للعين ويتناسب أكثر مع هوية علامتنا.`,
      
    },
    {
      sender: "اسم العميل الثاني",
      title: "طلب تعديل الشعار",
      notes: 
        `أتمنى تغيير الخط المستخدم في الشعار ليكون أكثر حداثة ووضوحاً، وتقليل الحجم قليلاً.`,
      
    },
    {
      sender: "اسم العميل الثاني",
      title: "طلب تعديل الشعار",
      notes: 
        `أتمنى تغيير الخط المستخدم في الشعار ليكون أكثر حداثة ووضوحاً، وتقليل الحجم قليلاً.`,
      
    },
  ]);
  const API_URL = "https://example.com/api"; // Replace with your actual API URL

  return (
    <div className="flex items-center justify-center py-4 text-white">
      <div className=" space-y-4 overflow-y-auto h-[70vh]">
        {tickets.map((ticket, index) => (
          <div key={index} className="border border-green-600 rounded-xl py-4 bg-black mx-3 shadow-md">
            <div className="text-right px-4">
              <div className="flex justify-between mb-2 items-center">
                <DeleteButton tickets={tickets} setTickets={setTickets} ticketIndex={index}/>
                <h2 className="mb-1 text-lg font-bold">ملاحظة</h2>
                </div>
              <hr className="mb-2 border-0 h-[0.5px] bg-green-500" />
              <div className="mb-4">
                <span className="font-bold text-white">مرسل من:</span> {ticket.sender}
              </div>
              <div className="mb-4">
                <span className="font-bold text-white">العنوان:</span> {ticket.title}
              </div>
              <div className="eading-relaxed text-white whitespace-pre-wrap">
              <p className="mb-2">
                    <span className="font-bold text-white">ملاحظة:</span> {ticket.notes}
                  </p>
              </div>
              <ReplyButton ticket={ticket} API_URL={API_URL} />
              {/* <div className="leading-relaxed text-white whitespace-pre-wrap">
                {ticket.notes.map((note, noteIndex) => (
                  <p key={noteIndex} className="mb-2">
                    <span className="font-bold text-white">ملاحظة:</span> {note}
                  </p>
                ))}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminTicket;
