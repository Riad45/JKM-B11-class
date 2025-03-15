// async function data(){
//     return "hellow , async";
// }

// console.log(data());

// data().then(res=>console.log(res));


// console.log("task 1");

// setTimeout(() => {
//     console.log("task-2");
// }, 2000);

// console.log("task-3");


async function asyncFun() {

    console.log("task 11");

await new Promise(solve=> setTimeout(()=>{
    console.log("task-12");
    solve();
},2000));

console.log("task-13");
    
}
asyncFun();