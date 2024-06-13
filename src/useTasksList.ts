import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "./infraestructure/TaksRepository";
import { Task } from "./domain/model/Task";

export const mejorar = (todos: Task[]) => todos.map((todo) => ({ ...todo, hora: new Date() }));

export function useTastksList() {
  return useQuery({ queryKey: ['tasksList'], queryFn: fetchTasks, select: mejorar, /*staleTime: 5 * 60 * 1000*/ gcTime: 0 });
}