import { useState } from "react";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
const App = () => {
  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
