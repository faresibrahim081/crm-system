import Card from "../../Components/UserDashboard/Card";
import { RiAccountCircleFill } from "react-icons/ri";
import ProjectDetails from "../../Components/UserDashboard/ProjectDetails";
import YourTime from "../../Components/UserDashboard/YourTime";
import ChatModal from "../../Components/AdminDashboard/chats/ChatModal";
function UserDashboard() {
  const cards = [
    {
      title: "البريد الإلكتروني",
      content: "ahmed@email.com",
      icon: <RiAccountCircleFill className="w-6 h-6" />,
    },
    {
      title: "البريد الإلكتروني",
      content: "ahmed@email.com",
      icon: <RiAccountCircleFill className="w-6 h-6" />,
    },
    {
      title: "رابط الموقع",
      content: "ahmed.com",
      icon: <RiAccountCircleFill className="w-6 h-6" />,
    },
    {
      title: "العنوان",
      content: "شارع احمد الشرقي المتقاطع من شارع احمد الشرقي...",
      icon: <RiAccountCircleFill className="w-6 h-6" />,
    },
  ];
  const detail = [
    {
      title: "اداره الحساب",
      content: "مكتمل",
      icon: <RiAccountCircleFill className="w-6 h-6" />,
    },
    {
      title: " التصميم",
      content: "قيد التنفيذ",
      icon: <RiAccountCircleFill className="w-6 h-6" />,
    },
    {
      title: " البرمجه",
      content: "لم يتم البدء",
      icon: <RiAccountCircleFill className="w-6 h-6" />,
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
    <div className="UserControl bg-[#292929] text-white p-10 text-right">
      <div className="flex items-center justify-between">
        <h5 className="text-[red]">تسجيل الخروج</h5>
        <div className="text-right">
          <h3 className="text-[30px] mb-5">لوحة التحكم</h3>
          <p className="pr-4 text-[#959595]">مرحبا اسم العميل</p>
        </div>
      </div>
      <div className="mt-8 mr-5">
        <h5 className="mb-5">بياناتي</h5>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
      <div className="mt-8 mr-5">
        <h5 className="mb-5">تفاصيل المشروع</h5>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
      <div className="mt-8 mr-5">
        <h5 className="mb-5">تحدث مع احد المسئولين</h5>
        <div className="overflow-x-auto rounded-lg">
          <table className="table text-right ">
            <thead className="sticky top-0 bg-[#333] shadow-md">
              <tr>
                <th className="p-4 text-center text-gray-300 border-b border-gray-500">
                  أرسل رسالة
                </th>
                <th className="p-4 text-center text-gray-300 border-b border-gray-500">
                  البريد الإلكتروني
                </th>
                <th className="p-4 text-center text-gray-300 border-b border-gray-500">
                  المسؤل{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {chat.map((item) => (
                <tr
                  className="border-b border-gray-500 hover:bg-[#444]"
                  key={item.id}
                >
                  <td className="p-4 text-center">
                    <ChatModal />
                  </td>
                  <td className="p-4 text-center">{item.email}</td>
                  <td className="p-4 text-center">{item.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-8 mr-5">
        <h5 className="mb-5">الاوقات المتاحة</h5>{" "}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Time.map((card, index) => (
            <YourTime key={index} title={card.day} />
          ))}
        </div>
      </div>
      <h5 className="mb-5">الاوقات المحجوزة</h5>
      <h5 className="mb-5">العقود</h5>
    </div>
  );
}

export default UserDashboard;
