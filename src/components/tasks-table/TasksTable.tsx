import { Task } from "../../domain/model/Task";
import sytles from "./TasksTable.module.css";

export interface TasksTableProps {
  tasks: Task[];
  toggleTask: (task: Task) => void;
}


export function TasksTable({ tasks, toggleTask }: TasksTableProps) {

  return <table className={sytles.tasksTable}>
    <thead>
      <tr>
        <th>ID</th>
        <th>STATUS</th>
        <th>TEXT</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map(task => {
        return <tr key={task.id}>
          <td>{task.id}</td>
          <td data-task-status={task.status}><span>{task.status}</span></td>
          <td>{task.text}</td>
          <td><button type="button" onClick={() => toggleTask(task)}>Toggle to {task.status == 'DONE' ? 'To-do' : 'done'}</button></td>
        </tr>
      })}
    </tbody>
  </table>;
}