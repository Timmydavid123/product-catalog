import React, { useState } from 'react';
import ProductTable from './components/ProductTable';
import Header from './components/Header';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductTable searchTerm={searchTerm} />
    </div>
  );
};

export default HomePage;
