import { useMutation, useQueryClient } from '@tanstack/react-query';
import styles from './App.module.css';
import { Cuadrados } from './components/cuadrados/Cuadrados';
import { NewTask } from './components/new-task/NewTask';
import { Summary } from './components/summary/Summary';
import { TasksTable } from './components/tasks-table/TasksTable';
import { Task } from './domain/model/Task';
import { sendUpdateTaskStatus } from './infraestructure/TaksRepository';
import { useTastksList } from './useTasksList';

function App() {

  const { data: tasks } = useTastksList();
  const queryClient = useQueryClient();
  const handleSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ['tasksList'] })
  }
  const { mutate } = useMutation({ mutationFn: sendUpdateTaskStatus, onSuccess: handleSuccess });
  const handleToggleTask = (task: Task) => {
    const updatedTask: Task = { ...task, status: task.status === 'DONE' ? 'TO-DO' : 'DONE' }
    mutate(updatedTask);
  }
  if (!tasks) {
    return <h1>Loading....</h1>;
  }
  return <div className={styles.container}>
      <h1 className={styles.title}>Tasks List</h1>
    <TasksTable toggleTask={handleToggleTask} />
    <NewTask />
    <Summary />
      <Cuadrados />
  </div >;
}

export default App
