import PropTypes from 'prop-types';
import { useState } from 'react';
import EditCustomerModal from './EditCustomerModal';
import Delete from './Delete';


const initialData = [
    { id: '#156', createdAt: '2024-10-30T10:00:00Z', name: 'John Doe', website: 'example.com', email: 'john@example.com' },
    { id: '#247', createdAt: '2024-10-30T11:00:00Z', name: 'Jane Doe', website: 'sample.com', email: 'jane@sample.com' },
    { id: '#098', createdAt: '2024-10-30T12:00:00Z', name: 'Emma Johnson', website: 'sample2.com', email: 'jane2@sample.com' },
    { id: '#768', createdAt: '2024-10-30T13:00:00Z', name: 'James Williams ', website: 'sample3.com', email: 'jane3@sample.com' },
    { id: '#453', createdAt: '2024-10-30T14:00:00Z', name: 'Tasneem Elagamy', website: 'sample4.com', email: 'jane4@sample.com' },
    { id: '#158', createdAt: '2024-10-30T15:00:00Z', name: 'Olivia Brown', website: 'sample5.com', email: 'jane5@sample.com' },
    { id: '#009', createdAt: '2024-10-30T16:00:00Z', name: 'Amelia Taylor', website: 'sample6.com', email: 'jane6@sample.com' },
    { id: '#563', createdAt: '2024-10-30T17:00:00Z', name: 'John Smith', website: 'sample7.com', email: 'jane7@sample.com' },
];


const CustomersTable = () => {
    const [data,setData] = useState(initialData);
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
        <div style={{ overflowX: 'auto' }} className="table-container">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
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
                    {data.length > 0 ? (
                        data.map((customer) => (
                            <tr key={customer.id}>
                                <td data-label="ID">{customer.id}</td>
                                <td data-label="Created At">{customer.createdAt}</td>
                                <td data-label="Customer">{customer.name}</td>
                                <td data-label="Website">{customer.website}</td>
                                <td data-label="Email">{customer.email}</td>
                                <td data-label="Status">
                                    <button className="px-2 py-1 bg-[#017F53] text-emerald-400 border-none rounded-md cursor-pointer hover:bg-emerald-400 hover:text-gray-900 transition duration-200">
                                        Show Status
                                    </button>
                                </td>
                                <td data-label="Action">
                                    <div className="flex justify-center align-middle mx-auto">
                                    <EditCustomerModal
                                     customer={customer}
                                     onSave={(updatedData) => handleSave(customer.id, updatedData)}
                                  />
                                  <Delete onDelete={() => handleDelete(customer.id)}/>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" style={{ textAlign: 'center', padding: '20px' }}>
                                No results found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
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
