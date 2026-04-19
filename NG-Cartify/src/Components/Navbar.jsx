export default function Navbar({ cartCount, setSearch }) {
  return (
    <nav className="navbar">

      <div className="nav-left">
        {/* <img src={logo} alt="logo" className="logo" /> */}
        <h2>ShopEasy</h2>
      </div>

      <input
        type="text"
        placeholder="Search products..."
        className="search"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="nav-right">
        <span>Home</span>
        <span>Products</span>
        <span className="cart-icon">🛒 {cartCount}</span>
      </div>

    </nav>
  );
}