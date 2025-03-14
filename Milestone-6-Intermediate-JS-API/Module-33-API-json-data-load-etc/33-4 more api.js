 const handleUserData =()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        displayData(data);
    })
 }

 const displayData= (userData)=>{
    console.log("first user data");
    console.log(userData[0]);
 }