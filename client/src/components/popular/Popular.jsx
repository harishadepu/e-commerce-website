import React from 'react'
import data_product from '../../assets/data'
import './Popular.css'
import Item from '../Item/Item'
const Popular = () => {
  return (
    <div className='popular-page'>
        <h1 className='popular-heading'>POPULAR IN WOMEN</h1>
        <div className='popular-images'>
            {data_product.map(each => (
                <Item key={each.id} id={each.id} name={each.name} image={each.image} new_price={each.new_price} old_price={each.old_price} />
            ))}
        </div>
    </div>
  )
}

export default Popular