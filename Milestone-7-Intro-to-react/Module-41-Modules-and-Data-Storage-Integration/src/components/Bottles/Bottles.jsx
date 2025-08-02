import React, { use } from 'react';
import Bottle from '../Bottle/Bottle';

const Bottles = ({bottlesPromise}) => {

    const bottlesData = use(bottlesPromise);
    console.log(bottlesData);
    return (
        <div>
            <h1>Total Bottles: {bottlesData.length}</h1>
            {bottlesData.map(bottle=> <Bottle bottle={bottle} key={bottle.id}>

            </Bottle>)}
            
        </div>
    );
};

export default Bottles;