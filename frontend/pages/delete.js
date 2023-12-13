import React from 'react';

const DeleteDataPage = ({ item }) => {
    const handleDelete = () => {
        // Delete the data from the inventory
        // Update the View Page with the updated data
    };

    return (
        <div>
            <h1>Delete Data Page</h1>
            <h2>{item.name}</h2>
            <p>Quantity: {item.quantity}</p>
            <button onClick={handleDelete}>Delete Data</button>
        </div>
    );
};

export default DeleteDataPage;
