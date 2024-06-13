import { Task } from "../domain/model/Task";
const BASE_URL = 'https://www.react-query-mocks.com';

export async function fetchTasks(): Promise<Task[]> {
  const result = await fetch(`${BASE_URL}/api/tasks`);
  if (result.status === 200) {
    return (await result.json() as Task[])
  }
  throw new Error('STATUS: ' + result.status)

}

export async function postNewTask(task: Task): Promise<void> {
  const bodyTxt = JSON.stringify(task);
  const options = {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: bodyTxt,
  };
  await fetch(`${BASE_URL}/api/tasks`, options);
}
export async function sendUpdateTaskStatus(task: Task): Promise<void> {
  const bodyTxt = JSON.stringify({ id: task.id, status: task.status });
  const options = {
    method: "PATCH",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: bodyTxt,
  };
  await fetch(`${BASE_URL}/api/tasks`, options);
}