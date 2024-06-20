import React from "react";
import { useFetchPaginatedMovies } from "../../hooks/useFetchPaginatedMovies";
import MovieCard from "./MovieCard";
import { Movie } from "../../domain/model/Movie";

export const MoviesPages = () => {
  const [page, setPage] = React.useState(0);

  const { isPending, isError, error, data, isFetching, isPlaceholderData } =
    useFetchPaginatedMovies({ page });

  return (
    <div>
      {isPending ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          {data?.movies?.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
      <span>Current Page: {page + 1}</span>
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 0}
      >
        Previous Page
      </button>{" "}
      <button
        onClick={() => {
          if (!isPlaceholderData && data.hasMore) {
            setPage((old) => old + 1);
          }
        }}
        // Disable the Next Page button until we know a next page is available
        disabled={isPlaceholderData || !data?.hasMore}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}{" "}
    </div>
  );
};
