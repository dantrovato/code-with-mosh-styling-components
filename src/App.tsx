import { useState } from "react";
import { produce } from "immer";

const App = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  // // without immer
  // const handleClick = () => {
  //   const newPizza = { ...pizza, toppings: [...pizza.toppings] };
  //   newPizza.toppings.push("banana");
  //   setPizza(newPizza);
  // };

  // with immer
  const handleClick = () => {
    setPizza(
      produce((drafts) => {
        drafts.toppings.push("Melon");
      })
    );
  };
  return (
    <div>
      <ul>
        {pizza.toppings.map((topping) => (
          <li>{topping}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default App;
