import React, { useEffect, useState } from 'react'
import crossIcon from '../../assets/cross_icon.png'
import './ListProduct.css'
const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([])
  const url = "https://e-commerce-website-ga80.onrender.com"
  const fetchproduct = async()=>{
    await fetch(url + '/allproducts')
    .then((res)=>res.json())
    .then((data)=>{
      setAllProducts(data)
    },[])
  }
  useEffect(()=>{
    fetchproduct();
  })
  const removeProduct = async(id)=>{
    await fetch(url + '/removeproduct',{
      method:'POST',
      headers:{
        "Acceput":"application/json",
        'Content-Type':'application/json'
      },
      body:JSON.stringify({id:id})
    })
    await fetchproduct();
  }

  return (
    <div className='list-products'>
      <h1>All Products List</h1>
      <div className='list-products-table'>
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className='listproduct-allproducts'>
        <hr/>
        {allproducts.map((product,index)=>{
          return <> <div key={index} className='listproduct-format list-products-table'>
            <img src={product.image} alt="" className='listproduct-image'/>
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img src={crossIcon} onClick={()=>{removeProduct(product.id)}} alt="cross" className='listproduct-remove-icon'/>
          </div>
          <hr/>
          </>

        })}

      </div>
    </div>
  )
}

export default ListProduct