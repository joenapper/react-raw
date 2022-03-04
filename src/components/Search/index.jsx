import { handleSearch } from "../../utils";
import "./Search.css";

const Search = ({ input, setSearchParams }) => {
  return (
    <div className="search-wrapper">
      <h1>How can we help you?</h1>
      <input
        placeholder="Describe your issue"
        type="search"
        onKeyUp={(event) => handleSearch(event, input, setSearchParams)}
        ref={input}
      />
      <button onClick={(event) => handleSearch(event, input, setSearchParams)}>
        Search
      </button>
    </div>
  );
};

export default Search;
