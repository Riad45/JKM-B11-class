
// array destructuring 



const arr = ["Mita", "Fita","Tita","Gita"];

const [el1,el2,el3] = arr;

console.log(el3);

// object destructuring 

const person= {
    name: "Rohim",
    age: 26,
    skills: ["html", "CSS","js","c++","java"],
    profession: "web dev learner"
}

const {name,age,profession,skills} = person;

console.log(name);
console.log(skills[3]);



const key = Object.keys(person);
console.log(key);

const value = Object.values(person);
console.log(value);

// array method

const mobile = [
  { name: "Mi 11 Lite",     brand: "Xiaomi",  color: "Blue",    price: 3500 },
  { name: "Galaxy A55",     brand: "Samsung", color: "Awesome Black", price: 4200 },
  { name: "iPhone 14",      brand: "Apple",   color: "Midnight", price: 11800 },
  { name: "Pixel 8a",       brand: "Google",  color: "Porcelain", price: 5200 },
  { name: "Redmi Note 13",  brand: "Xiaomi",  color: "Mint Green", price: 3100 },
  { name: "Realme 12 Pro",  brand: "Realme",  color: "Submarine Blue", price: 3600 },
  { name: "OnePlus Nord 3", brand: "OnePlus", color: "Tempest Gray", price: 4600 },
  { name: "Poco X6 Pro",    brand: "Poco",    color: "Phantom Black", price: 3800 }
];


// key and values 

const keys = Object.keys(person);

console.log(keys);


const values = Object.values(person);
console.log(values);



const brands = mobile.map(brand=> brand.brand
)

console.log(brands);

const priceOver4000 = mobile.filter(p=> p.price>4000);
console.log(priceOver4000);


const personStringify = JSON.stringify(mobile);
console.log(personStringify);

const stringifyToReal = JSON.parse(personStringify);
console.log(stringifyToReal);

// ternary operator

//  condition ? if ture : if false ;

const num = 23;

(num>20 && num<30) ? console.log("true") : console.log("false");