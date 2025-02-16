const products = [
    { name: "Shirt", price: 1400 , quntity: 5},
    { name: "Pant", price: 3400 , quntity: 2},
    { name: "T-Shirt", price: 600 , quntity: 6},
    { name: "Hoddie", price: 1100 , quntity: 2},
    { name: "Sneakers", price: 4200 , quntity: 1}

]

function totalPrice( products){

    let totalCost = 0;

    for(let product of products){
        totalCost += product.price  * product.quntity;
    }

    return totalCost;
}

console.log("Total cost: ",totalPrice(products));