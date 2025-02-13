
const string = "My name is Khalid Hasan Riad"

let revString= [];

for(let character of string){

    revString.unshift(character);

}

console.log(string);
console.log(revString.join(""));

let revString2 = string.split("").reverse().join("");

console.log(revString2);