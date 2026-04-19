import ProductCard from "./ProductCard";

export default function ProductList({ products, addToCart, cart }) {
  return (
    <div className="product-grid">
      {products.length === 0 ? (
        <h2>No product found 😢</h2>
      ) : (
        products.map(p => (
          <ProductCard
            key={p.id}
            product={p}
            addToCart={addToCart}
            cart={cart}
          />
        ))
      )}
    </div>
  );
}