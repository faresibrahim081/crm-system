import React from "react";
import Card from "./Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ProjectDetails from "../Components/UserDshboard/ProjectDetails";
import YourTime from "../Components/UserDshboard/YourTime";
import Chat from "./Chat";
function UserControl() {
  const cards = [
    {
      title: "البريد الإلكتروني",
      content: "ahmed@email.com",
      icon: <AccountCircleIcon className="w-6 h-6" />,
    },
    {
      title: "البريد الإلكتروني",
      content: "ahmed@email.com",
      icon: <AccountCircleIcon className="w-6 h-6" />,
    },
    {
      title: "رابط الموقع",
      content: "ahmed.com",
      icon: <AccountCircleIcon className="w-6 h-6" />,
    },
    {
      title: "العنوان",
      content: "شارع احمد الشرقي المتقاطع من شارع احمد الشرقي...",
      icon: <AccountCircleIcon className="w-6 h-6" />,
    },
  ];
  const detail = [
    {
      title: "اداره الحساب",
      content: "مكتمل",
      icon: <AccountCircleIcon className="w-6 h-6" />,
    },
    {
      title: " التصميم",
      content: "قيد التنفيذ",
      icon: <AccountCircleIcon className="w-6 h-6" />,
    },
    {
      title: " البرمجه",
      content: "لم يتم البدء",
      icon: <AccountCircleIcon className="w-6 h-6" />,
    },
  ];
  const Time = [
    { day: "السبت" },
    { day: "السبت" },
    { day: "السبت" },
    { day: "السبت" },
    { day: "السبت" },
    { day: "السبت" },
  ];
  const chat = [
    { id: 1, content: "admin", email: "aaaa@gmail.com" },
    { id: 2, content: "admin", email: "aaaa@gmail.com" },
    { id: 3, content: "admin", email: "aaaa@gmail.com" },
    { id: 4, content: "admin", email: "aaaa@gmail.com" },
  ];
  return (
    <div className="UserControl bg-[#292929] text-white p-10 ">
      <div className="flex justify-between top ">
        <div>
          <h3 className="text-[30px] mb-5">لوحه التحكم</h3>
          <p className="pr-4 text-[#959595]">مرحبا ....</p>
        </div>
        <h5 className="text-[red]">تسجيل الخروج</h5>
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
                    <Chat />
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
