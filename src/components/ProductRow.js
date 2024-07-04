// src/components/ProductRow.js
import React from 'react';

const ProductRow = ({ product, index }) => {
  console.log('Rendering product:', product); // Debugging line
  console.log('Image URL:', product.Image_1); // Log the image URL

  return (
    <tr>
      <td><input type="checkbox" /></td>
      <td>{index}</td> {/* Display the serial number */}
      <td>
        <img 
          src={product.Image_1} 
          alt={product.Name} 
          style={{ width: '50px', height: '50px' }} 
          onError={(e) => { 
            e.target.onerror = null; 
            e.target.src="https://via.placeholder.com/50"; 
          }}
        />
      </td>
      <td>{product.SKU}</td>
      <td>{product.Name}</td>
      <td>{product.Title}</td>
      <td>{product.Description}</td>
      <td>{product.Brand}</td>
      <td>{product['Cost Price']}</td>
      <td>{product.Quantity}</td>
      <td>{product.size}</td>
    </tr>
  );
};

export default ProductRow;
