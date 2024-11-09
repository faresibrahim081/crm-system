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
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="border border-green-600 rounded-xl py-4 bg-gray-50 shadow-md w-[90%]">
        <div className="text-right">
          <h2 className="font-bold text-lg mb-1 px-4">ملاحظة</h2>
          <hr className="mb-2 border-0 h-[0.5px] bg-green-500"/>
          <div className=" mb-4">
            <span className=" px-4 font-bold">مرسل من:</span> {ticketData.sender}
          </div>
          <div className=" mb-4">
            <span className="font-bold px-4">العنوان:</span> {ticketData.title}
          </div>
          <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
            
            {ticketData.notes.map((note, index) => (
                
              <p key={index} className="mb-2 px-4"> 
               <span className="font-bold">ملاحظة:</span> {note}
              </p>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTicket;