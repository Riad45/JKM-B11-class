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


// dynamic style get set attribute classlist add remove innerText innerHTML
const manipulation1 = document.getElementById("dynamic-p");

// add style
manipulation1.style.textAlign= "center";

manipulation1.setAttribute("class","bg");

// setAttribute("class", "bg") will remove all previous classes and replace them with "bg".
manipulation1.getAttribute("class");
manipulation1.setAttribute("class"," bg-2 bg-3");
manipulation1.getAttribute("class");



