import { useRef } from "react";
import styles from "./NewShoppingItem.module.css";
import { postNewShoppingItem } from "../../infraestructure/ShoppingRepository";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function NewShoppingItem() {
  const nameRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();

  const handleSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["shoppingItemsList"] });
  };

  const { mutate } = useMutation({
    mutationFn: postNewShoppingItem,
    onSuccess: handleSuccess,
  });

  const handleNewShoppingItem = () => {
    mutate({
      id: 0,
      name: nameRef?.current?.value || "",
      quantity: parseInt(quantityRef?.current?.value || "0"),
      purchased: false,
      price: 1.456,
    });
  };

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
          <button type="button" onClick={handleNewShoppingItem}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
