import { useEffect, useState } from 'react';
import styles from './App.module.css'
import { fetchTaks, postNewTask, sendUpdateTaskStatus } from './infraestructure/TaksRepository';
import { TasksTable } from './components/tasks-table/TasksTable';
import { NewTask } from './components/new-task/NewTask';
import { Task } from './domain/model/Task';
import { Summary } from './components/summary/Summary';

function App() {
  // TO-DO: Mover el useState y el useEffect a un custom hook llamado useTasksList
  const [tasks, setTasks] = useState<Task[]>();
  useEffect(() => {
    fetchTaks().then((data) => setTasks(data));
  }, []);

  const handleNewTask = (task: Task) => {
    postNewTask(task);
  }
  const handleToggleTask = (task: Task) => {
    const updatedTask: Task = { ...task, status: task.status === 'DONE' ? 'TO-DO' : 'DONE' }
    sendUpdateTaskStatus(updatedTask);
  }

  if (!tasks) {
    return <h1 className={styles.title}>Loading...</h1>;
  }
  // Problema: tenemos que hacer properties drilling para propagar los datos (tasks).
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tasks List</h1>
      <TasksTable tasks={tasks} toggleTask={handleToggleTask} />
      <NewTask newTaskEvent={handleNewTask} />
      <Summary list={tasks} />
    </div>);
}

export default App
