import React from 'react';
import { LuCircleCheckBig } from "react-icons/lu";

const PricingCard = ({data}) => {
    const{name,price,duration,description,features,highlight} = data ;
    return (
        <div className='hover:bg-slate-300 bg-slate-900 hover:text-slate-950 p-15 rounded-2xl shadow-slate-300 hover:shadow-cyan-400 shadow-2xl/20 relative'>

        {
            highlight && <p className=' absolute top-4 right-6 px-2 rounded-2xl bg-green-300 text-black text-sm font-medium'> Most popular</p>
        }

            <h2 className='text-4xl font-bold'> {name}</h2>
            <p className='mb-6'>{description}</p>
            <span className='flex items-baseline mb-6'><h2 className='text-4xl font-medium'>${price}/</h2><p>{duration}</p></span>
            <ul className='mb-6'>
                {
                    features.map((feature,index)=> <li className='flex items-center gap-2' key={index}> <LuCircleCheckBig /> {feature} </li>)
                }
            </ul>
            <button className="btn btn-outline btn-primary">Subscribe</button>
            
        </div>
    );
};

export default PricingCard;