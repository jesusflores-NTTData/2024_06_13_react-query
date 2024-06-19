import { setupWorker } from "msw/browser";
import { shoppingItemsHandler } from "./shoppingItemsHandler";
import { usersHandler } from "./usersHandler";

export const worker = setupWorker(...shoppingItemsHandler, ...usersHandler);
