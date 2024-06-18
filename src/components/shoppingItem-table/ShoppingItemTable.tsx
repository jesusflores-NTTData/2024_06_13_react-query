import { useQuery } from "@tanstack/react-query";
import { fetchShoppingItems } from "../../infraestructure/ShoppingRepository";

import styles from "./ShoppingItemTable.module.css";

export function ShoppingItemTable({}: any) {
  // Success Response (200 OK)
  const {
    isLoading,
    isError,
    data: shoppingItems,
  } = useQuery({
    queryKey: ["shoppingItemsList"],
    queryFn: fetchShoppingItems,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <table className={styles.ShoppingItemTable}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Purchased</th>
          <th>Name</th>
          <th>Action</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {shoppingItems &&
          shoppingItems.map((shoppingItem) => {
            return (
              <tr key={shoppingItem.id}>
                <td>{shoppingItem.id}</td>
                <td data-shoppingItem-purchased={shoppingItem.purchased}>
                  <span>{shoppingItem.purchased}</span>
                </td>
                <td>{shoppingItem.name}</td>
                <td>
                  <button
                    type="button"
                    onClick={() =>
                      console.log(
                        "Toggle to",
                        (shoppingItem.purchased = !shoppingItem.purchased)
                      )
                    }
                  >
                    Toggle to{" "}
                    {shoppingItem.purchased ? "Unpurchased" : "Purchased"}
                  </button>
                </td>
                <td>{shoppingItem.quantity}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
