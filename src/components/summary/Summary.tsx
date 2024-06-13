import { Task } from "../../domain/model/Task";
import { useTastksList } from "../../useTasksList";

export interface SummaryProps {
  list: Task[];
}

export function Summary() {
  const { data: list, isSuccess } = useTastksList();
  if (!isSuccess) {
    return <h2>Loading summary....</h2>
  }
  const total = list.length;
  const done = list.filter(t => t.status === 'DONE').length;
  const pending = list.filter(t => t.status === 'TO-DO').length;
  return <div>
    <div>Total: {total}</div>
    <div>Done: {done}</div>
    <div>Pending: {pending}</div>
  </div>;
}