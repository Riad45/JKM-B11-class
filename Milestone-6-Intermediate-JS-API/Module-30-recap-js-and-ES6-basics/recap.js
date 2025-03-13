//? arrow function 
// const/let functionName = (parameters) => { 
    // function body
// };

// If there is only one parameter, parentheses can be omitted.
// If there is no parameter, parentheses are required.
// If the function has only one expression, {} and return can be omitted.



const noPara = ()=> console.log("hello world");

const onepara = a => a;

const multiplePara = (a,b)=> a*b; // if only one expression no need of {} and return

const multiplePara2 = (a,b)=>{
     const result = a*b;
     return result;
}

noPara();
console.log(onepara(5));
console.log(multiplePara(5,6));
console.log(multiplePara2(6,7));


// 30-9

console.log("\n\n\n");

const student = {
    name: "রিয়াদ",
    age: 25,
    profession: {

        working: "বেকার",
        other: "student at diu swe"

    },
    status:"depressed"

}

for(let value in student){
    console.log(value);
    console.log(student[value]);
}

console.log("\n\n\n");

// for(let [k,v] of Object.entries(student)){
    
//     console.log(`key : ${k}  value: ${v}`);
// }

const printObjectEntries = (obj, parentKey = "") => {
    for (let [key, value] of Object.entries(obj)) {
        // If the value is an object, call the function recursively
        if (typeof value === "object" && value !== null) {
            printObjectEntries(value, `${parentKey}${key}.`); // Append parent key for better formatting
        } else {
            console.log(`Key: ${parentKey}${key}  Value: ${value}`);
        }
    }
};

printObjectEntries(student);
