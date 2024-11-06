import { useState } from "react";
import { FaSearch, FaEdit, FaTrash } from "react-icons/fa";
import Select from "react-select";
import "./CustomersT.css";
import ShowStatuesModal from "./ShowStatuesModal";

const initialData = [
  {
    id: "#156",
    createdAt: "2024-10-30T10:00:00Z",
    name: "John Doe",
    website: "example.com",
    email: "john@example.com",
  },
  {
    id: "#247",
    createdAt: "2024-10-30T11:00:00Z",
    name: "Jane Doe",
    website: "sample.com",
    email: "jane@sample.com",
  },
  {
    id: "#098",
    createdAt: "2024-10-30T12:00:00Z",
    name: "Ahmed",
    website: "sample2.com",
    email: "jane2@sample.com",
  },
  {
    id: "#768",
    createdAt: "2024-10-30T13:00:00Z",
    name: "Mohamed ",
    website: "sample3.com",
    email: "jane3@sample.com",
  },
  {
    id: "#453",
    createdAt: "2024-10-30T14:00:00Z",
    name: "Tasneem",
    website: "sample4.com",
    email: "jane4@sample.com",
  },
  {
    id: "#158",
    createdAt: "2024-10-30T15:00:00Z",
    name: "Jane",
    website: "sample5.com",
    email: "jane5@sample.com",
  },
  {
    id: "#009",
    createdAt: "2024-10-30T16:00:00Z",
    name: "Youssef",
    website: "sample6.com",
    email: "jane6@sample.com",
  },
  {
    id: "#563",
    createdAt: "2024-10-30T17:00:00Z",
    name: "Hazem",
    website: "sample7.com",
    email: "jane7@sample.com",
  },
];

function CustomersT() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(initialData);
  const [editCustomer, setEditCustomer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [sortOrder, setSortOrder] = useState("");

  const options = [
    { value: "", label: "Filter by option" },
    { value: "AtoZ", label: "A to Z" },
    { value: "ZtoA", label: "Z to A" },
    { value: "time", label: "Date range" },
  ];

  const customStyles = {
    control: (base) => ({
      ...base,
      border: "1px solid black",
      backgroundColor: "black",
      borderRadius: "5px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",

      "&:hover": {
        borderColor: "black",
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? "#CAF9DA" : "black",
      color: state.isSelected ? "white" : "white",

      "&:hover": {
        backgroundColor: "#CAF9DA",
        color: "black",
      },
    }),
  };

  const handleEdit = (customer) => {
    setEditCustomer(customer);
    setShowModal(true);
  };

  const handleSave = () => {
    setData((prevData) =>
      prevData.map((cust) =>
        cust.id === editCustomer.id ? editCustomer : cust
      )
    );
    setShowModal(false);
    setEditCustomer(null);
  };

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((customer) => customer.id !== id));
  };

  const filteredData = data.filter((customer) =>
    customer.id.toString().includes(searchTerm)
  );

  const sortData = (data) => {
    if (sortOrder === "AtoZ") {
      return [...data].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "ZtoA") {
      return [...data].sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOrder === "time") {
      return [...data].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }
    return data;
  };

  const sortedData = sortData(filteredData);

  return (
    <div
      className="container "
      style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}
    >
      <h1 className="font-bold text-[24px]">المستخدمون</h1>

      <div className="flex mt-10 ">
        <div className="relative w-3/4 mb-5">
          <FaSearch className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-6" />
          <input
            type="text"
            placeholder="البحث عن طريق ID "
            className="w-full p-2 pl-10 text-white bg-black rounded-lg shadow-md "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-1/4 mb-5 text-center pr-9">
          <Select
            options={options}
            styles={customStyles}
            value={options.find((option) => option.value === sortOrder)}
            onChange={(selectedOption) => setSortOrder(selectedOption.value)}
          />
        </div>
      </div>

      <div style={{ overflowX: "auto" }} className="table-container">
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>تاريخ الإنشاء</th>
              <th>العميل</th>
              <th>الموقع الإلكتروني</th>
              <th>البريد الإلكتروني</th>
              <th>الحالة</th>
              <th className="text-center">الإجراء</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.length > 0 ? (
              sortedData.map((customer) => (
                <tr key={customer.id}>
                  <td data-label="ID">{customer.id}</td>
                  <td data-label="Created At">{customer.createdAt}</td>
                  <td data-label="Customer">{customer.name}</td>
                  <td data-label="Website">{customer.website}</td>
                  <td data-label="Email">{customer.email}</td>
                  <td data-label="Status">
                    <ShowStatuesModal />
                  </td>
                  <td data-label="Action">
                    <div className="flex justify-center mx-auto align-middle ">
                      <FaEdit
                        onClick={() => handleEdit(customer)}
                        className="text-gray-500 cursor-pointer hover:text-blue-500 "
                      />
                      <FaTrash
                        onClick={() => handleDelete(customer.id)}
                        className="mr-3 text-gray-500 cursor-pointer hover:text-red-500"
                      />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  style={{ textAlign: "center", padding: "20px" }}
                >
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for Editing */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "400px",
              maxHeight: "80%",
              overflowY: "auto",
            }}
          >
            <h2>Edit Customer</h2>
            <input
              type="text"
              value={editCustomer.name}
              onChange={(e) =>
                setEditCustomer({ ...editCustomer, name: e.target.value })
              }
              placeholder="Name"
              className="w-full p-2 mb-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              value={editCustomer.website}
              onChange={(e) =>
                setEditCustomer({ ...editCustomer, website: e.target.value })
              }
              placeholder="Website"
              className="w-full p-2 mb-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              value={editCustomer.email}
              onChange={(e) =>
                setEditCustomer({ ...editCustomer, email: e.target.value })
              }
              placeholder="Email"
              className="w-full p-2 mb-3 border border-gray-300 rounded-lg"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-white bg-gray-500 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-white bg-blue-500 rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomersT;
