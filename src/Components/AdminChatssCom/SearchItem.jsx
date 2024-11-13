
import { FaSearch } from 'react-icons/fa';
import Select from "react-select";
import React, { useState } from 'react'
function SearchItem() {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("");

    const options = [
            { value: "", label: "Filter by option" },
            { value: "AtoZ", label: "A to Z" },
            { value: "ZtoA", label: "Z to A" },
            { value: "time", label: "Date range" },
          ];
          const customStyles = {
            control: (provided , state) => ({
              ...provided,
              borderColor: state.isFocused ? 'gray' : 'black', 
        boxShadow: state.isFocused ? '0 0 0 1px blue' : 'none', 
        '&:hover': {
          borderColor: state.isFocused ? 'gray' : 'black' 
        },
              backgroundColor: 'black',
              border: '2px solid black',
              borderRadius: '8px',
              padding: '5px'
            }),
            option: (provided , state) => ({
              ...provided,
              backgroundColor: state.isSelected
              ? 'gray' 
              : state.isFocused
              ? 'lightgray' 
              : 'black',
              color:'white',
              padding: 10
            }),
            menu: (provided) => ({
              ...provided,
              borderRadius: '8px',
              backgroundColor: 'black',
              marginTop: '4px'
            }),
           
            placeholder: (provided) => ({
                ...provided,
                color: 'gray',
                textAlign:'end'
              })
            
          };
          const filteredData = Data.filter(item => 
            item.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
            item.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
          
         const sortedData = [...filteredData].sort((a, b) => {
            switch (sortOrder) {
                case "AtoZ":
                    return a.customer.localeCompare(b.customer); // Sort A to Z by customer
                case "ZtoA":
                    return b.customer.localeCompare(a.customer); // Sort Z to A by customer
                default:
                    return 0; // No sorting
            }
        });
        const Data = [
            {
              id: "#156",
              customer: "John Doe",
              email: "john@example.com",
            },
            {
              id: "#247",
              customer: "Jane Doe",
              email: "jane@sample.com",
            },
            {
              id: "#098",
              customer: "Ahmed",
              email: "jane2@sample.com",
            },
            {
              id: "#768",
              customer: "Mohamed ",
              email: "jane3@sample.com",
            },
            {
              id: "#453",
              customer: "Jane Doe",
              email: "jane4@sample.com",
            },
            {
              id: "#158",
              customer: "Jane",
              email: "jane5@sample.com",
            },
            {
              id: "#009",
              customer: "Jane",
              email: "jane6@sample.com",
            },
          ];    
    return (
             <div className="flex mt-10 ">
        <div className="relative  w-3/4 mb-5 ">
          <FaSearch className="absolute left-3 top-4 text-gray-500 " />
          <input
            type="text"
            placeholder="البحث عن طريق ID "
            className="w-full px-[15px] py-[13px]  text-white bg-black rounded-lg shadow-md "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-1/4 mb-5 text-center pr-9">
        <Select
        options={options}
        styles={customStyles} 
        placeholder="filter by data range"
        onChange={(selectedOption) => setSortOrder(selectedOption.value)}
        />      
        </div>
        </div>
    )
}

export default SearchItem