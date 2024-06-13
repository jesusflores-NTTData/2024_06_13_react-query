import { useState } from 'react';
import styles from './App.module.css';
import { NewTask } from './components/new-task/NewTask';
import { Summary } from './components/summary/Summary';
import { TasksTable } from './components/tasks-table/TasksTable';
import { Task } from './domain/model/Task';
import { postNewTask, sendUpdateTaskStatus } from './infraestructure/TaksRepository';
import { useTastksList } from './useTasksList';
import { Cuadrados } from './components/cuadrados/Cuadrados';

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
  return tasks ?
    <div className={styles.container}>
      <h1 className={styles.title}>Tasks List</h1>
      <TasksTable tasks={tasks} toggleTask={handleToggleTask} />
      <NewTask newTaskEvent={handleNewTask} />
      <Summary list={tasks} />
      <Cuadrados />
    </div > :
    null;
}

export default App
