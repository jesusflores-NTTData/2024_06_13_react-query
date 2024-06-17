import { useRef } from "react";
import styles from "./NewShoppingItem.module.css";

export function NewShoppingItem() {
  const nameRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);

  return (
    <form>
      <div className={styles.formContainer}>
        <div>
          <h2>New Shopping Item</h2>
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameRef} />
          <input
            type="number"
            id="quantity"
            ref={quantityRef}
            defaultValue={1}
            min={1}
          />
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              console.log("To implement");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
