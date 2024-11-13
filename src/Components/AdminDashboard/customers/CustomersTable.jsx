import PropTypes from "prop-types";
import { useState } from "react";
import EditCustomerModal from "./EditCustomerModal";
import Delete from "./Delete";
import StatuesModal from "./StatuesModal";

const initialData = [
  {
    id: "#156",
    createdAt: "2024-10-30T10:00:00Z",
    name: "محمد علي",
    website: "example1.com",
    email: "mohamed1@example.com",
  },
  {
    id: "#157",
    createdAt: "2024-10-31T11:00:00Z",
    name: "أحمد حسن",
    website: "example2.com",
    email: "ahmed@example.com",
  },
  {
    id: "#158",
    createdAt: "2024-11-01T12:00:00Z",
    name: "سارة إبراهيم",
    website: "example3.com",
    email: "sara@example.com",
  },
  {
    id: "#159",
    createdAt: "2024-11-02T13:00:00Z",
    name: "تسنيم العجمي",
    website: "example4.com",
    email: "tasnim@example.com",
  },
  {
    id: "#160",
    createdAt: "2024-11-03T14:00:00Z",
    name: "يوسف عبد الرحمن",
    website: "example5.com",
    email: "youssef@example.com",
  },
  {
    id: "#161",
    createdAt: "2024-11-04T15:00:00Z",
    name: "خالد محمود",
    website: "example6.com",
    email: "khaled@example.com",
  },
  {
    id: "#162",
    createdAt: "2024-11-05T16:00:00Z",
    name: "منى مصطفى",
    website: "example7.com",
    email: "mona@example.com",
  },
  {
    id: "#163",
    createdAt: "2024-11-06T17:00:00Z",
    name: "فاطمة الزهراء",
    website: "example8.com",
    email: "fatma@example.com",
  },
  {
    id: "#164",
    createdAt: "2024-11-07T18:00:00Z",
    name: "عبد الله أحمد",
    website: "example9.com",
    email: "abdallah@example.com",
  },
  {
    id: "#165",
    createdAt: "2024-11-08T19:00:00Z",
    name: "لينا سعيد",
    website: "example10.com",
    email: "lina@example.com",
  },
  {
    id: "#166",
    createdAt: "2024-11-09T20:00:00Z",
    name: "عمر محمد",
    website: "example11.com",
    email: "omar@example.com",
  },
  {
    id: "#167",
    createdAt: "2024-11-10T21:00:00Z",
    name: "حنين عادل",
    website: "example12.com",
    email: "hanin@example.com",
  },
];

const CustomersTable = () => {
  const [data, setData] = useState(initialData);

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
      <div className="w-full p-4 mx-auto bg-black rounded-lg shadow-md">
        {/* Table for large screens */}
        <div className="hidden overflow-y-auto lg:block h-[72vh]">
          <table className="w-full text-sm border-collapse" dir="rtl">
            <thead className="sticky top-0 left-0">
              <tr className="bg-[rgb(41,41,41)]">
                <th className="px-4 py-3 border-b border-gray-700">
                  الرمز التعريفي
                </th>
                <th className="px-4 py-3 text-center border-b border-gray-700">
                  تاريخ الإنشاء
                </th>
                <th className="px-4 py-3 text-center border-b border-gray-700">
                  العميل
                </th>
                <th className="px-4 py-3 border-b border-gray-700">
                  الموقع الإلكتروني
                </th>
                <th className="px-4 py-3 text-center border-b border-gray-700">
                  البريد الإلكتروني
                </th>
                <th className="px-4 py-3 text-center border-b border-gray-700">
                  الحالة
                </th>
                <th className="px-4 py-3 text-center border-b border-gray-700">
                  الإجراء
                </th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((customer) => (
                  <tr key={customer.id} className="border-b border-gray-700">
                    <td className="px-4 py-3 text-center border-gray-700">
                      {customer.id}
                    </td>
                    <td className="px-4 py-3 border-gray-700">
                      {customer.createdAt}
                    </td>
                    <td className="px-4 py-3 border-gray-700">
                      {customer.name}
                    </td>
                    <td className="px-4 py-3 border-gray-700">
                      {customer.website}
                    </td>
                    <td className="px-4 py-3 border-gray-700">
                      {customer.email}
                    </td>
                    <td className="px-4 py-3 border-gray-700">
                      <StatuesModal />
                    </td>
                    <td className="px-4 py-3 border-gray-700">
                      <div className="flex justify-center gap-2">
                        <EditCustomerModal
                          customer={customer}
                          onSave={(updatedData) =>
                            handleSave(customer.id, updatedData)
                          }
                        />
                        <Delete onDelete={() => handleDelete(customer.id)} />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="py-4 text-center">
                    لا توجد نتائج
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Card layout for mobile */}
        <div className="lg:hidden" dir="rtl">
          {data.length > 0 ? (
            data.map((customer) => (
              <div
                key={customer.id}
                className="p-4 mb-4 bg-[rgb(41,41,41)] rounded-lg shadow-md"
              >
                <div className="flex justify-between ">
                  <span className="font-bold">الرمز التعريفي:</span>
                  <span>{customer.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">تاريخ الإنشاء:</span>
                  <span>{customer.createdAt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">العميل:</span>
                  <span>{customer.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">الموقع الإلكتروني:</span>
                  <span>{customer.website}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">البريد الإلكتروني:</span>
                  <span>{customer.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">الحالة:</span>
                  <StatuesModal />
                </div>
                <div className="flex justify-between gap-2 mt-4">
                  <EditCustomerModal
                    customer={customer}
                    onSave={(updatedData) =>
                      handleSave(customer.id, updatedData)
                    }
                  />
                  <Delete onDelete={() => handleDelete(customer.id)} />
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 bg-gray-800 rounded-lg">
              <p className="text-center">لا توجد نتائج</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Adding PropTypes validation
CustomersTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CustomersTable;
