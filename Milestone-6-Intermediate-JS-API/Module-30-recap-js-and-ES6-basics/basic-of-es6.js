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

const add = (a = 0, b = 0) => console.log(a + b);
add(30 + 40);
add(20); // testing the defulat parameter 

// spread operator using ...
console.log("\n\nspread operator using ... \n\n");

// we can get the all the value of an array using the spread operator
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
console.log(...numbers);
console.log(Math.max(...numbers));
 const num2 =[-1,-2,-3,...numbers];
 console.log(num2);

// object and array destructuring ---> assign array elements or object properties in a variable 

// object destructuring 

console.log("\n\nobject and array destructuring \n\n");

const student = {
    name: "রিয়াদ",
    age: 25,
    profession: {

        working: "বেকার",
        other: "student at diu swe"

    },
    status:"depressed"

}

console.log(student);

const {name, age, profession,status} = student;
console.log(profession);


// array destructuring 
 const rappers = ["biggie","2pac","snoop","eazy e","em","50cent","ice cube"];

 const [mota, takla,kukur]=rappers;

 console.log(kukur);




