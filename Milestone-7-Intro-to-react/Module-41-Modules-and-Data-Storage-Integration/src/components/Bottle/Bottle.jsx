import React from 'react';
import './bottle.css';

const Bottle = ({bottle,handleAddToCart}) => {

    const {name,price,stock,img} = bottle;
    return (
        <div className='card bottle'>

            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <p>Remaining: {stock}</p>
            <button onClick={()=>handleAddToCart(bottle)}>Buy Now</button>
            
        </div>
    );
};

export default Bottle;