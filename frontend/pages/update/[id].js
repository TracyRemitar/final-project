'use client';
import React, { useState } from 'react';

const UpdateDataPage = ({ item = { name: '', quantity: 0 } }) => {
    const [name, setName] = useState(item.name);
    const [quantity, setQuantity] = useState(item.quantity);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Update the data in the inventory
        // Update the View Page with the updated data
    };

    return (
        <div>
            <h1>Update Data Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    Quantity:
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </label>
                <button type="submit">Update Data</button>
            </form>
        </div>
    );
};

export default UpdateDataPage;
