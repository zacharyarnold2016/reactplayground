import React from "react";
import { sortString } from "../../../helpers/sortHelperMethods";
import { useSearchState } from "../../../hooks/useSearchState";
import { useRouter } from "next/router";
import generateUrl from "../../../helpers/generateUrlString";

const SortByOption = ({ option }: any) => {
  const searchState = useSearchState();
  const finalstring: string = sortString(option);
  const router = useRouter();
  const navigate = router.push;

  const sortAll = async () => {
    const { genre, searchQuery } = searchState;
    const newSearchState = { genre, searchQuery, sortBy: finalstring };
    const url = generateUrl(newSearchState);

    navigate(url);
  };

  return (
    <h5 style={{ padding: "1px" }} onClick={sortAll}>
      {option}
    </h5>
  );
};

export default SortByOption;
