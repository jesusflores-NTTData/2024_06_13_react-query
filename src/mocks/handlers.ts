import { delay, http, HttpResponse } from "msw";
import { ShoppingItem } from "../domain/model/ShoppingItem";

const shoppingList: ShoppingItem[] = [
  {
    id: 1,
    name: "Apples",
    quantity: 3,
    purchased: false,
  },
  {
    id: 2,
    name: "Milk",
    quantity: 1,
    purchased: false,
  },
  {
    id: 3,
    name: "Bread",
    quantity: 2,
    purchased: true,
  },
];

let failCount = 0;

export const handlers = [
  http.get("*/api/shopping-list", async () => {
    failCount--;
    await delay(1500);
    if (failCount + 1 <= 0) {
      return HttpResponse.json(shoppingList);
    }
    return getError();
  }),
  http.post("*/api/shopping-list", async ({ request }) => {
    const item = (await request.json()) as ShoppingItem;
    addItemToList(item);
    console.log(shoppingList);
    await delay(1500);
    return new Response(null, { status: 200 });
  }),
  http.patch("*/api/shopping-list", async ({ request }) => {
    const itemData = (await request.json()) as {
      id: number;
      purchased: boolean;
    };
    const item = shoppingList.find((i) => i.id === itemData.id);
    await delay(1500);
    if (item) {
      item.purchased = itemData.purchased;
      console.log(shoppingList);
      return new Response(null, { status: 200 });
    }
    return getError(404, "Not found");
  }),
  http.post("*/api/cuadrado", async ({ request }) => {
    const item = (await request.json()) as { num: number };
    console.log("item", item);
    await delay(1500);
    return HttpResponse.json({ cuadrado: item.num * item.num });
  }),
];

function addItemToList(item: ShoppingItem): ShoppingItem {
  const ids = shoppingList.map((i) => i.id);
  item.id = Math.max(...ids) + 1;
  shoppingList.push(item);
  return item;
}

function getError(code = 500, message = "server error") {
  return new HttpResponse(message, { status: code });
}
