import { useEffect, useState } from "react";
import { Task } from "./domain/model/Task";
import { fetchTaks } from "./infraestructure/TaksRepository";

export function useTastksList() {
  const [tasks, setTasks] = useState<Task[]>();
  useEffect(() => {
    fetchTaks().then((data) => setTasks(data));
  }, []);
  return { data: tasks };
}