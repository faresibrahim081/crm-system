import React from "react";
import Card from "../../Components/UserDashboard/Card";
import { MdAccountCircle } from "react-icons/md";
import ProjectDetails from "../../Components/UserDashboard/ProjectDetails";
import YourTime from "../../Components/UserDashboard/YourTime";
import ChatModal from "../../Components/AdminDashboard/chats/ChatModal";
function UserControl() {
  const cards = [
    {
      title: "البريد الإلكتروني",
      content: "ahmed@email.com",
      icon: (
        <MdAccountCircle className="w-20 text-black bg-green-800 rounded-full h-25" />
      ),
    },
    {
      title: " تاريخ الانشاء",
      content: "24-11-2024",
      icon: <MdAccountCircle className="w-6 h-6" />,
    },
    {
      title: "رابط الموقع",
      content: "ahmed.com",
      icon: <MdAccountCircle className="w-6 h-6" />,
    },
    {
      title: "العنوان",
      content: "شارع احمد الشرقي المتقاطع من شارع احمد الشرقي...",
      icon: <MdAccountCircle className="w-6 h-6" />,
    },
  ];
  const detail = [
    {
      title: "اداره الحساب",
      content: "مكتمل",
      icon: <MdAccountCircle className="w-6 h-6" />,
    },
    {
      title: " التصميم",
      content: "قيد التنفيذ",
      icon: <MdAccountCircle className="w-6 h-6" />,
    },
    {
      title: " البرمجه",
      content: "لم يتم البدء",
      icon: <MdAccountCircle className="w-6 h-6" />,
    },
  ];
  const Time = [
    { day: "السبت" },
    { day: "الاحد" },
    { day: "الاثنين" },
    { day: "الثلاثاء" },
    { day: "الاربعاء" },
    { day: "الخميس" },
  ];
  const chat = [
    { id: 1, content: "admin 1", email: "admin1@gmail.com" },
    { id: 2, content: "admin 2", email: "admin2@gmail.com" },
    { id: 3, content: "admin 3", email: "admin3@gmail.com" },
    { id: 4, content: "admin 4", email: "admin4@gmail.com" },
  ];
  return (
    <div className="UserControl bg-[#292929] text-white p-10 ">
      <div className="flex justify-between top ">
        <div>
          <h3 className="text-[30px] mb-5">لوحه التحكم</h3>
          <p className="pr-4 text-[#959595]">مرحبا ....</p>
        </div>
        <button className="text-[red]">تسجيل الخروج</button>
      </div>
      <div className="mt-8 mr-5 middle">
        <h5 className="mb-5">بياناتي</h5>
        <div className="grid grid-cols-1 gap-4 data md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              content={card.content}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
      <div className="mt-8 mr-5 ">
        <h5 className="mb-5">تفاصيل المشروع</h5>
        <div className="grid grid-cols-1 gap-4 data md:grid-cols-2 lg:grid-cols-3">
          {detail.map((detail, index) => (
            <ProjectDetails
              key={index}
              title={detail.title}
              content={detail.content}
              icon={detail.icon}
            />
          ))}
        </div>
      </div>
      <div className="mt-8 mr-5 ">
        <h5 className="mb-5"> تحدث مع احد المسئولين</h5>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>مسئول</th>
                <th> البريد الالكتروني</th>
                <th> تحدث </th>
              </tr>
            </thead>
            <tbody>
              {chat.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.content}</td>
                  <td>{item.email}</td>
                  <td>
                    <ChatModal />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-8 mr-5 ">
        <h5 className="mb-5">الاوقات المتاحه </h5>
        <div className="grid grid-cols-1 gap-4 data md:grid-cols-2 lg:grid-cols-3">
          {Time.map((card, index) => (
            <YourTime
              key={index}
              title={card.title}
              content={card.content}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
      <h5 className="mb-5">الاوقات المحجوزه </h5>
      <h5 className="mb-5"> العقود </h5>
    </div>
  );
}

export default UserControl;
