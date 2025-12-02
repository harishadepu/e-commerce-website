import React, { useContext } from 'react'
import { ShopContext } from '../shopContext/ShopContext'
import { useParams } from 'react-router-dom';
import Breadgrum from '../components/breadgrums/Breadgrum';
import Display from '../components/display/Display';
import Discreption from '../components/description/Discreption';
import RelatedProducts from '../components/relatedProducts/RelatedProducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams()
  console.log(all_product)
  const product = all_product.find((e) => e._id === productId);
  return (
    <div>
      <Breadgrum product={product}/>
      <Display product ={product}/>
      <Discreption/>
      <RelatedProducts product={product}/>
    </div>
  )
}

export default Product