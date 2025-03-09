

// Access value of nested object and optional chaining  and dot ,bracket notation 

const person = {
    name: "Riad",
    age: 25,
    1: "yes",
    profession: {
        name: "student",
        id: 911,
        dept: "SWE",
        uni: {
            name: "daffodil",
            location: "Asulia"
        }
    }

}

// acces using . notation

const univarsityLocation = person.profession.uni.location;
console.log(univarsityLocation);

// Access using [] notation 

const uniLocation = person["profession"]["uni"]["location"];

console.log(uniLocation);


// [] notation is more powerfull than the . notation because . notation can not acces the value which key is a number or start with a number or true flase etc .. 
//  but the [] notation can access everything 

//  for example . notatation can not acces the 1 but [] notation can acces 1 using 
// preson[1]


// optional chainging 

//  if any key is undefied in an object and we call it we will get an error . to avoid this error we can use ? 
// instead of providing error it will show undefined 

//  below one will give error 


// const homeLocation = person.profession.home.location;

//  to avoid this error

const homeLocation = person.profession.home?.location;



console.log(homeLocation);



// map

console.log("\n\n Array Map\n\n");

const arr = [1,2,3,4,5];
const nameArry = ["rohim", "Korim", "Jobbar", "abul","Babul"];
let y=0;

const newArr = arr.map(x=>{
   
    x+=y;
    y++;
    return x;
});

console.log(newArr);