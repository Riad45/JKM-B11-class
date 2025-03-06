// defualt parameter of a function 

console.log("\n\ndefualt parameter of a function \n\n");

function showName(name = "guest") {

    console.log(`your name is ${name}`); // here I use the template string and use it dynamically 
    console.log(typeof (name));
}
showName();
showName("riad");
showName(`prokash`);

// arrow functtion
console.log("\n\nNow arrow function \n\n");

const add = (a=0,b=0) => console.log(a+b);
add(30+40);
add(20); // testing the defulat parameter 

// spread operator using ...
console.log("\n\nspread operator using ... \n\n");

// we can get the all the value of an array using the spread operator
const numbers = [1,2,3,4,5,6,7,8,9];
console.log(numbers);
console.log(...numbers);
console.log(Math.max(...numbers));




