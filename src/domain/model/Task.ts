export interface Task {
  id: number;
  text: string;
  status: 'TO-DO' | 'DONE';
}