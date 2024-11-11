import StatuesModal from "./StatuesModal";
import { FaEdit, FaTrash } from "react-icons/fa";

const initialData = [
  {
    id: "#157",
    createdAt: "2024-10-31T14:15:00Z",
    name: "Jane Smith",
    website: "janesmith.com",
    email: "jane@janesmith.com",
  },
  {
    id: "#158",
    createdAt: "2024-11-01T09:30:00Z",
    name: "Alice Johnson",
    website: "alicejohnson.dev",
    email: "alice@alicejohnson.dev",
  },
  {
    id: "#159",
    createdAt: "2024-11-02T11:45:00Z",
    name: "Bob Williams",
    website: "bobwilliams.com",
    email: "bob@bobwilliams.com",
  },
  {
    id: "#160",
    createdAt: "2024-11-03T16:00:00Z",
    name: "Chris Brown",
    website: "chrisbrown.io",
    email: "chris@chrisbrown.io",
  },
  {
    id: "#161",
    createdAt: "2024-11-04T08:30:00Z",
    name: "Diana Garcia",
    website: "dianagarcia.com",
    email: "diana@dianagarcia.com",
  },
  {
    id: "#162",
    createdAt: "2024-11-05T13:20:00Z",
    name: "Edward Martinez",
    website: "edwardmartinez.dev",
    email: "edward@edwardmartinez.dev",
  },
  {
    id: "#163",
    createdAt: "2024-11-06T07:50:00Z",
    name: "Fiona Lee",
    website: "fionalee.com",
    email: "fiona@fionalee.com",
  },
  {
    id: "#164",
    createdAt: "2024-11-07T15:25:00Z",
    name: "George Adams",
    website: "georgeadams.io",
    email: "george@georgeadams.io",
  },
  {
    id: "#165",
    createdAt: "2024-11-08T11:10:00Z",
    name: "Hannah Wilson",
    website: "hannahwilson.dev",
    email: "hannah@hannahwilson.dev",
  },
  {
    id: "#166",
    createdAt: "2024-11-09T17:05:00Z",
    name: "Ian Clark",
    website: "ianclark.com",
    email: "ian@ianclark.com",
  },
];

const Table = ({ searchId, sortOrder }) => {
  let filteredData = initialData;

  // Filter by ID
  if (searchId) {
    filteredData = filteredData.filter((item) =>
      item.id.toString().includes(searchId)
    );
  }

  // Sort data
  if (sortOrder === "asc") {
    filteredData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOrder === "desc") {
    filteredData.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <div className="bg-[rgb(41,41,41)] text-white min-h-screen p-4 flex-grow ">
      <div className="max-w-full p-4 mx-auto overflow-x-auto bg-black rounded-lg shadow-md">
        <table className="w-full text-base border-collapse md:text-sm">
          <thead>
            <tr className="hidden md:table-row">
              <th className="p-3 text-right text-gray-300 bg-black border-b border-gray-500 min-w-[100px]">
                ID
              </th>
              <th className="p-3 text-right text-gray-300 bg-black border-b border-gray-500 min-w-[150px]">
                تاريخ الإنشاء
              </th>
              <th className="p-3 text-right text-gray-300 bg-black border-b border-gray-500 min-w-[150px]">
                العميل
              </th>
              <th className="p-3 text-right text-gray-300 bg-black border-b border-gray-500 min-w-[150px]">
                الموقع الإلكتروني
              </th>
              <th className="p-3 text-right text-gray-300 bg-black border-b border-gray-500 min-w-[150px]">
                البريد الإلكتروني
              </th>
              <th className="p-3 text-center text-gray-300 bg-black border-b border-gray-500 min-w-[100px]">
                الحالة
              </th>
              <th className="p-3 text-center text-gray-300 bg-black border-b border-gray-500 min-w-[100px]">
                الإجراء
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr
                className="block w-full border-b border-gray-500 md:table-row md:border-none"
                key={item.id}
              >
                <td
                  className="p-3 md:text-right md:border-none"
                  data-label="ID"
                >
                  {item.id}
                </td>
                <td
                  className="p-3 md:text-right md:border-none"
                  data-label="Created At"
                >
                  {item.createdAt}
                </td>
                <td
                  className="p-3 md:text-right md:border-none"
                  data-label="Customer"
                >
                  {item.name}
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
                  className="p-3 text-center md:border-none"
                  data-label="Status"
                >
                  <StatuesModal />
                </td>
                <td
                  className="p-3 text-center md:border-none"
                  data-label="Action"
                >
                  <div className="flex justify-center gap-2">
                    <FaEdit className="text-gray-500 transition duration-200 cursor-pointer hover:text-blue-500" />
                    <FaTrash className="text-gray-500 transition duration-200 cursor-pointer hover:text-red-500" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
