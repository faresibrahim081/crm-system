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
    <div className="bg-[rgb(41,41,41)] text-white min-h-screen p-4 flex-grow flex-col lg:flex-row">
      <div className="w-full p-4 mx-auto bg-black rounded-lg  shadow-md">
        <div className="hidden overflow-y-auto lg:block h-[72vh] ">
          <table className="w-full text-sm border-collapse ">
            <thead className="sticky top-0 left-0">
              <tr className="hidden md:table-row">
                <th className="p-3 text-center text-gray-300 bg-black border-b border-gray-500 min-w-[100px]">
                  الإجراء
                </th>
                <th className="p-3 text-center text-gray-300 bg-black border-b border-gray-500 min-w-[100px]">
                  الحالة
                </th>
                <th className="p-3 text-right text-gray-300 bg-black border-b border-gray-500 min-w-[150px]">
                  تاريخ الإنشاء
                </th>
                <th className="p-3 text-right text-gray-300 bg-black border-b border-gray-500 min-w-[150px]">
                  الموقع الإلكتروني
                </th>
                <th className="p-3 text-right text-gray-300 bg-black border-b border-gray-500 min-w-[150px]">
                  البريد الإلكتروني
                </th>
                <th className="p-3 text-right text-gray-300 bg-black border-b border-gray-500 min-w-[150px]">
                  العميل
                </th>
                <th className="p-3 text-right text-gray-300 bg-black border-b border-gray-500 min-w-[100px]">
                  ID
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  className="block w-full border-b border-gray-500 md:table-row md:border-none"
                  key={item.id}
                >
                  <td
                    className="p-3 text-center md:border-none"
                    data-label="Action"
                  >
                    <td className="px-4 py-3 border-gray-700">
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
                  </td>
                  <td
                    className="p-3 text-center md:border-none"
                    data-label="Status"
                  >
                    <StatuesModal />
                  </td>

                  <td
                    className="p-3 md:text-right md:border-none"
                    data-label="Created At"
                  >
                    {item.createdAt}
                  </td>
                  <td
                    className="p-3 md:text-right md:border-none"
                    data-label="Website"
                  >
                    {item.website}
                  </td>
                  <td
                    className="p-3 md:text-right md:border-none"
                    data-label="Email"
                  >
                    {item.email}
                  </td>
                  <td
                    className="p-3 md:text-right md:border-none"
                    data-label="Customer"
                  >
                    {item.name}
                  </td>
                  <td
                    className="p-3 md:text-right md:border-none"
                    data-label="ID"
                  >
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
};

export default Table;
