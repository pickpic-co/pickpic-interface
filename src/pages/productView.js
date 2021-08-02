import React from 'react';


import ProductSearch from '../components/productSearch';
const { useState } = React;

// const [count, setCount] = useState(0)

const ProductView = () => {


const [showSearch, setShowSearch] = useState(false)

return(
  <div className="ProductView-background">
    <h2>Product Search </h2>
    <ProductSearch/>
  </div>
)};



export default ProductView;