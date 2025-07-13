import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='popular-card'>
<Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} className='lady' /></Link>
<div>
    <p className='popular-name'>{props.name}</p>
    <div className='price'>
    <p className='new'>${props.new_price}</p>
    <p className='old'>${props.old_price}</p>
    </div>
</div>
    </div>
  )
}

export default Item