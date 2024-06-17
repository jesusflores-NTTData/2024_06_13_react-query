import { ShoppingItem } from "../domain/model/ShoppingItem";
const BASE_URL = "https://www.react-query-mocks.com";

export async function fetchShoppingItems(): Promise<ShoppingItem[]> {
  const result = await fetch(`${BASE_URL}/api/ShoppingItems`);
  if (result.status === 200) {
    return (await result.json()) as ShoppingItem[];
  }
  throw new Error("STATUS: " + result.status);
}

export async function postNewShoppingItem(
  shoppingItem: ShoppingItem
): Promise<void> {
  const bodyTxt = JSON.stringify(shoppingItem);
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: bodyTxt,
  };
  await fetch(`${BASE_URL}/api/ShoppingItems`, options);
}
export async function sendUpdateShoppingItemStatus(
  shoppingItem: ShoppingItem
): Promise<void> {
  const bodyTxt = JSON.stringify({
    id: shoppingItem.id,
    purchased: shoppingItem.purchased,
  });
  const options = {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: bodyTxt,
  };
  await fetch(`${BASE_URL}/api/ShoppingItems`, options);
}
