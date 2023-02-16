import React from "react";
import { useParams } from "react-router-dom";

export const useSearchState = () => {
  const params = useParams();
  return params;
};
