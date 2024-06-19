import { ShoppingItemTable } from "./components/shoppingItem-table/ShoppingItemTable";

import "./App.css";
import { useState } from "react";
import UserGrid from "./components/Users/UserGrid";

function App() {
  const [showTable, setShowTable] = useState(true);

  return (
    <>
      {/*       <button onClick={() => setShowTable(!showTable)}>
        {showTable ? "Hide Table" : "Show Table"}
      </button>
      {showTable && <ShoppingItemTable />} */}
      <UserGrid />
    </>
  );
}

export default App;
