interface Props {
  cartItems: string[];
}

const Cart = ({ cartItems }: Props) => {
  return (
    <div>
      <h1>Cart:</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
