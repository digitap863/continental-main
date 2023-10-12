import React from 'react'
import HeaderServices from '../Components/Services/HeaderServices';
import Footer from '../Components/Footer/Footer';
import Subscription from '../Components/Subscription/Subscription';
import useScrollToService from '../Hooks/useScollToService';
import { useLocation } from 'react-router-dom';
import ServicesSlider from '../Components/Services/ServicesSlider';

function Services() {
  const location = useLocation()
  const data = location.state
  useScrollToService(data)
  // useScrollToTop()
  return (
    <div className='mainWrapper'>
      <HeaderServices/>
      {/* <ServicesOffered/> */}
      <ServicesSlider/>
      <Subscription/>
      <Footer/>
    </div>
  )
}

export default Services;