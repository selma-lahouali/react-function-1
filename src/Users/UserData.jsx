import React from 'react';

const UserData = ({user}) => {
    return (
        <div>
           
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
        </div>
    );
};

export default UserData;