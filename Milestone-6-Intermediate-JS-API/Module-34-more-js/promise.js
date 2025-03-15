/*  create promise 
  some function are by defult return promise like fetch()
  
  but we can create promise by our own using the Promise  constructor that takes a function as a parameter and inside that function it takes 2 parameter resolve and reject  */




  const createPromise = ()=>{

    return new Promise((resolve, reject)=>{
        const status = true;

        if(status){
            resolve("get data successfully");
        }

        else{
            reject("catch the error");
        }
    })
  }
//   console.log(createPromise());
  createPromise()
  
  .then(response=>response)
  .then(data=> console.log("dataaaa"))
  .catch(error=>console.log(error))