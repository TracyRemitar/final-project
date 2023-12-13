// DeleteDataPage.js
'use client';
import React, { useState } from 'react';

const DeleteDataPage = ({ item }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      // Set a loading state while the delete operation is in progress
      setIsDeleting(true);

      // Perform the delete operation (replace with your actual logic)
      console.log('Deleting data...', item);

      // Update the View Page with the updated data if necessary

      // Reset the loading state when the operation is complete
      setIsDeleting(false);
    } catch (error) {
      console.error('Error deleting data:', error);
      // Handle error, display an error message, etc.
      setIsDeleting(false);
    }
  };

  return (
    <div>
      <h1>Delete Data Page</h1>
      <h2>{item.name}</h2>
      <p>Quantity: {item.quantity}</p>
      <button onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? 'Deleting...' : 'Delete Data'}
      </button>
    </div>
  );
};

export default DeleteDataPage;
