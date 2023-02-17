import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import generateUrl from "../../../helpers/generateUrlString";
import { imgFallback } from "../../../helpers/imgFallback";

const Film = (props: any) => {
  const router = useRouter();
  const { sortBy, searchQuery, genre } = router.query;
  const url = generateUrl({ sortBy, searchQuery, genre });

  return (
    <div className="filmContainer">
      <Link href={`${url}&movieId=${props.id}`}>
        <img
          src={props.poster_path}
          className="listImage"
          alt="Failed to find Poster Path"
          onError={(currentTarget) => imgFallback(currentTarget)}
        />
      </Link>
      <div className="--details">
        <h2 className="text-red-900">{props.title}</h2>
        <h3 className="release_date">{props.release_date}</h3>
        <h3 style={{ color: "#979797" }}>{props.genres[0]}</h3>
      </div>
    </div>
  );
};

export default Film;
