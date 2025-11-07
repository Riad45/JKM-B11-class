import React from 'react';
import { Link } from 'react-router';

const UsersCard = ({user}) => {

    
    
    return (
        <div className="card w-96 bg-base-100 card-sm shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{user.name}</h2>
    <p>{user.email}</p>
    <p>{user.phone}</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary"><Link to={`/users/${user.id}`}> Details</Link></button>
    </div>
  </div>
</div>
    );
};

export default UsersCard;