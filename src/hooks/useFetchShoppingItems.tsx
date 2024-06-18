import { queryOptions, useQuery } from "@tanstack/react-query";
import { fetchShoppingItems } from "../infraestructure/ShoppingRepository";

interface useFetchShoppingItemsProps {
  useStale?: boolean;
  minutesUntilStale?: number;
}

// This hook is used to fetch data applying cache system from react-query or not
export const useFetchShoppingItems = ({
  useStale,
  minutesUntilStale = 0,
}: useFetchShoppingItemsProps) => {
  let options;

  if (useStale) {
    options = queryOptions({
      queryKey: ["shoppingItemsList"],
      queryFn: fetchShoppingItems,
      staleTime: 1000 * 60 * minutesUntilStale,
    });
  } else {
    options = queryOptions({
      queryKey: ["shoppingItemsList"],
      queryFn: fetchShoppingItems,
    });
  }

  return useQuery(options);
};
