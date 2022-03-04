const filterData = (data, searchTerm) => {
  return data.filter((data) => {
    if (searchTerm === "") {
      return null;
    } else if (
      // this condition checks case sensitivity
      data.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return data;
    }
    return null;
  });
};

export default filterData;
