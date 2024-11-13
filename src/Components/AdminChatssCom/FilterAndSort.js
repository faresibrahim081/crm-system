export const filterAndSortData = (data, searchTerm, sortOrder) => {

    const filteredData = data.filter(item =>
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const sortedData = [...filteredData].sort((a, b) => {
      switch (sortOrder) {
        case "AtoZ":
          return a.customer.localeCompare(b.customer); 
        case "ZtoA":
          return b.customer.localeCompare(a.customer); 
        default:
          return 0;
      }
    });
  
    return sortedData;
  };