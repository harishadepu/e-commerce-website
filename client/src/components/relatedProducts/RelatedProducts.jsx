import React from 'react'
import data_product from '../../assets/data'
import Item from '../Item/Item'
import './RelatedProducts.css'
const RelatedProducts = () => {
  return (
    <div className='related-container'>
        <h1 className='related-title'>Related Products</h1>
        <div className='related-product-container'>
            {
                data_product.map((each,i)=>{
                    return <Item key={each.id} id={each.id} name={each.name} image={each.image} new_price={each.new_price} old_price={each.old_price} /> 
                })

            }
        </div>
    </div>
  )
}

export default RelatedProducts