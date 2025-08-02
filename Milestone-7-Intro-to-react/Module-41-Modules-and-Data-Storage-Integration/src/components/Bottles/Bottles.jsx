import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const Bottles = ({bottlesPromise}) => {

    const [cart, setCart] = useState([]);

const handleAddToCart = (bottle) =>{
  console.log("clicked on",bottle);
  const newCart = [...cart,bottle.name, ' and '];
  setCart(newCart);
}

    const bottlesData = use(bottlesPromise);
    
    return (
        <div>
            <h1>Total Bottles: {bottlesData.length}</h1>
            <h3>My Cart: {cart} </h3>
           <div className='bottles-container'>
             {bottlesData.map(bottle=> <Bottle
              bottle={bottle} 
              key={bottle.id}
              handleAddToCart={handleAddToCart}>

            </Bottle>)}
           </div>
            
        </div>
    );
};

export default Bottles;