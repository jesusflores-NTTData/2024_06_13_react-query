import styles from "./ShoppingItemTable.module.css";
import { useEffect, useState } from "react";
import { useFetchShoppingItems } from "../../hooks/useFetchShoppingItems";

export function ShoppingItemTable({}: any) {
  const [queryStatusText, setQueryStatusText] = useState(
    "No data available..."
  );

  const {
    isLoading,
    isError,
    data: shoppingItems,
  } = useFetchShoppingItems({ useStale: true, minutesUntilStale: 1 });

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
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {shoppingItems && shoppingItems.length > 0 ? (
            shoppingItems.map((shoppingItem) => {
              return (
                <tr key={shoppingItem.id}>
                  <td>{shoppingItem.id}</td>
                  <td>{shoppingItem.name}</td>
                  <td>{shoppingItem.quantity}</td>
                  <td>{shoppingItem.price}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4}>{queryStatusText}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
