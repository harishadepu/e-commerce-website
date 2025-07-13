import React, { useState } from 'react'
import uploadimage from '../../assets/upload_area.svg'
import './AddProduct.css'
const AddProducts = () => {
  const [image,setImage] = useState('')
  const [productName,setProductName] = useState({
    name:'',
    category:'Women',
    new_price:'',
    old_price:'',
    image:''

  })
  const changeHandler = (e)=>{
    setProductName({...productName,[e.target.name]:e.target.value})
  }
  const imageHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
        setImage(e.target.files[0]);
    }
};
  const Add_product = async()=>{
    console.log(productName)
    let responseData;
    let product = productName;
    let formData = new FormData();
    formData.append('image',image);
    const url ="https://e-commerce-website-njek.onrender.com"
    await fetch(url + '/upload',{
      method:"POST",
      headers:{
        "Accept": "application/json",
      },
      body:formData
    }).then((res)=>res.json()).then((data)=>{responseData=data});
    if(responseData.success){
      product.image = responseData.image_url;
      console.log(product);
      await fetch(url + '/addproduct',{
        method:"POST",
        headers:{
          "Accept": "application/json",
          "Content-Type":"application/json"
        },
        body:JSON.stringify(product)
      }).then((res)=>res.json()).then((data)=>{
        data.success ? alert('product added'):alert('failed');
      })
    }

    
  }

  return (
    <div className='admin-productsAdd'>
      <div className='admin-product-name'>
        <label htmlFor="prodct-name">Product title</label>
        <input value={productName.name} name='name' onChange={changeHandler} type='text' id='product-name' placeholder='type here' className='admin-input'/>
      </div>
      <div className='admin-product-price'>
      <div className='admin-price'>
        <label htmlFor="prodct-new">Offer Price</label>
        <input value={productName.new_price} name='new_price' onChange={changeHandler} type='text' placeholder='type here' id='product-new' className='admin-input' />
      </div>
      <div className='admin-price'>
        <label htmlFor="prodct-old">Price</label>
        <input value={productName.old_price} name='old_price' onChange={changeHandler} type='text' placeholder='type here' id='product-old' className='admin-input' />
      </div>
      </div>
      <div className='admin-product-select'>
        <p>Product Category</p>
        <select className='admin-select' name='category' value={productName.category} onChange={changeHandler}>
          <option value='women'>Women</option>
          <option value='kids'>Kids</option>
          <option value='men'>Men</option>
          
        </select>
      </div>
      <div className='admin-product-image'>
        <label htmlFor='product-image'><img src={image ?URL.createObjectURL(image) :uploadimage} alt="upload image" className='thumbnail'/></label>
        <input onChange={imageHandler} name='image' type='file' id='product-image' className='admin-input' hidden/>
      </div>
      <button onClick={()=>{Add_product()}} className='admin-upload-btn'>Upload</button>
    </div>
  )
}

export default AddProducts