import { pageObject } from "../interfaces/pageObject.interface";

const generateUrl = ({
  sortBy,
  searchQuery,
  genre = "All",
}: pageObject): string => {
  const queryParams = new URLSearchParams();
  let url: string = `/search`;
  searchQuery && (url = url + `/` + searchQuery);
  genre && queryParams.append("genre", genre as string);
  sortBy && queryParams.append("sortBy", sortBy as string);
  const returnString: string = `${url}?${queryParams.toString()}`;
  return returnString;
};

export default generateUrl;
