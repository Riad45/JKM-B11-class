import React from 'react';
import { useLoaderData } from 'react-router';
import UsersCard from '../Users/UsersCard';

const Users = () => {

    const usersData = useLoaderData();
   
    // const [name,email,phone] =usersData;
    return (
        <div className='flex justify-center items-center'>
            <div className='grid grid-cols-2 gap-10'>

            {
                usersData.map(user => <UsersCard key={user.id} user={user} ></UsersCard>)
            } 
            
        </div>
        </div>
    );
};

export default Users;