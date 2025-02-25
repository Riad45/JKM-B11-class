console.log("hellow there:");

// const liCollection= document.getElementsByTagName("li");

// for(let li of liCollection){
//     console.log(li.innerText);
// }

console.log(document.getElementById("heading").innerText="changing the title by js ....");
 
const byClass = document.getElementsByClassName("list-1");

for(const item of byClass){
    console.log(item);
}



// query Selector and querySelectorAll is more powerful but not dynamic

document.querySelector("#sndUl  li");

const selectorAll = document.querySelectorAll("#sndUl");

for(let selectItem of selectorAll){

    console.log(selectItem.innerText);
}