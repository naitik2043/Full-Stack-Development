export default function ProductCard({ product, addToCart, cart }) {
  const alreadyInCart = cart.find(item => item.id === product.id);

  return (
    <div className="card">
      <img src={product.image} alt="" />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      <button
        onClick={() => addToCart(product)}
        disabled={alreadyInCart}
      >
        {alreadyInCart ? "Added ✅" : "Add to Cart"}
      </button>
    </div>
  );
}