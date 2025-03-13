const person = {
    name: "Riad",
    age: 25,
    friends: ["abul","Babul","Dabul"],
    status: true
}

console.log(person);

const objToJson = JSON.stringify(person);

console.log(objToJson);

const jsonToObj = JSON.parse(objToJson);

console.log(jsonToObj);