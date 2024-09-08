const products = [
    {name:"sampoo", price:300},
    {name:"Shop", price:100},
    {name:"T-shirt", price:1200},
    {name:"Pant", price:1800},
    {name:"Snicker", price:4500},
    {name:"Silides", price:1300},
    {name:"Shirt", price:1200}
]
function totalProductPrice(products){
    let total = 0;
    for(const product of products){
        total = total + product.price;
        
    }
    let discount = (total * (10/100))
    let payment = total - discount;
    return payment;
}

const price = totalProductPrice(products);
console.log(price);