import "./App.css";
import { NewShoppingItem } from "./components/NewShoppingItem/NewShoppingItem";
import { ShoppingItemTable } from "./components/ShoppingItemTable/ShoppingItemTable";

function App() {
  return (
    <>
      <ShoppingItemTable />
      <NewShoppingItem />
    </>
  );
}

export default App;
