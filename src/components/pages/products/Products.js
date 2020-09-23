import React from 'react'
import HomeSection from '../../heroSection/HeroSection';
import { homeObjTwo } from './Data';
import Pricing from '../../pricing/Pricing';

const Products = () => {
  return (
    <div>
      <HomeSection {...homeObjTwo} />
    </div>
  )
}

export default Products;

