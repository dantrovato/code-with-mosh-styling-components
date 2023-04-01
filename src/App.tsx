import { useState } from "react";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
const App = () => {
  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);
  const handleClear = () => {
    const newItems = [...cartItems];
    newItems.shift();
    setCartItems(newItems);
  };

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={handleClear} />
    </div>
  );
};

export default App;
