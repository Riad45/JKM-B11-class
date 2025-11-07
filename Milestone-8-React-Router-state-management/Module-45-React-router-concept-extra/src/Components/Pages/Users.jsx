import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {

    const usersData = useLoaderData();
    console.log(usersData);
    return (
        <div>
            this is users 
            
        </div>
    );
};

export default Users;