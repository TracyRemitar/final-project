import React from 'react';

const ViewPage = () => {
    // Fetch inventory data from API or database
    const inventoryData = [
        { id: 1, name: 'Item 1', quantity: 10 },
        { id: 2, name: 'Item 2', quantity: 5 },
        { id: 3, name: 'Item 3', quantity: 8 },
    ];

    return (
        <div>
            <h1>Inventory View Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {inventoryData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewPage;

