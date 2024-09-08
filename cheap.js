const phones = [
  { name: "samsumg", price: 50000, camara: "48mp", color: "black" },
  { name: "iphone", price: 150000, camara: "48mp", color: "black" },
  { name: "xiaomi", price: 35000, camara: "48mp", color: "black" },
  { name: "one plus", price: 30000, camara: "48mp", color: "black" },
  { name: "tecno", price: 20000, camara: "48mp", color: "black" },
  { name: "Walton", price: 10000, camara: "48mp", color: "black" },
];

function cheapPhone(phones) {
  let cheap = phones[0];
  for (let phone of phones) {
    if (phone.price < cheap.price) // 150000 < 50000;
    {
      cheap = phone;
    }    
  }
  return cheap;
}

const mobile = cheapPhone(phones);
console.log(mobile);
