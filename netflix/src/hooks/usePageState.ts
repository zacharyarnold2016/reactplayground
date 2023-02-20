import { useRouter } from "next/router";
import { useCallback } from "react";
import generateUrl from "../helpers/generateUrlString";
import { pageObject } from "../interfaces/pageObject.interface";

type updateValue = string | undefined;
type updateTarget = string | undefined;

export const usePageState = () => {
  const router = useRouter();
  return useCallback(
    async (updateValue: updateValue, updateTarget: updateTarget) => {
      let newSearchState: pageObject | undefined;
      const navigate = router.push;

      switch (updateTarget) {
        case "search": {
          const { genre, sortBy } = router.query;

          newSearchState = {
            genre,
            searchQuery: updateValue,
            sortBy,
          };
          const url = generateUrl(newSearchState);
          await navigate(url);
          break;
        }

        case "genre": {
          const { sortBy, searchQuery } = router.query;

          newSearchState = {
            genre: updateValue,
            searchQuery,
            sortBy,
          };
          const url = generateUrl(newSearchState);
          await navigate(url);
          break;
        }

        case "sortBy": {
          const { searchQuery, genre } = router.query;

          newSearchState = {
            genre,
            searchQuery,
            sortBy: updateValue,
          };
          const url = generateUrl(newSearchState);
          await navigate(url);
          break;
        }

        case undefined: {
          const { searchQuery, genre, sortBy } = router.query;
          const newSearchState = { searchQuery, genre, sortBy };
          const url = generateUrl(newSearchState);
          await navigate(url);
          break;
        }
      }
    },
    [router.push, router.query]
  );
};
