import React from 'react';
import styles from './table.css'

const ViewPage = () => {
    // Fetch inventory data from API or database
    const inventoryData = [
        { id: 1, name: 'Basketball', quantity: 10 },
        { id: 2, name: 'Baseball', quantity: 5 },
        { id: 3, name: 'Voleyball', quantity: 8 },
    ];

    return (
        <div className={styles.content}>
            <h1>Inventory View Page</h1>
            <table>
                <thead>
                    <tr>
                        <th style={{ border: "1px solid #000", padding: "10px" }}>ID</th>
                        <th style={{ border: "1px solid #000", padding: "10px" }}>Name</th>
                        <th style={{ border: "1px solid #000", padding: "10px" }}>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {inventoryData.map((item) => (
                        <tr key={item.id}>
                            <td style={{ border: "1px solid #000", padding: "10px" }} >{item.id}</td>
                            <td style={{ border: "1px solid #000", padding: "10px" }} >{item.name}</td>
                            <td style={{ border: "1px solid #000", padding: "10px" }}>{item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewPage;

