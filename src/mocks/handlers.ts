import { delay, http, HttpResponse } from 'msw';
import { Task } from '../domain/model/Task';

const tasks: Task[] = [
  {
    id: 1,
    text: 'Estudiar React Query',
    status: 'TO-DO',
  },
  {
    id: 2,
    text: 'Ir al examen',
    status: 'TO-DO',
  },
  {
    id: 3,
    text: 'Ver Filmin',
    status: 'DONE',
  },
];

let failCount = 0;

export const handlers = [
  http.get('*/api/tasks', async () => {
    failCount--;
    await delay(1500);
    if (failCount + 1 <= 0) {
      return HttpResponse.json(
        tasks
      )
    }
    return getError()
  }),
  http.post('*/api/tasks', async ({ request }) => {
    const task = (await request.json()) as Task;
    addTaskToList(task);
    console.log(tasks);
    await delay(1500);
    return new Response(null, { status: 200 });
  }),
  http.patch('*/api/tasks', async ({ request }) => {
    const taskData = (await request.json()) as { id: number, status: 'TO-DO' | 'DONE' };
    const task = tasks.find(t => t.id == taskData.id);
    await delay(1500);
    if (task) {
      task.status = taskData.status;
      console.log(tasks);
      return new Response(null, { status: 200 });
    }
    return getError(404, 'Not found');
  }),
  http.post('*/api/cuadrado', async ({ request }) => {
    const item = (await request.json()) as { num: number };
    console.log('item', item);
    await delay(1500);
    return HttpResponse.json({ cuadrado: item.num * item.num })
  }),
];

function addTaskToList(task: Task): Task {
  const ids = tasks.map((t) => t.id);
  task.id = Math.max(...ids) + 1;
  tasks.push(task);
  return task;
}


function getError(code = 500, message = 'server error') {
  return new HttpResponse(message, { status: code });
}