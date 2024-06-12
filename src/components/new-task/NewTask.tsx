import { useRef } from "react";
import { Task } from "../../domain/model/Task";
import styles from "./NewTask.module.css";


export interface NewTaskPros {
  newTaskEvent: (task: Task) => void;
}

export function NewTask({ newTaskEvent }: NewTaskPros) {

  const textRef = useRef<HTMLInputElement>(null);
  const handleSendButton = () => {
    newTaskEvent({
      id: 0,
      text: textRef.current?.value ?? '',
      status: 'TO-DO'
    });
  }
  return <form>
    <div className={styles.formContainer}>
      <div><h2>New Task</h2></div>
      <div>
        <label htmlFor="text">Text</label>
        <input type="text" id="text" ref={textRef} />
      </div>
      <div>
        <button type="button" onClick={handleSendButton}>Add</button>
      </div>
    </div>
  </form>
}