import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Search from "./components/Search";
import Results from "./components/Results";
import Pagination from "./components/Pagination";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("query") || "";
  const input = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://help-search-api-prod.herokuapp.com/search?query=broadband"
        );
        const data = await response.json();
        setData(data.results);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      const query = event.target.value;
      setSearchParams({ query });
    } else if (event.type === "click") {
      const query = input.current.value;
      setSearchParams({ query });
    }
  };

  // Pagination
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = data.slice(indexOfFirstResult, indexOfLastResult);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <Search handleSearch={handleSearch} input={input} />

      <div className="cards">
        {searchTerm && (
          <p>
            Search results for:{" "}
            <span className="search-term">{searchTerm}</span>
          </p>
        )}
        <Results data={currentResults} searchTerm={searchTerm} />
        {searchTerm && (
          <Pagination
            resultsPerPage={resultsPerPage}
            totalResults={data.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
}

export default App;
