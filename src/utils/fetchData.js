async function fetchData() {
  try {
    const response = await fetch(
      "https://help-search-api-prod.herokuapp.com/search?query=broadband"
    );
    const { results } = await response.json();
    return results;
  } catch (error) {
    console.error(error);
  }
}

export default fetchData;
