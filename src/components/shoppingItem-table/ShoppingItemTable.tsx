import { ShoppingItem } from "../../domain/model/ShoppingItem";
import styles from "./ShoppingItemTable.module.css";

export function ShoppingItemTable({}: any) {
  const shoppingItems: ShoppingItem[] = [
    {
      id: 1,
      purchased: false,
      name: "Milk",
      quantity: 1,
    },
    {
      id: 2,
      purchased: false,
      name: "Eggs",
      quantity: 1,
    },
    {
      id: 3,
      purchased: false,
      name: "Bread",
      quantity: 1,
    },
    {
      id: 4,
      purchased: false,
      name: "Butter",
      quantity: 1,
    },
  ];

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
        {shoppingItems.map((shoppingItem) => {
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
