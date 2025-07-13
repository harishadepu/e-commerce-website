import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import AddProducts from '../components/AddProducts/AddProducts'
import ListProduct from '../components/ListProduct/ListProduct'
import './Admin.css'

const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
          <Route path='/addproduct' Component={AddProducts}/>
          <Route path="/listproduct" Component={ListProduct}/>
        </Routes>
    </div>
  )
}

export default Admin