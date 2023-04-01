import { useState } from "react";

const App = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {};
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default App;
