

// slice --> by navigating index

console.log("Example of Slice:\n");

let fullName = "KhalidHasanRiad";

console.log("Full name: ",fullName);

let nickname = fullName.slice(11,15);

console.log("Nickname: ",nickname);

// split by specific character 

console.log("Example of Split:\n");

let MainSentance = "Hey there. I am Khalid Hasan Riad. The ultemate future Dev.";

console.log(MainSentance);

let word = MainSentance.split(" ");

console.log(word);

// join--> arrrays elemnt in a string __ i guess
console.log("Example of join:\n");

let afterJoin = word.join("|");

console.log(afterJoin);


// concat --> add two or more string 

let str1= "Riad";
let str2 = "Prokash"
let str3 = "Rigan"

let afterConcat = str1.concat(" ").concat(str2).concat(" ").concat(str3);

console.log(afterConcat);