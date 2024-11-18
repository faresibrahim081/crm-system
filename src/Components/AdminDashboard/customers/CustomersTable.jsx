import StatuesModal from "./StatuesModal";
import { useState, useEffect } from "react";
import EditCustomerModal from "./EditCustomerModal";
import Delete from "./Delete";

const initialData = [
  {
    id: "#101",
    createdAt: "2024-09-15T10:00:00Z",
    name: "أحمد إبراهيم",
    website: "site1.com",
    email: "ahmed@site1.com",
  },
  {
    id: "#102",
    createdAt: "2024-10-12T10:00:00Z",
    name: "سارة حسين",
    website: "site2.com",
    email: "sara@site2.com",
  },
  {
    id: "#103",
    createdAt: "2024-08-25T10:00:00Z",
    name: "خالد سمير",
    website: "site3.com",
    email: "khaled@site3.com",
  },
  {
    id: "#105",
    createdAt: "2024-11-05T10:00:00Z",
    name: "ليلى محمود",
    website: "site4.com",
    email: "laila@site4.com",
  },
  {
    id: "#104",
    createdAt: "2024-07-30T10:00:00Z",
    name: "يوسف علي",
    website: "site5.com",
    email: "yousef@site5.com",
  },
  {
    id: "#104",
    createdAt: "2024-07-30T10:00:00Z",
    name: "يوسف علي",
    website: "site5.com",
    email: "yousef@site5.com",
  },
  {
    id: "#104",
    createdAt: "2024-07-30T10:00:00Z",
    name: "يوسف علي",
    website: "site5.com",
    email: "yousef@site5.com",
  },
  {
    id: "#104",
    createdAt: "2024-07-30T10:00:00Z",
    name: "يوسف علي",
    website: "site5.com",
    email: "yousef@site5.com",
  },
  {
    id: "#104",
    createdAt: "2024-07-30T10:00:00Z",
    name: "يوسف علي",
    website: "site5.com",
    email: "yousef@site5.com",
  },
  {
    id: "#104",
    createdAt: "2024-07-30T10:00:00Z",
    name: "يوسف علي",
    website: "site5.com",
    email: "yousef@site5.com",
  },
  {
    id: "#104",
    createdAt: "2024-07-30T10:00:00Z",
    name: "يوسف علي",
    website: "site5.com",
    email: "yousef@site5.com",
  },
  {
    id: "#104",
    createdAt: "2024-07-30T10:00:00Z",
    name: "يوسف علي",
    website: "site5.com",
    email: "yousef@site5.com",
  },
  {
    id: "#104",
    createdAt: "2024-07-30T10:00:00Z",
    name: "يوسف علي",
    website: "site5.com",
    email: "yousef@site5.com",
  },
  {
    id: "#104",
    createdAt: "2024-07-30T10:00:00Z",
    name: "يوسف علي",
    website: "site5.com",
    email: "yousef@site5.com",
  },
  {
    id: "#104",
    createdAt: "2024-07-30T10:00:00Z",
    name: "يوسف علي",
    website: "site5.com",
    email: "yousef@site5.com",
  },
  {
    id: "#104",
    createdAt: "2024-07-30T10:00:00Z",
    name: "يوسف علي",
    website: "site5.com",
    email: "yousef@site5.com",
  },
  {
    id: "#104",
    createdAt: "2024-07-30T10:00:00Z",
    name: "يوسف علي",
    website: "site5.com",
    email: "yousef@site5.com",
  },
];

const Table = ({ searchId, sortOrder }) => {
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

  const handleSave = (id, updatedCustomer) => {
    setData((prevData) =>
      prevData.map((cust) =>
        cust.id === id ? { ...cust, ...updatedCustomer } : cust
      )
    );
  };

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((customer) => customer.id !== id));
  };

  return (
    <div className="w-full mx-auto bg-[#292929] text-white p-4 h-full">
      <div className="w-full mx-auto bg-black rounded-lg shadow-md">
        {/* Add padding for breathing space */}
        <div className="overflow-auto rounded-lg h-[75vh]">
          <table className="w-full text-sm border-collapse">
            <thead className="sticky top-0 bg-[#333] shadow-md">
              <tr>
                <th className="p-4 text-center text-gray-300 border-b border-gray-500">
                  الإجراء
                </th>
                <th className="p-4 text-center text-gray-300 border-b border-gray-500">
                  الحالة
                </th>
                <th className="p-4 text-right text-gray-300 border-b border-gray-500">
                  تاريخ الإنشاء
                </th>
                <th className="p-4 text-right text-gray-300 border-b border-gray-500">
                  الموقع الإلكتروني
                </th>
                <th className="p-4 text-right text-gray-300 border-b border-gray-500">
                  البريد الإلكتروني
                </th>
                <th className="p-4 text-right text-gray-300 border-b border-gray-500">
                  العميل
                </th>
                <th className="p-4 text-right text-gray-300 border-b border-gray-500">
                  الرمز التعريفي
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-500 hover:bg-[#444]"
                >
                  <td className="p-4 text-center">
                    <div className="flex justify-center gap-2">
                      <Delete onDelete={() => handleDelete(item.id)} />
                      <EditCustomerModal
                        customer={item}
                        onSave={(updatedData) =>
                          handleSave(item.id, updatedData)
                        }
                      />
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <StatuesModal />
                  </td>
                  <td className="p-4 text-right">{item.createdAt}</td>
                  <td className="p-4 text-right">{item.website}</td>
                  <td className="p-4 text-right">{item.email}</td>
                  <td className="p-4 text-right">{item.name}</td>
                  <td className="p-4 text-right">{item.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
