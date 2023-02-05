import generateQueryString from "../../helpers/generateQueryString";

const appLoader = async ({ params }: any) => {
  const query = generateQueryString(params);
  const response = await fetch(query);
  const data = await response.json();
  return data;
};

export default appLoader;
