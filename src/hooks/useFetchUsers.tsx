import { useQueries } from "@tanstack/react-query";
import { fetchUserById } from "../infraestructure/UsersRepository";

const ids = [1, 2, 3];

export const useFetchUsers = (): any => {
  const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ["user", id],
      queryFn: () => fetchUserById(id),
      staleTime: Infinity,
    })),
  });

  return results;
};
