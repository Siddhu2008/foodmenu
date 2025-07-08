import Header from "./component/header";
import FoodInput from "./component/FoodInput";
import ErrorMessage from "./component/Errormessage";
import FoodItems from "./component/FoodItems";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";

function App() {
  const [helthyItems, sethelthyItems] = useState([]);
  const handleInput = (event) => {
    let inputValue = event.target.value;
    let newhelthyItems = [...helthyItems, inputValue];

    if (event.key === "Enter") {
      sethelthyItems(newhelthyItems);
      event.target.value = "";
    }
  };
  return (
    <center>
      <div className="container">
        <Header />
        <FoodInput handleInput={handleInput} />
        {helthyItems.length === 0 && <ErrorMessage helthyItems={helthyItems} />}
        <FoodItems helthyItems={helthyItems}></FoodItems>
      </div>
    </center>
  );
}

export default App;
