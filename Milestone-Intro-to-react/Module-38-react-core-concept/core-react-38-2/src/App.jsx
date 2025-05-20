
import './App.css'

function App() {


  return (
    <>

    <h1>React core Concept</h1>

      <Pet></Pet>
      <Food></Food>
      
    </>
  )
}

function Pet() {

  return(
    <>

    <h2>This is pet componet</h2>

    <Food></Food>
    <p>List of pet</p>
    <ul>
      <li>Biral</li>
      <li>kukur</li>
      <li>tota</li>
      <li>snake</li>
    </ul>

    

    </>
  )
}

function Food(){

  const price = 2000;
  const expireDate = "25-2-2027"

  return(
    <>
    <p>Cat food: {price} taka date of expire: {expireDate}</p>

    </>
  )
}

export default App
