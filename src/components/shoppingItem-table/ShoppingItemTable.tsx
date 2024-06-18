import { useQuery } from "@tanstack/react-query";
import { fetchShoppingItems } from "../../infraestructure/ShoppingRepository";

import styles from "./ShoppingItemTable.module.css";
import { useEffect, useState } from "react";

export function ShoppingItemTable({}: any) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [queryStatusText, setQueryStatusText] = useState(
    "No data available..."
  );

  // Success Response (200 OK)
  const {
    isLoading,
    isError,
    data: shoppingItems,
  } = useQuery({
    queryKey: ["shoppingItemsList"],
    queryFn: fetchShoppingItems,
    enabled: isEnabled,
  });

  useEffect(() => {
    if (isLoading) setQueryStatusText("Loading data...");
    if (isError) setQueryStatusText("Something went wrong...");
  }, [isLoading, isError]);

  return (
    <>
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
          {shoppingItems && shoppingItems.length > 0 ? (
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
            })
          ) : (
            <tr>
              <td colSpan={5}>{queryStatusText}</td>
            </tr>
          )}
        </tbody>
      </table>
      <button onClick={() => setIsEnabled(true)}>Launch Query</button>
    </>
  );
}
