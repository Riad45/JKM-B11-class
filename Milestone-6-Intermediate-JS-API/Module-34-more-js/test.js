let massage = "hello"

setTimeout(()=>{
    massage="hi"
},0)

console.log(massage);

// it will print the hello as the setTimeOut() is an asynchronous task


async function myFun() {
    return "oi kire oi kiree modhu modhu";
    
}

myFun().then(console.log);