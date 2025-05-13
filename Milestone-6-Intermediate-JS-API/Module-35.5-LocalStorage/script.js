
const person ={
    name: "sojib",
    age: 10,
    height: "5 feet 10"
}

// console.log(typeof(person));

const addItemToLocal = ()=>{

const convertedToString = JSON.stringify(person);


localStorage.setItem("person 1", convertedToString);

}

const getFromLocal=()=>{
    const value = localStorage.getItem("person 1");
    
    const convertedToObject = JSON.parse(value);
    console.log(convertedToObject.name);
}