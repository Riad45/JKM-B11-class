
const products = [
    { name: "Shirt", price: 1400 },
    { name: "Pant", price: 3400 },
    { name: "T-Shirt", price: 600 },
    { name: "Hoddie", price: 1100 },
    { name: "Sneakers", price: 4200 }

]

function totalShoppingCost(products) {

    let totalCost=0;
    for (let product of products) {

        totalCost += product.price;

    }

    return totalCost;
}

console.log("Todays total cost of shopping is: ", totalShoppingCost(products));