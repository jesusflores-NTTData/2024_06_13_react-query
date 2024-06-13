import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "./infraestructure/TaksRepository";

export function useTastksList() {
  return useQuery({ queryKey: ['tasksList'], queryFn: fetchTasks });
}