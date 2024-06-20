import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchPaginatedMovies } from "../infraestructure/MoviesRepository";

export const useFetchPaginatedMovies = ({ page = 0 }): any => {
  const { isPending, isError, error, data, isFetching, isPlaceholderData } =
    useQuery({
      queryKey: ["movies", page],
      queryFn: () => fetchPaginatedMovies({ pageParam: page }),
      placeholderData: keepPreviousData,
    });

  return { isPending, isError, error, data, isFetching, isPlaceholderData };
};
