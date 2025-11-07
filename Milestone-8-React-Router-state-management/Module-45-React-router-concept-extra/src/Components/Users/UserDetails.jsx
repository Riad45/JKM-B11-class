import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const detailData= useLoaderData();
    const {name, email, address, website} = detailData;
    return (
        <div className='mx-40 my-20'>

          <div className="mockup-window bg-base-100 border border-base-300">
  <div className="grid place-content-center h-80">
    <h1 className='text-xl font-bold'>{name}</h1>
    <p>{email}</p>
    <h1>Address:</h1>
    <p>{address.street}  {address.suite}</p>
    <p>{website}</p>

  </div>
</div>
            
        </div>
    );
};

export default UserDetails;