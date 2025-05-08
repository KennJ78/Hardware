import React from "react";
import "./inventory.css";

function Inventory() {
  const handleEdit = (id) => {
    console.log("Edit item with ID:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete item with ID:", id);
  };

  return (
    <div className="inventory-container">
      <div className="header-row">
        <h2>INVENTORY</h2>
        <div className="search-section">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search here" />
        </div>
        <button className="add-btn">Add Product</button>
      </div>

      <div className="inventory-table">
        <table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>40 watts Bulb</td>
              <td>Electrical Supply</td>
              <td>50</td>
              <td>100</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(1)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(1)}>Delete</button>
              </td>
            </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default Inventory;
