export const fetchDetails = async (state: any) => {
  if (state.movieId !== undefined) {
    const details = await fetch(
      `http://localhost:4000/movies/${state.movieId}`
    );
    const jsonDetails = await details.json();
    console.log(jsonDetails);
    state.setDetails(jsonDetails);
  } else {
    state.setDetails(undefined);
  }
};
