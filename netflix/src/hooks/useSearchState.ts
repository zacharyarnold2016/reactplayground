import React, { useCallback } from "react";

export const useSearchState = () => {
  const getQueryString = useCallback((searchState: any) => {
    const { currentGenre, currentSort, currentSearch } = searchState;
    console.log(currentGenre, currentSort, currentSearch);
    const queryParams = new URLSearchParams();
    let path;
    currentSort && queryParams.append("sortBy", currentSort);
    currentSort && queryParams.append("sortOrder", "desc");
    currentSearch && queryParams.append("search", currentSearch);
    currentSearch && queryParams.append("searchBy", "title");
    if (currentGenre === "All") {
      path = `/movies?${queryParams.toString()}`;
      return path;
    } else {
      currentGenre && queryParams.append("filter", currentGenre);
      path = `/movies?${queryParams.toString()}`;
      console.log(path);
      return path;
    }
  }, []);
  return getQueryString;
};
