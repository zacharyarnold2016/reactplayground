const generateUrl = ({ sortBy, searchQuery, genre = "All" }: any) => {
  const queryParams = new URLSearchParams();
  let url = `/search`;
  searchQuery && (url = url + `/` + searchQuery);
  genre && queryParams.append("genre", genre);
  sortBy && queryParams.append("sortBy", sortBy);
  const returnString = `${url}?${queryParams.toString()}`;
  return returnString;
};

export default generateUrl;
