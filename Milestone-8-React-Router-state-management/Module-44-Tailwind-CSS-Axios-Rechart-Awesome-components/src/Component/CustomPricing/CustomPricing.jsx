import React, { use } from 'react';
import PricingCard from './PricingCard';

const CustomPricing = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);

    console.log(pricingData);
    return (
        <div className='grid md:grid-cols-3 place-items-center gap-[10%] mx-[10%] '>
            {
                pricingData.map(data=> <PricingCard key={data.id} data={data}></PricingCard>)
            }
        </div>
    );
};

export default CustomPricing;