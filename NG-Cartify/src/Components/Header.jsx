export default function Header({ cartCount, setSearch }) {
  return (
    <div className="navbar">
      <div className="logo">
        {/* <img src={logo} alt="" /> */}
        <h2>ShopEasy</h2>
      </div>

      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="cart-count">🛒 {cartCount}</div>
    </div>
  );
}
