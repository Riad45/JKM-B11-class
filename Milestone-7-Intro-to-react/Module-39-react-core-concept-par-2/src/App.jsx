
import './App.css'
import Counter from './Counter';
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

   
    </>
  )
}

export default App
