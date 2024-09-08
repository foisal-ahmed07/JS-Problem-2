function minPhonePrice(prices) {
  let min = prices[0];
  for (let price of prices) {
    if (price < min) {
      min = price;
    }
  }
  return min;
}

const prices = [20000, 15000, 150000, 30000, 50000, 70000, 200000, 6000];
const minprice = minPhonePrice(prices);
console.log(minprice);
