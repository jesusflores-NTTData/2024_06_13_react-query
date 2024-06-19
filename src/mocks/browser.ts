import { setupWorker } from "msw/browser";
import { shoppingItemsHandler } from "./shoppingItemsHandler";
import { usersHandler } from "./usersHandler";
import { moviesHandler } from "./moviesHandler";

export const worker = setupWorker(
  ...shoppingItemsHandler,
  ...usersHandler,
  ...moviesHandler
);
