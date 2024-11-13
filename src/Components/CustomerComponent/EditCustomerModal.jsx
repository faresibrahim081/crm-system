import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaEdit } from 'react-icons/fa';


function EditCustomerModal({ customer, onSave }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editCustomer, setEditCustomer] = useState({
    name: customer.name,
    website: customer.website,
    email: customer.email,
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      const fileData = new FormData();
      fileData.append("file", selectedFile);
      console.log("File ready for upload:", selectedFile);

      setSelectedFile(null);
      alert("File uploaded successfully.");
    }
    
    onSave(editCustomer); 
    toggleModal();
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center">
      <FaEdit
        onClick={toggleModal}
        className="cursor-pointer text-gray-500 hover:text-blue-500"
      />

      {isOpen && (
        <div className="fixed inset-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-start">
          <div className="bg-[#292929] p-8 rounded-lg w-[400px] max-h-full overflow-y-auto pb-1.5">
            <h2>تعديل علي بيانات العميل او اضافة عقد</h2>
            <br />
            <h6 className="text-[14px] font-extralight pb-1">اسم العميل</h6>
            <input
              type="text"
              value={editCustomer.name}
              onChange={(e) =>
                setEditCustomer({ ...editCustomer, name: e.target.value })
              }
              placeholder="Name"
              className="pb-3 p-3 bg-black mb-3 border border-gray-300 rounded-lg w-full"
            />
            <h6 className="text-[14px] font-extralight pb-1">الموقع الاكتروني</h6>
            <input
              type="text"
              value={editCustomer.website}
              onChange={(e) =>
                setEditCustomer({ ...editCustomer, website: e.target.value })
              }
              placeholder="Website"
              className="p-2 mb-3 bg-black border border-gray-300 rounded-lg w-full"
            />
            <h6 className="text-[14px] font-extralight pb-1">البريد الاكتروني</h6>
            <input
              type="email"
              value={editCustomer.email}
              onChange={(e) =>
                setEditCustomer({ ...editCustomer, email: e.target.value })
              }
              placeholder="Email"
              className="p-2 mb-3 border bg-black border-gray-300 rounded-lg w-full"
            />
            <h6 className="text-[14px] font-extralight pb-1">العنوان</h6>
            <input
              type="text"
              placeholder="العنوان"
              className="p-2 mb-3 border bg-black border-gray-300 rounded-lg w-full"
            />
            <h6 className="text-[14px] font-extralight pb-1">الوصف</h6>
            <input
              type="text"
              placeholder="الوصف"
              className="p-2 mb-3 border bg-black border-gray-300 rounded-lg w-full"
            />
            <form onSubmit={handleSubmit}>
              <h6 className="text-[14px] font-extralight pb-1">اضافة عقد</h6>
              <input
                type="file"
                onChange={handleFileChange}
                className="p-2 mb-3 border bg-black border-gray-300 rounded-lg w-full"
              />
              <button type="submit" className="px-2 mb-3 py-0.5 bg-[#017F53] text-white rounded-lg">
                اضافة عقد
              </button>
            </form>
            <div className="flex">
              <button onClick={handleSubmit} className="px-16 py-2 bg-[#017F53] text-white rounded-lg">
                تأكيد
              </button>
              <button onClick={toggleModal} className="px-16 py-2 mr-2 bg-gray-500 text-white rounded-lg">
                الغاء
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
// Define prop types for props validation
EditCustomerModal.propTypes = {
  customer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    website: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  onSave: PropTypes
}

export default EditCustomerModal;