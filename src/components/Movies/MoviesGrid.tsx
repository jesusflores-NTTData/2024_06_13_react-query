import React from "react";
import { Movie } from "../../domain/model/Movie";
import MovieCard from "./MovieCard";
import { useFetchMoviesByTitleAndReleaseYear } from "../../hooks/useFetchMoviesByTitleAndReleaseYear";

const MoviesGrid: React.FC = () => {
  const { data, pending } = useFetchMoviesByTitleAndReleaseYear("Inception");

  if (pending) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.grid}>
      {data &&
        data.length > 0 &&
        data.map((movie: Movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    padding: "16px",
  },
};

export default MoviesGrid;
