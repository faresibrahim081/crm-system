import React from "react";

const AdminTicket = () => {
  // Sample data that could later be fetched or passed in as props
  const ticketData = {
    sender: "اسم العميل",
    title: "مشكلة في مرحلة التصميم الجرافيكي",
    notes: [
      ` أعجبني التصميم بشكل عام، ولكن عندي بعض الملاحظات الصغيرة للتعديل
      بالنسبة للألوان، أتمنى لو تم تخفيف اللون الأزرق قليلاً ليكون مريحاً للعين ويتناسب أكثر مع هوية علامتنا
      .كذلك الخط، أن يتماشى المستخدم في العنوان بدون تباين حاد، ويفضل أن يكون أكثر وضوحاً ويعكس جانباً عملياً واحترافياً
`,
    ],
  };

  return (
    <div className="flex items-center justify-center py-4  text-white ">
      <div className="border border-green-600 rounded-xl py-4 bg-black shadow-md w-[95%]">
        <div className="text-right ">
          <h2 className="px-4 mb-1 text-lg  font-bold">ملاحظة</h2>
          <hr className="mb-2 border-0 h-[0.5px] bg-green-500" />
          <div className="mb-4 ">
            <span className="px-4 font-bold text-white">مرسل من:</span>{" "}
            {ticketData.sender}
          </div>
          <div className="mb-4 ">
            <span className="px-4 font-bold text-white">العنوان:</span> {ticketData.title}
          </div>
          <div className="leading-relaxed text-white whitespace-pre-wrap">
            {ticketData.notes.map((note, index) => (
              <p key={index} className="px-4 mb-2">
                <span className="font-bold text-white">ملاحظة:</span> {note}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTicket;
