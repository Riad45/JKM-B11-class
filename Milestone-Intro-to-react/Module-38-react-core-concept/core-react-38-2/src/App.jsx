
import './App.css'

function App() {


  return (
    <>

    <h1>React core Concept</h1>

      <Pet></Pet>
      
      
    </>
  )
}

function Pet() {

  return(
    <>

    <h2>This is pet componet</h2>

    
    <p>List of pet</p>
    <ul>
      <li>
        <h2>Cat</h2>
        <Food price="450" quntity="1 kg" expireDate=" 24-5-2027"></Food>
      </li>
      <li>
        <h2>Dog</h2>
        <Food price="750" quntity="1 kg" expireDate=" 24-9-2027"></Food>
      </li>
      <li>
        <h2>Birds</h2>
        <Food price="500" quntity="1 kg" expireDate=" 1-5-2026"></Food>
      </li>
      <li>
        <h2>Snake</h2>
        <Food price="2250" quntity="3 kg" expireDate=" 9-12-2025"></Food>
      </li>
    </ul>

    

    </>
  )
}

function Food( props){

  const expireDateStyle ={
    color : 'red',

  }

  
  return(
    <div style={
      {
        margin : "20px" ,

        padding: "20px",
        border : "2px solid blue ",
        borderRadius:  "20px"

      }
    }>

    <h3>Food</h3>
    <ul>
      <li className='priceStyle'>Price: {props.price} </li>
      <li>Quntity:{props.quntity} </li>
      <li style={expireDateStyle}> Expire Date : {props.expireDate} </li>
    </ul>

    </div>
  )
}

export default App
