import React from 'react'
import HomeSection from '../../heroSection/HeroSection';
import { homeObjOne } from './Data';
import Pricing from '../../pricing/Pricing';

const Services = () => {
  return (
    <div>
      <Pricing />
      <HomeSection {...homeObjOne} />
    </div>
  )
}

export default Services;
