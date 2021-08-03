import React from 'react';


import ProductSearch from '../components/productSearch';
import { useSelector,useDispatch } from 'react-redux';
import {increment,showProductSearch} from '../actions';


// const [count, setCount] = useState(0)

const ProductView = () => {


const counter = useSelector(state => state.counter);
const isLogged = useSelector(state => state.isLogged);
const isShowProductSearch = useSelector(state => state.showProductSearch)
const dispatch = useDispatch();


return(
  <div className="ProductView-background">
   {
   isShowProductSearch ? <ProductSearch style={{zIndex: 500}}/> :
    <div>
        <h2>Product Search {counter}</h2>
        <button onClick={() => dispatch(showProductSearch())} > show search </button>
        <button onClick={() => dispatch(increment())} > + </button>
    </div> 
 }

  </div>
)};



export default ProductView;