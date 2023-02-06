import generateQueryString from "../../helpers/generateQueryString";

const appLoader = async ({ params, request }: any) => {
  const { searchQuery } = params;
  const sortBy = new URL(request.url).searchParams.get("sortBy");
  const genre = new URL(request.url).searchParams.get("genre");
  const query = generateQueryString({ searchQuery, sortBy, genre });
  const response = await fetch(query);
  const data = await response.json();
  return data;
};

export default appLoader;
