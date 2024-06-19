import { useQuery } from "@tanstack/react-query";
import {
  fetchMovieByTitle,
  fetchMoviesByReleaseYear,
} from "../infraestructure/MoviesRepository";

export const useFetchMoviesByTitleAndReleaseYear = (title: string): any => {
  const { data: movie } = useQuery({
    queryKey: ["movie", title],
    queryFn: () => fetchMovieByTitle(title),
  });

  const releaseYear = movie?.releaseYear || 0;

  const results = useQuery({
    queryKey: ["movies", releaseYear],
    queryFn: () => fetchMoviesByReleaseYear(releaseYear),
    enabled: !!releaseYear,
  });

  return results;
};
