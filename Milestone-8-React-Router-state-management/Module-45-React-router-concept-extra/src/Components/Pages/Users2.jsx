import React, { use } from 'react';

const Users2 = ({Users2DataPromise}) => {

    const data = use(Users2DataPromise);
    console.log("this is from user2",data);

    return (
        <div>
            this is user 2
        </div>
    );
};

export default Users2;