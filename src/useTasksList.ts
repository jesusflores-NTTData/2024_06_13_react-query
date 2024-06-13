import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "./infraestructure/TaksRepository";
import { Task } from "./domain/model/Task";

const mejorar = (todos: Task[]) => todos.map((todo) => ({ ...todo, hora: new Date() }));

export function useTastksList() {
  return useQuery({ queryKey: ['tasksList'], queryFn: fetchTasks, select: mejorar });
}