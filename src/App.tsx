import { ShoppingItemTable } from "./components/shoppingItem-table/ShoppingItemTable";
import { NewShoppingItem } from "./components/new-shoppingItem/NewShoppingItem";
import { Summary } from "./components/summary/Summary";

import "./App.css";

function App() {
  return (
    <>
      <ShoppingItemTable />
      <NewShoppingItem />
      <Summary />
    </>
  );
}

export default App;
