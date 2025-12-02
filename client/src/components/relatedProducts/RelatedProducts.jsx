import React, { useEffect, useState } from 'react'

import Item from '../Item/Item'
import './RelatedProducts.css'
const RelatedProducts = () => {
  const [popular, setPopular] = useState([])
    useEffect(()=>{
      fetch('http://localhost:3000/popular')
      .then(res=>res.json())
      .then(data=>setPopular(data))
    },[])
  return (
    <div className='related-container'>
        <h1 className='related-title'>Related Products</h1>
        <div className='related-product-container'>
            {
                popular.map((each,i)=>{
                    return <Item key={each._id} id={each._id} name={each.name} image={each.image} new_price={each.new_price} old_price={each.old_price} /> 
                })

            }
        </div>
    </div>
  )
}

export default RelatedProducts