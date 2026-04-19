import UserForm from "./UserForm";

export default function Cart({ cart, totalAmt, removeFromCart, changeQty }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Cart is empty 😶</p>}

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt="" />

          <div>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>

            <div className="qty">
              <button onClick={() => changeQty(item.id, "dec")}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => changeQty(item.id, "inc")}>+</button>
            </div>
          </div>

          <button onClick={() => removeFromCart(item.id)}>❌</button>
        </div>
      ))}

      <h3>Total: ₹{totalAmt}</h3>

      {cart.length > 0 && <UserForm />}
    </div>
  );
}
