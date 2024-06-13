import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "./infraestructure/TaksRepository";

export function useTastksList(activo: boolean) {
  return useQuery({ queryKey: ['tasksList'], queryFn: fetchTasks, retry: 5, enabled: activo });
}