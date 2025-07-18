
import './App.css'

import BuyFood  from './buyFood';

import Mobile from './Mobile';

function App() {


 const mobiles = [
  {id : 1 , name: "Mi 11 Lite",     brand: "Xiaomi",  color: "Blue",    price: 3500 },
  {id : 2, name: "Galaxy A55",     brand: "Samsung", color: "Awesome Black", price: 4200 },
  {id : 3 , name: "iPhone 14",      brand: "Apple",   color: "Midnight", price: 11800 },
  {id : 4, name: "Pixel 8a",       brand: "Google",  color: "Porcelain", price: 5200 },
  {id : 5 , name: "Redmi Note 13",  brand: "Xiaomi",  color: "Mint Green", price: 3100 }
];


  return (
    <>

    <h1>React core Concept</h1>

      {/* <Pet></Pet>
      <FoodShop name='Forid pet shop' location='Dhaka' purchaseAmt='950'></FoodShop>
      <FoodShop name='Khulna pet shop' location='Khulna'></FoodShop>
      <FoodShop name='hobby pet' location='Borishal' purchaseAmt='1200'></FoodShop>
       */}

       {/* <BuyFood name='fried chicken' price ='80'></BuyFood>
       <BuyFood name='Burger' price ='160'></BuyFood>
       <BuyFood name='Singara' price ='20'></BuyFood> */}

       {
        mobiles.map(phone => <Mobile key={phone.id} phone={phone}></Mobile>)
       }






      
      
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

function FoodShop ({name, location,purchaseAmt='kene nai'}){
  return(
    <div className='priceStyle'>

      <h3>Food Shop Details</h3>

      <p>Name: {name} </p>
      <p>Location: {location}</p>
      <p>purchase ammount : {purchaseAmt}</p>

    </div>
  )
}

export default App
