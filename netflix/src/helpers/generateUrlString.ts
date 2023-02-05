const generateUrl = ({
  sortBy = "vote_average",
  searchQuery = "f08ab2",
  genre = "All",
}: any) => {
  let url = `/search`;
  url = url + `/` + searchQuery;
  url = url + "/" + genre;
  url = url + "/" + sortBy;
  console.log(url);
  return url;
};

export default generateUrl;
