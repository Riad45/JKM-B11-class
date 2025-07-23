//  normal fetch 

import { use } from "react"

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res=>res.json())
// .then(data=> console.log(data));

// const loadData = async ()=>{

//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = response.json();
//     console.log(data);
// }

export default function Users ({userData}){

    const users = use(userData);
    console.log(users.length);


    return(

        <>

        <h1>User: {users.length} </h1>
        
        </>
    )
}