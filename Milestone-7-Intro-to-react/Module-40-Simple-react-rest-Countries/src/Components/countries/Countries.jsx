import React, { use } from 'react';
import Country from '../country/Country';
import './countries.css'

const Countries = ({countriesPromise}) => {

    const countriesData = use(countriesPromise);

    console.log(countriesData);
    return (
        <div>
            <h1>Total countires: {countriesData.length}</h1>
           <div className='countries'>
             {countriesData.map(country=><Country key={country.name.common} country={country}></Country>)}
           </div>
        </div>
    );
};

export default Countries;