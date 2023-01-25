export const isSelected = (genre: any, currentGenre: any) => {
  if (genre === currentGenre) {
    return "highlighted" as string;
  } else {
    return "" as string;
  }
};
