import styles from './App.module.css';
import { NewTask } from './components/new-task/NewTask';
import { Summary } from './components/summary/Summary';
import { TasksTable } from './components/tasks-table/TasksTable';
import { Task } from './domain/model/Task';
import { postNewTask, sendUpdateTaskStatus } from './infraestructure/TaksRepository';
import { useTastksList } from './useTasksList';

function App() {
  const { data: tasks, isFetching, isError } = useTastksList();

  const handleNewTask = (task: Task) => {
    postNewTask(task);
  }
  const handleToggleTask = (task: Task) => {
    const updatedTask: Task = { ...task, status: task.status === 'DONE' ? 'TO-DO' : 'DONE' }
    sendUpdateTaskStatus(updatedTask);
  }

  if (isFetching) {
    return <h1 className={styles.title}>Loading...</h1>;
  }
  if (isError) {
    return <h1 className={styles.title}>¡Error!</h1>;
  }
  // Problema: tenemos que hacer properties drilling para propagar los datos (tasks).
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tasks List</h1>
      <TasksTable tasks={tasks!} toggleTask={handleToggleTask} />
      <NewTask newTaskEvent={handleNewTask} />
      <Summary list={tasks!} />
    </div>);
}

export default App
