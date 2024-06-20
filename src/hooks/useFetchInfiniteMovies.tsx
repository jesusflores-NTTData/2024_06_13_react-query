import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPaginatedMovies } from "../infraestructure/MoviesRepository";

export const useFetchInfiniteMovies = (): any => {
  const {
    data,
    error,
    status,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: fetchPaginatedMovies,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      console.log(lastPage);
      return lastPage.nextCursor;
    },
  });

  return {
    data,
    error,
    status,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
  };
};
