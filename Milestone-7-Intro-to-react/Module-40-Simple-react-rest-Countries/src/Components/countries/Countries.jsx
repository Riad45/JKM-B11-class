import React, { use, useState } from 'react';
import Country from '../country/Country';
import './countries.css'

const Countries = ({countriesPromise}) => {

    const countriesData = use(countriesPromise);

    const [visitedCountries, setVisitedCountries]= useState([]);

    const handleVisitedCountries=(country)=>{

        const newVisitedCountries = [...visitedCountries,country];

        setVisitedCountries(newVisitedCountries);
    }

   
    return (
        <div>
            <h1>Total countires: {countriesData.length}</h1>
            <h2>Travel So far: {visitedCountries.length}</h2>
            {visitedCountries.map(vCountiresList=> 
                <li> { vCountiresList.name.common} </li>
             )}
           <div className='countries'>
             {countriesData.map(country=><Country key={country.name.common}
              country={country}
              handleVisitedCountries ={handleVisitedCountries}
              ></Country>)}
           </div>
        </div>
    );
};

export default Countries;