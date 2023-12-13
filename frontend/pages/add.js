'use client';
import React, { useState } from 'react';


const AddDataPage = () => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add new data to the inventory
        // Update the View Page with the new data
    };

    return (
        <div>
            <h1>Add New Data Page</h1>
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
                <button type="submit">Add Data</button>
            </form>
        </div>
    );
};

export default AddDataPage;

