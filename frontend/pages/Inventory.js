'use client';
import { useState } from "react";

function Inventory() {
    const [price, setPrice] = useState(0);
    const [qty, setQty] = useState(0);
    const [total, setTotal] = useState(0);
    const [users, setUsers] = useState([]);
    const [name, setName] = useState();
    const [sum, setSum] = useState();
    const [editingIndex, setEditingIndex] = useState(null);


    function Calculation() {
        if (editingIndex !== null) {
            // Update existing item
            const updatedUsers = [...users];
            updatedUsers[editingIndex] = { name, qty, price, sum };
            setUsers(updatedUsers);
            setEditingIndex(null);
        } else {
            // Add new item
            setUsers([...users, { name, qty, price, sum }]);
        }

        users.push({ name, qty, price, sum });
        const total = users.reduce((total, user) => {
            total += Number(user.sum)
            return total
        }, 0);
        // you want this
        setTotal(total);
        // Clear the input fields
        setName('');
        setQty('');
        setPrice('');
        setSum('');
    }
    //Edit function
    const editItem = (index) => {
        const itemToEdit = users[index];
        setEditingIndex(index);
        setName(itemToEdit.name);
        setQty(itemToEdit.qty);
        setPrice(itemToEdit.price);
        setSum(itemToEdit.sum);
    };
    // Delete Function
    const deleteItem = (index) => {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);

        // Recalculate total after deletion
        const newTotal = updatedUsers.reduce((total, user) => {
            total += Number(user.sum);
            return total;
        }, 0);
        setTotal(newTotal);
    };
    const handlePriceChange = (e) => {
        const newPrice = parseFloat(e.target.value);
        if (!isNaN(newPrice)) {
            setPrice(newPrice);
            calculateTotal(newPrice, qty);
        }
    };
    // Event handler for quantity selection
    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value);
        if (!isNaN(newQuantity)) {
            setQty(newQuantity);
            calculateTotal(price, newQuantity);
        }
    };
    // Calculate the total based on price and quantity
    const calculateTotal = (price, qty) => {
        const newTotal = price * qty;
        setSum(newTotal);
    };
    function refreshPage() {
        window.location.reload();
    }
    return (
        <div class="container-fluid bg-2 text-center">
            <div class="row">
                <div class="col-sm-8">
                    <table class="table table-bordered">
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Amount</th>
                            <th>Option</th>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" class="form-control" placeholder="Item Name" value={name}
                                    onChange={(event) => {
                                        setName(event.target.value);
                                    }}
                                />
                            </td>
                            <td>
                                <input type="text" class="form-control" placeholder="Enter Price"
                                    value={price}
                                    onChange={handlePriceChange}
                                />
                            </td>
                            <td>
                                <input type="number" class="form-control" placeholder="Enter Qty"
                                    value={qty}
                                    onChange={handleQuantityChange}
                                />
                            </td>
                            <td>
                                <input type="text" value={sum} class="form-control" placeholder="Total" id="total_cost" name="total_cost" disabled />
                            </td>
                            <td>
                                <button type="submit" style={{ border: "1px solid #000", paddingLeft: "10px", paddingRight: "10px" }} onClick={Calculation}>Add</button>
                            </td>
                        </tr>
                    </table>
                    <h3 align="left">  Products  </h3>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th style={{ border: "1px solid #000", padding: "10px" }}>Item Name</th>
                                <th style={{ border: "1px solid #000", padding: "10px" }}>Price</th>
                                <th style={{ border: "1px solid #000", padding: "10px" }}>Qty</th>
                                <th style={{ border: "1px solid #000", padding: "10px" }}>Amount</th>

                            </tr>
                        </thead>
                        <tbody>
                            {users.map((row, index) => (
                                <tr key={index}>
                                    <td style={{ border: "1px solid #000", padding: "10px" }}>{row.name}</td>
                                    <td style={{ border: "1px solid #000", padding: "10px" }}>{row.price}</td>
                                    <td style={{ border: "1px solid #000", padding: "10px" }}>{row.qty}</td>
                                    <td style={{ border: "1px solid #000", padding: "10px" }}>{row.sum}</td>
                                    <td style={{ border: "1px solid #000", padding: "10px" }} s>
                                        <button
                                            type="button"
                                            style={{ padding: "10px" }}
                                            onClick={() => deleteItem(index)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                    <td style={{ border: "1px solid #000", padding: "10px" }}>
                                        <button
                                            type="button"
                                            style={{ padding: "10px" }}
                                            onClick={() => editItem(index)}
                                        >
                                            Edit
                                        </button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Inventory;