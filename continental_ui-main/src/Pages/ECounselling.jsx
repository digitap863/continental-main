import React from 'react'
import NavBar from '../Components/Header/NavBar'
import Footer from '../Components/Footer/Footer'
import Subscription from '../Components/Subscription/Subscription'
import BookingComponent from '../Components/counselling/BookingComponent'
import useScrollToTop from '../Hooks/useScrollToTop'
import { useDigitalOfficeQuery } from '../redux/features/api/apiSlice'
import ErrorPage from './ErrorPage'
import { useLocation } from 'react-router-dom'

function ECounselling() {
  useScrollToTop()
  const location = useLocation()
  const predata = location.state
  const {data,isLoading,isSuccess} = useDigitalOfficeQuery()
  if(!isSuccess && !isLoading){
      return <ErrorPage/>
  }
  console.log(predata);
  return (
    <div className='mainWrapperrr'>
        <NavBar/>
        <BookingComponent data={data?.data} predata={predata}/>
        <Subscription />
        <Footer />
    </div>
  )
}

export default ECounselling