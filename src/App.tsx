import { ShoppingItemTable } from "./components/shoppingItem-table/ShoppingItemTable";
import { NewShoppingItem } from "./components/new-shoppingItem/NewShoppingItem";
import { Summary } from "./components/summary/Summary";

import "./App.css";
import { useState } from "react";

function App() {
  const [showTable, setShowTable] = useState(true);

  return (
    <>
      <button onClick={() => setShowTable(!showTable)}>
        {showTable ? "Hide Table" : "Show Table"}
      </button>
      {showTable && <ShoppingItemTable />}
      <NewShoppingItem />
      <Summary />
    </>
  );
}

export default App;
