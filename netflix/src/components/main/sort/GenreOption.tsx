import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { usePageState } from "../../../hooks/usePageState";

const GenreOption = (props: any) => {
  const handlePage = usePageState();
  const router = useRouter();
  const activeGenre = router.query.genre;
  const genre = props.genre.toString();

  const isSelect = useCallback(() => {
    if (props.genre === activeGenre) {
      return "highlighted";
    }
  }, [activeGenre, props.genre]);

  const sortGenre = useCallback(async () => {
    if (genre !== activeGenre) {
      handlePage(genre, "genre");
    }
  }, [genre, activeGenre, handlePage]);

  return (
    <h4 className={isSelect()} onClick={sortGenre}>
      {genre}
    </h4>
  );
};

export default GenreOption;
