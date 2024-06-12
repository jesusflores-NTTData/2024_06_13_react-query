import { Task } from "../../domain/model/Task";

export interface SummaryProps {
  list: Task[];
}

export function Summary({ list }: SummaryProps) {
  const total = list.length;
  const done = list.filter(t => t.status === 'DONE').length;
  const pending = list.filter(t => t.status === 'TO-DO').length;
  return <div>
    <div>Total: {total}</div>
    <div>Done: {done}</div>
    <div>Pending: {pending}</div>
  </div>;
}