import React from "react";
import { useLoaderData } from "react-router";

const Result = (props: any) => {
  const { totalAmount }: any = useLoaderData();
  const results = totalAmount;

  return (
    <div className="searchResults">
      <h2> {results} movie found</h2>
    </div>
  );
};

export default Result;
