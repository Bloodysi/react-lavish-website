import React from 'react'
import HomeSection from '../../heroSection/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../pricing/Pricing';

const Home = () => {
  return (
    <div>
      <HomeSection {...homeObjOne} />
      <HomeSection {...homeObjThree} />
      <HomeSection {...homeObjTwo} />
      <Pricing />
      <HomeSection {...homeObjFour} />
    </div>
  )
}

export default Home;
