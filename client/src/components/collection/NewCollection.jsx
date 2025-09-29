import React from 'react'
import new_collections from '../../Assets/new_collections.js'
import Item from '../Item/Item'
import './NewCollection.css'
const NewCollection = () => {
  return (
    <div className='newcollection-page'>
        <h1 className='collection'>NEW COLLECTIONS</h1>
        <div className='collection-lists'>
            {new_collections.map(each=>(
                <Item key={each.id} id={each.id} name={each.name} image={each.image} new_price={each.new_price} old_price={each.old_price} />
            ))}
        </div>
    </div>
  )
}

export default NewCollection