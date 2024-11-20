import { useState, useEffect } from "react";
import ChatModal from "./ChatModal";

const initialData = [
  {
    id: "1",
    createdAt: "2024-09-15T10:00:00Z",
    name: "محمد علي",
    website: "site1.com",
    email: "mohamed@site1.com",
  },
  {
    id: "2",
    createdAt: "2024-10-12T10:00:00Z",
    name: "نورا حسن",
    website: "site2.com",
    email: "nora@site2.com",
  },
  {
    id: "3",
    createdAt: "2024-08-25T10:00:00Z",
    name: "عمر خالد",
    website: "site3.com",
    email: "omar@site3.com",
  },
  {
    id: "4",
    createdAt: "2024-11-05T10:00:00Z",
    name: "فاطمة سعيد",
    website: "site4.com",
    email: "fatima@site4.com",
  },
  {
    id: "5",
    createdAt: "2024-07-30T10:00:00Z",
    name: "زياد محمود",
    website: "site5.com",
    email: "ziad@site5.com",
  },
  {
    id: "6",
    createdAt: "2024-06-20T09:30:00Z",
    name: "هبة أحمد",
    website: "site6.com",
    email: "hiba@site6.com",
  },
  {
    id: "7",
    createdAt: "2024-05-18T14:15:00Z",
    name: "أمير يوسف",
    website: "site7.com",
    email: "amir@site7.com",
  },
  {
    id: "8",
    createdAt: "2024-04-10T11:45:00Z",
    name: "مريم إبراهيم",
    website: "site8.com",
    email: "mariam@site8.com",
  },
  {
    id: "9",
    createdAt: "2024-03-22T08:00:00Z",
    name: "عبد الله سمير",
    website: "site9.com",
    email: "abdullah@site9.com",
  },
  {
    id: "10",
    createdAt: "2024-02-14T13:20:00Z",
    name: "رنا عمر",
    website: "site10.com",
    email: "rana@site10.com",
  },
  {
    id: "11",
    createdAt: "2024-01-30T16:40:00Z",
    name: "حسن مصطفى",
    website: "site11.com",
    email: "hassan@site11.com",
  },
  {
    id: "12",
    createdAt: "2024-12-25T12:00:00Z",
    name: "ليلى شريف",
    website: "site12.com",
    email: "leila@site12.com",
  },
  {
    id: "13",
    createdAt: "2024-11-11T07:45:00Z",
    name: "خالد عبد الله",
    website: "site13.com",
    email: "khaled@site13.com",
  },
  {
    id: "14",
    createdAt: "2024-10-20T19:30:00Z",
    name: "سهى محمد",
    website: "site14.com",
    email: "soha@site14.com",
  },
  {
    id: "15",
    createdAt: "2024-09-05T05:15:00Z",
    name: "أيمن سامي",
    website: "site15.com",
    email: "ayman@site15.com",
  },
];

function AdminTableChat({ searchId, sortOrder }) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    if (searchId) {
      setData(
        initialData.filter((item) => item.id.toString().includes(searchId))
      );
    } else {
      setData(initialData); // Reset data if searchId is cleared
    }
  }, [searchId, initialData]);

  // Sort data
  if (sortOrder === "asc") {
    data.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOrder === "desc") {
    data.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <div className="w-full mx-auto bg-[#292929] text-white p-4 h-full">
      <div className="w-full mx-auto bg-black rounded-lg shadow-md">
        {/* Add padding for breathing space */}
        <div className="overflow-auto rounded-lg h-[75vh]">
          <table className="w-full text-sm border-collapse">
            <thead className="sticky top-0 bg-[#333] shadow-md">
              <tr>
                <th className="p-4 text-center text-gray-300 border-b border-gray-500">
                  أرسل رسالة
                </th>
                <th className="p-4 text-center text-gray-300 border-b border-gray-500">
                  تاريخ الإنشاء
                </th>
                <th className="p-4 text-center text-gray-300 border-b border-gray-500">
                  الموقع الإلكتروني
                </th>
                <th className="p-4 text-center text-gray-300 border-b border-gray-500">
                  البريد الإلكتروني
                </th>
                <th className="p-4 text-center text-gray-300 border-b border-gray-500">
                  العميل
                </th>
                <th className="p-4 text-center text-gray-300 border-b border-gray-500">
                  الرمز التعريفي
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  className="border-b border-gray-500 hover:bg-[#444]"
                  key={item.id}
                >
                  <td
                    className="p-3 text-center md:border-none"
                    data-label="Action"
                  >
                    <ChatModal />
                  </td>
                  <td className="p-4 text-center" data-label="Created At">
                    {item.createdAt}
                  </td>
                  <td className="p-4 text-center" data-label="Website">
                    {item.website}
                  </td>
                  <td className="p-4 text-center" data-label="Email">
                    {item.email}
                  </td>
                  <td className="p-4 text-center" data-label="Customer">
                    {item.name}
                  </td>
                  <td className="p-4 text-center" data-label="ID">
                    {item.id}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminTableChat;
