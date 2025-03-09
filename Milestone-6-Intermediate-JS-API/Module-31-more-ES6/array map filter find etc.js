const products = [
    {id:1 , name: "iphone 12" , color: "Silver", price: 1000, brand: "Apple"} ,
    {id:2 , name: "MI 11" , color: "Black", price: 600, brand: "Xiomi"} ,
    {id:3 , name: "Oppo A2" , color: "White", price: 300, brand: "Oppo"} ,
    {id:4 , name: "iphone 16" , color: "Gold", price: 1200, brand: "Apple"} ,
    {id:5 , name: "Nothing 1" , color: "Black", price: 650, brand: "Nothing"}
]

// map

// const newArr = products.map(product=>console.log(product.price));

// map can get every elements of an array and return it in a array .. works as like loop .. but it is more simple 


// increase the price of every product using map 

// const newArr = products.map(product=>{
//     product.price+=100;

//     return product;
// });

// console.log(newArr);

console.log("\n\n\n");

const increaseApplePrice = products.map(product=>{
    if(product.brand== "Apple"){
        product.price+=100;
    }

    return product;
})

console.log(increaseApplePrice);

