import React, { useContext } from 'react'
import { ShopContext } from '../shopContext/ShopContext'
import './css/ShopCategory.css'
import dropdown from '../assets/dropdown_icon.png'
import Item from '../components/Item/Item'
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="banner" className="banner"/>
      <div className='pages'>
        <p>
          <span >Showing 1-12</span> out of 54 Products
        </p>
        <div className='shop-category-sort'>
          sort by <img src={dropdown} className='dropdown'/>
        </div>
      </div>
      <div className='products'>
        {all_product.map((each,i)=>{
          if(each.category === props.category){
            return <Item key={each.id} id={each.id} name={each.name} image={each.image} new_price={each.new_price} old_price={each.old_price} />
          }
          else{
            return null
          }
        })}
      </div>
      <div className='explore'>
        <button className='ex'><a href="#">Explore More</a></button>
      </div>
      
    </div>
  )
}

export default ShopCategory