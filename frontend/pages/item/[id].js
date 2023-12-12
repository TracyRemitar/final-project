import React from 'react';

const SingleViewPage = ({ item }) => {
    return (
        <div>
            <h1>Single Item View Page</h1>
            <h2>{item.name}</h2>
            <p>Quantity: {item.quantity}</p>
        </div>
    );
};

export default SingleViewPage;
