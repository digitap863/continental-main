import React from 'react'
import HeaderCountry from '../Components/HeaderCountryPage/HeaderCountry'
import Footer from '../Components/Footer/Footer'
import Subscription from '../Components/Subscription/Subscription'
import StudyIn from '../Components/CustomCountryComponents/StudyIn'
import Insight from '../Components/CustomCountryComponents/Insight'
import Eligiblity from '../Components/CustomCountryComponents/Eligiblity'
import { useLocation } from 'react-router-dom'
import useScrollToTop from '../Hooks/useScrollToTop'
import useScrollToService from '../Hooks/useScollToService'

function CustomCountry() {
  const location = useLocation()
  const data = location.state
  // useScrollToTop(data)
  useScrollToService({ ...data, position: 500 })
  return (
    <div>
        <HeaderCountry name={data?.name} />
        <StudyIn data={data}/>
        <Insight data={data}/>
        <Eligiblity data={data}/>
        <Subscription/>
        <Footer/>
    </div>
  )
}

export default CustomCountry;