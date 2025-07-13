import React from 'react'
import {Link} from 'react-router-dom'
import product from '../../assets/Product_Cart.svg'
import productList from '../../assets/Product_list_icon.svg'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className='admin-sidebar'>
      <Link to='/addproduct'><button className='admin-btn'><img src={product} alt='add product' className='product-image'/> Add Products</button></Link>
      <Link to='/listproduct'><button className='admin-btn'><img src={productList} alt='product list' className='product-image'/> List Products</button></Link>
    </div>
  )
}

export default Sidebar