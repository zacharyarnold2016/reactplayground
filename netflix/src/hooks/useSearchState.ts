import { useRouter } from "next/router";

export const useSearchState = () => {
  const router = useRouter();
  const { genre, searchQuery, sortBy, movieId } = router.query;
  return { genre, searchQuery, sortBy, movieId };
};
