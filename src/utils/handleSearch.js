const handleSearch = (event, input, setSearchParams) => {
  if (event.key === "Enter") {
    const query = event.target.value;
    setSearchParams({ query });
  } else if (event.type === "click") {
    const query = input.current.value;
    setSearchParams({ query });
  }
};

export default handleSearch;
