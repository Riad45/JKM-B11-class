// use async keyword before the function and use await keyword before which one will take time



// const exampleOfAsyncAwait = () => {

//     console.log("hi there ");

//  fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res=>res.json())
//     .then(data=>console.log(data))
//     .catch(error=>console.error(error)
//     )
// console.log("byeeeeeeeeeee");
// }

// exampleOfAsyncAwait();


const exampleOfAsyncAwait = async () => {

    try{
        console.log("hi there ");

        const response= await fetch("https://jsonplaceholder.typicode.com/users");
       
        const data = await response.json();
       
        console.log(data);
       
       
          
       console.log("byeeeeeeeeeee");
    }
    catch{
        console.error("error");
        
    }

}

exampleOfAsyncAwait();



// here we use try catch to handle the error as we can not use .then and .catch 