let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product, color, qty) {
  const item = cart.find(
    i => i.id === product.id && i.color === color
  );

  if (item) item.qty += qty;
  else cart.push({ ...product, color, qty });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart 🛒");
}

function totalAmount(discount = 0) {
  const total = cart.reduce(
    (sum, i) => sum + i.price * i.qty, 0
  );
  return total - discount;
}
