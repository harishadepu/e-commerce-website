import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Item/Item'
const Popular = () => {
  const [popular, setPopular] = useState([])
  useEffect(()=>{
    fetch('https://e-commerce-back-ko22.onrender.com/popular')
    .then(res=>res.json())
    .then(data=>setPopular(data))
  },[])
  return (
    <div className='popular-page'>
        <h1 className='popular-heading'>POPULAR IN WOMEN</h1>
        <div className='popular-images'>
            {popular.map(each => (
                <Item key={each._id} id={each._id} name={each.name} image={each.image} new_price={each.new_price} old_price={each.old_price} />
            ))}
        </div>
    </div>
  )
}

export default Popular