import "./Pagination.css";

const Pagination = ({
  resultsPerPage,
  totalResults,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li>
          <button
            className="page-link"
            type="button"
            disabled={currentPage === 1}
            aria-label={`Go To Page ${currentPage - 1}`}
            onClick={() => paginate(currentPage - 1)}
          >
            Previous
          </button>
        </li>

        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              key={number}
              className={
                currentPage === number ? "active page-link" : "page-link"
              }
              type="button"
              aria-current="true"
              aria-label={`Current Page, Page ${currentPage}`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}

        <li>
          <button
            className="page-link"
            type="button"
            disabled={currentPage === pageNumbers.length}
            aria-label={`Go To Page ${currentPage + 1}`}
            onClick={() => paginate(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
