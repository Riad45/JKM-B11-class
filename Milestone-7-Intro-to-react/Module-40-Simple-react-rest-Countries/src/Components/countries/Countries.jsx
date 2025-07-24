import React, { use } from 'react';
import Country from '../country/Country';

const Countries = ({countriesPromise}) => {

    const countriesData = use(countriesPromise);

    console.log(countriesData);
    return (
        <div>
            <h1>piew</h1>
            {countriesData.map(country=><Country country={country}></Country>)}
        </div>
    );
};

export default Countries;