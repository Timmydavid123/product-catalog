import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductRow from './ProductRow';

const ProductTable = ({ searchTerm }) => {
  const { products } = useContext(ProductContext);

  // Ensure products is an array
  const productArray = Array.isArray(products) ? products : [];

  // Filter products based on the search term
  const filteredProducts = productArray.filter(product =>
    Object.values(product).some(value =>
      value && typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  console.log('Filtered product array:', filteredProducts);

  return (
    <div className="product-table-container">
      <table className="product-table">
        <thead>
          <tr className="product-table-headers">
            <th className="product-header"></th> {/* Checkbox column */}
            <th className="product-header">S/N</th>
            <th className="product-header">Image</th>
            <th className="product-header">SKU</th>
            <th className="product-header">Name</th>
            <th className="product-header">Title</th>
            <th className="product-header">Description</th>
            <th className="product-header">Brand</th>
            <th className="product-header">Cost Price</th>
            <th className="product-header">Quantity</th>
            <th className="product-header">Size</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <ProductRow key={`${product.SKU}-${index}`} product={product} index={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
