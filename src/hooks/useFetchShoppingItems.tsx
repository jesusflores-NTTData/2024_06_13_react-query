import { queryOptions, useQuery } from "@tanstack/react-query";
import { fetchShoppingItems } from "../infraestructure/ShoppingRepository";
import { ShoppingItem } from "../domain/model/ShoppingItem";

interface useFetchShoppingItemsProps {
  useStale?: boolean;
  minutesUntilStale?: number;
}

export const useFetchShoppingItems = ({
  useStale,
  minutesUntilStale = 0,
}: useFetchShoppingItemsProps) => {
  const defaultOptions = {
    queryKey: ["shoppingItemsList"],
    queryFn: fetchShoppingItems,
    select: (shoppingItems: ShoppingItem[]) =>
      shoppingItems.map((shoppingItem) => ({
        ...shoppingItem,
        price: shoppingItem.price.toFixed(2),
      })),
  };

  let options;

  if (useStale) {
    options = queryOptions({
      ...defaultOptions,
      staleTime: 1000 * 60 * minutesUntilStale,
    });
  } else {
    options = queryOptions({
      ...defaultOptions,
    });
  }

  return useQuery(options);
};
