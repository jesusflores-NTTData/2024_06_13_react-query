import { delay, http, HttpResponse } from "msw";
import { User } from "../domain/model/User";

const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
    phone: "555-123-4567",
    recentPurchases: ["Milk", "Bread", "Eggs"],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    address: {
      street: "456 Oak St",
      city: "Othertown",
      state: "TX",
      zip: "67890",
    },
    phone: "555-987-6543",
    recentPurchases: ["Apples", "Chicken", "Rice"],
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    address: {
      street: "789 Pine St",
      city: "Sometown",
      state: "NY",
      zip: "11223",
    },
    phone: "555-555-5555",
    recentPurchases: ["Oranges", "Butter", "Pasta"],
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob.brown@example.com",
    address: {
      street: "101 Maple St",
      city: "Newtown",
      state: "FL",
      zip: "33445",
    },
    phone: "555-666-7777",
    recentPurchases: ["Bananas", "Yogurt", "Granola"],
  },
  {
    id: 5,
    name: "Carol White",
    email: "carol.white@example.com",
    address: {
      street: "202 Birch St",
      city: "Oldtown",
      state: "WA",
      zip: "99887",
    },
    phone: "555-888-9999",
    recentPurchases: ["Chicken", "Lettuce", "Tomatoes"],
  },
];

let failCount = 0;

export const usersHandler = [
  http.get(`*/api/Users/:id`, async (req) => {
    const { id } = req.params;
    const parsedId = parseInt(id as string);

    failCount--;
    await delay(getRandomTimeByLevel(parsedId));
    if (failCount + 1 <= 0) {
      const result = users.filter((user) => user.id === parsedId);
      return HttpResponse.json(result[0]);
    }
    return getError();
  }),
];

function getError(code = 500, message = "server error") {
  return new HttpResponse(message, { status: code });
}

function getRandomTimeByLevel(level: number) {
  let minSeconds, maxSeconds;

  switch (level) {
    case 1:
      minSeconds = 1;
      maxSeconds = 2;
      break;
    case 2:
      minSeconds = 7;
      maxSeconds = 9;
      break;
    case 3:
      minSeconds = 9;
      maxSeconds = 12;
      break;
    default:
      throw new Error("Invalid level. Please provide a level between 1 and 3.");
  }

  const randomSeconds = Math.random() * (maxSeconds - minSeconds) + minSeconds;
  return randomSeconds * 1000;
}
