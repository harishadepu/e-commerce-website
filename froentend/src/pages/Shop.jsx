import React from 'react'

import NewCollection from '../components/collection/NewCollection'
import Offer from '../components/offers/Offer'
import Hero from '../components/Hero/Hero'
import Popular from '../components/popular/Popular'
const Shop = () => {
  return (
    <div>
     <Hero/>
      <Popular/>
      <NewCollection />
      <Offer />
    </div>
  )
}

export default Shop