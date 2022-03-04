import "./Search.css";

const Search = ({ handleSearch, input }) => {
  return (
    <div className="search-wrapper">
      <h1>How can we help you?</h1>
      <input
        placeholder="Describe your issue"
        type="search"
        onKeyUp={handleSearch}
        ref={input}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
