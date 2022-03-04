import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Search from "./components/Search";
import Results from "./components/Results";
import Pagination from "./components/Pagination";
import { fetchData, filterData } from "./utils";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("query") || "";
  const filteredData = filterData(data, searchTerm);
  const input = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  useEffect(() => {
    (async () => {
      setData(await fetchData());
    })();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchParams]);

  // Pagination
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = data.slice(indexOfFirstResult, indexOfLastResult);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <Search input={input} setSearchParams={setSearchParams} />

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
            totalResults={filteredData.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
}

export default App;
