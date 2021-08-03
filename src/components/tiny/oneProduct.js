import React from 'react';
import { Button } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import {increment,showProductSearch} from '../actions';

const ProductSearch = () => {

  const dispatch = useDispatch();

  return (
  <div className="ProductSearch-background">
    <h2>Product Name </h2>
      product search component
      <Button type="primary"> Search </Button>
      <Button type="primary" onClick={() => dispatch(showProductSearch())}> Close Search </Button>
  </div>
  )
};

export default ProductSearch;

