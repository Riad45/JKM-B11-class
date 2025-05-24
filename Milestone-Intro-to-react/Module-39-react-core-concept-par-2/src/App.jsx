
import './App.css'

function App() {

  const handleBtn1 = ()=>{
    alert('Hi im from btn 1');
  }

  const add5=(num)=>{
    alert(num+5 );
  }


  return (
    <>
      
      <h1>Vite + React</h1>

      <h3>event handler basic</h3>

      <button onClick={handleBtn1}>btn 1</button>
      <p>When we need to pass a value to a function then we will set a anonymous function for onClick and inside that anonymous arrow function we will declare our desire function .. As in js if we give a function name with () it will automically called the function.. to avoid this we use the anonymous way </p>

      <button onClick={()=>add5(4)}>btn2</button>
   
    </>
  )
}

export default App
