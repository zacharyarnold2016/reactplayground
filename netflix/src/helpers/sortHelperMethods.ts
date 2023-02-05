export const sortString = (sortOption: string) => {
  const inputString = sortOption.toLowerCase();
  const array = inputString.split(" ");
  const outputString = array.join("_");
  return outputString;
};
