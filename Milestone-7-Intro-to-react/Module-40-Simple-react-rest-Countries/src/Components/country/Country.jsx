import React, { useState } from 'react';
import './country.css'

const Country = ({country}) => {

    const [visited, setVisited] = useState(false);

    const handleVisit = ()=>{

        setVisited(!visited);
    }
    return (
        <div className={`country ${visited && 'card-background'}`}>
            <img src={country.flags.png} alt="" />
            <h3>Name: {country.name.common}</h3>
            <p>Capital: {country.capital} </p>
            <p>Region: {country.region} , {country.subregion} </p>
            <p>Population: {country.population} </p>
            <p>Timezone: {country.timezones[0]} </p>

            <button onClick={handleVisit}>{visited?'Visited':'Not Visited'}</button>
        
            
        </div>
    );
};

export default Country;