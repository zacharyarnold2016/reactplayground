const generateQueryString = ({ searchQuery, genre, sortBy }: any) => {
  const queryParams = new URLSearchParams();
  queryParams.append("searchBy", "title");
  if (searchQuery === "f08ab2") {
    queryParams.append("search", "");
  } else if (searchQuery) {
    queryParams.append("search", searchQuery);
  }

  if (genre && genre !== "All") {
    queryParams.append("filter", genre);
  }
  sortBy && queryParams.append("sortBy", sortBy);
  sortBy && queryParams.append("sortOrder", "desc");

  const queryString = `http://localhost:4000/movies?${queryParams.toString()}`;
  return queryString;
};

export default generateQueryString;
