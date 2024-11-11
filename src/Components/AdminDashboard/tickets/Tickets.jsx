import React from "react";

const AdminTicket = () => {
  // Sample data with multiple tickets
  const tickets = [
    {
      sender: "اسم العميل الأول",
      title: "مشكلة في مرحلة التصميم الجرافيكي",
      notes: [
        `أعجبني التصميم بشكل عام، ولكن عندي بعض الملاحظات الصغيرة للتعديل. بالنسبة للألوان، أتمنى لو تم تخفيف اللون الأزرق قليلاً ليكون مريحاً للعين ويتناسب أكثر مع هوية علامتنا.`,
      ],
    },
    {
      sender: "اسم العميل الثاني",
      title: "طلب تعديل الشعار",
      notes: [
        `أتمنى تغيير الخط المستخدم في الشعار ليكون أكثر حداثة ووضوحاً، وتقليل الحجم قليلاً.`,
      ],
    },
  ];

  return (
    <div className="flex items-center justify-center py-4 text-white">
      <div className="w-[95%] space-y-4">
        {tickets.map((ticket, index) => (
          <div key={index} className="border border-green-600 rounded-xl py-4 bg-black shadow-md">
            <div className="text-right px-4">
              <h2 className="mb-1 text-lg font-bold">ملاحظة</h2>
              <hr className="mb-2 border-0 h-[0.5px] bg-green-500" />
              <div className="mb-4">
                <span className="font-bold text-white">مرسل من:</span> {ticket.sender}
              </div>
              <div className="mb-4">
                <span className="font-bold text-white">العنوان:</span> {ticket.title}
              </div>
              <div className="leading-relaxed text-white whitespace-pre-wrap">
                {ticket.notes.map((note, noteIndex) => (
                  <p key={noteIndex} className="mb-2">
                    <span className="font-bold text-white">ملاحظة:</span> {note}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminTicket;
