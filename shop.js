const products = [
  { name: "sampoo", price: 300, quantity: 5 },
  { name: "sabann", price: 100, quantity: 3 },
  { name: "Pant", price: 1800, quantity: 2 },
  { name: "T-shirt", price: 1200, quantity: 3 },
  { name: "Snicker", price: 4500, quantity: 1 },
  { name: "Silides", price: 1300, quantity: 1 },
  { name: "Shirt", price: 1200, quantity: 3 },
];

function cartTotal(products) {
  let total = 0;

  for (const product of products) {
    const quantityPrice = product.price * product.quantity;
    total = total + quantityPrice;
  }
  return total;
}

const price = cartTotal(products);
console.log(price);
