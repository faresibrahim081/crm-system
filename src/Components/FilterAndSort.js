export const filterAndSortData = (data, searchTerm, sortOrder) => {
    // Filter the data based on searchTerm
    const filteredData = data.filter(item =>
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    // Sort the filtered data based on sortOrder
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
  
    return sortedData;
  };