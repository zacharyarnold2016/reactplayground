export const sortString = (sortOption: string) => {
  const string = sortOption.toLowerCase();
  const array = string.split(" ");
  const finalstring = array.join("_");
  return finalstring;
};
