
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


