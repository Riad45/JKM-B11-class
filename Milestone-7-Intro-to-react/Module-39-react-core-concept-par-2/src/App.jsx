
import './App.css'
import Counter from './Counter';
import Bowler from './bowler';

import Users from './User';
import Comments from './comments';
import { Suspense } from 'react';



function App() {

  const handleBtn1 = ()=>{
    alert('Hi im from btn 1');
  }

  const add5=(num)=>{
    alert(`the sum after adding 5 is: ${num+5}` );
  }

  const handleBtn3 = ()=>{
    alert("this is btn 2");
  }

  const multiply3 = (num)=>{
    alert(`after multiplying with 3 the result is ${num*3}`);
  }


  const userData = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res=> res.json());


  const comments = async()=>{

    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    return response.json();

  }


  return (
    <>
      
      <h1>Vite + React</h1>

      <h3>event handler basic</h3>

      <button onClick={handleBtn1}>btn 1</button>
      <p>When we need to pass a value to a function then we will set a anonymous function for onClick and inside that anonymous arrow function we will declare our desire function .. As in js if we give a function name with () it will automically called the function.. to avoid this we use the anonymous way </p>

      <button onClick={()=>add5(4)}>btn2</button>

      <Counter></Counter>

      <button onClick={handleBtn3}>Button 3</button> <br /><br />

      <button onClick={()=>multiply3(5)}>pass value btn</button>

      <Bowler></Bowler>

      <Suspense fallback= {<h3>User ureee Uree Aseeeeeeeeeeeeeeeeee</h3>}>
        <Users userData={userData} ></Users>
      </Suspense>

      <Suspense fallback= {<h3>Ektu Daraw.......</h3>}>
        <Comments comments= {comments()}> </Comments>
      </Suspense>

   
    </>
  )
}

export default App
