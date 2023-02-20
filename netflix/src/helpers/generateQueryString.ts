import { pageObject } from "../interfaces/pageObject.interface";

const generateQueryString = ({ searchQuery, genre, sortBy }: pageObject) => {
  const queryParams = new URLSearchParams();
  queryParams.append("searchBy", "title");

  searchQuery
    ? queryParams.append("search", searchQuery as string)
    : queryParams.append("search", "");

  if (genre && genre !== "All") {
    queryParams.append("filter", genre as string);
  }
  sortBy && queryParams.append("sortBy", sortBy as string);
  sortBy && queryParams.append("sortOrder", "desc");

  const queryString = `http://localhost:4000/movies?${queryParams.toString()}`;
  return queryString;
};

export default generateQueryString;
