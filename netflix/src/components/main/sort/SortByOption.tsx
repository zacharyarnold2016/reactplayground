import React from "react";
import { sortString } from "../../../helpers/sortHelperMethods";
import { usePageState } from "../../../hooks/usePageState";

const SortByOption = ({ option }: any) => {
  const handlePage = usePageState();
  const finalstring: string = sortString(option);

  const sortAll = async () => {
    await handlePage(finalstring, "sortBy");
  };

  return (
    <h5 style={{ padding: "1px" }} onClick={sortAll}>
      {option}
    </h5>
  );
};

export default SortByOption;
