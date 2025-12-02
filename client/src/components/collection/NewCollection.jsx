import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import './NewCollection.css'
const NewCollection = () => {
  const [newCollection, setNewCollection] = useState([])
  useEffect(()=>{
    fetch('https://e-commerce-back-ko22.onrender.com/newcollection')
    .then(res=>res.json())
    .then(data=>setNewCollection(data))

  },[])
  return (
    <div className='newcollection-page'>
        <h1 className='collection'>NEW COLLECTIONS</h1>
        <div className='collection-lists'>
            {newCollection.map(each=>(
                <Item key={each._id} id={each._id} name={each.name} image={each.image} new_price={each.new_price} old_price={each.old_price} />
            ))}
        </div>
    </div>
  )
}

export default NewCollection