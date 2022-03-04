import "./Results.css";

const Results = ({ data, searchTerm }) => {
  return (
    <>
      {data
        .filter((data) => {
          if (searchTerm === "") {
            return null;
          } else if (
            // this condition checks case sensitivity
            data.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return data;
          }
          return null;
        })
        .map(({ title, description }, i) => {
          return (
            <div className="result" key={i}>
              <h2>{title}</h2>
              <p>{description}</p>
              <hr />
            </div>
          );
        })}
    </>
  );
};

export default Results;
