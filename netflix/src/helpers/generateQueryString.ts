const generateQueryString = ({ searchQuery, genre, sortBy }: any) => {
  console.log(searchQuery, genre, sortBy);
  const queryParams = new URLSearchParams();
  queryParams.append("searchBy", "title");

  searchQuery
    ? queryParams.append("search", searchQuery)
    : queryParams.append("search", "");

  if (genre && genre !== "All") {
    queryParams.append("filter", genre);
  }
  sortBy && queryParams.append("sortBy", sortBy);
  sortBy && queryParams.append("sortOrder", "desc");

  const queryString = `http://localhost:4000/movies?${queryParams.toString()}`;
  console.log(queryString);
  return queryString;
};

export default generateQueryString;
