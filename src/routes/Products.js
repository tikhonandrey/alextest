import React, { PropTypes } from 'react'
import Products from '../components/products';
const style = {
    position:'absolute',
    width: '100%',
    height: '100%'
}
function ProductsRoute(props) {
    return <div style={style}>
        <Products />
    </div>;
}

export default ProductsRoute