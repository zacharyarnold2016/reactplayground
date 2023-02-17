import React, { useCallback } from "react";
import { useRouter } from "next/router";
import generateUrl from "../../../helpers/generateUrlString";

const GenreOption = (props: any) => {
  const router = useRouter();
  const navigate = router.push;
  const { sortBy, searchQuery } = router.query;
  const activeGenre = router.query.genre;
  const genre = props.genre.toString();

  const isSelect = useCallback(() => {
    if (props.genre === activeGenre) {
      return "highlighted";
    }
  }, [activeGenre, props.genre]);

  const sortGenre = useCallback(async () => {
    if (genre !== activeGenre) {
      const newSearchState = {
        sortBy,
        searchQuery,
        genre,
      };
      const url = generateUrl(newSearchState);
      navigate(url);
    }
  }, [genre, navigate, activeGenre, searchQuery, sortBy]);
  return (
    <h4 className={isSelect()} onClick={sortGenre}>
      {genre}
    </h4>
  );
};

export default GenreOption;
