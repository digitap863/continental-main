import React, { useRef } from 'react'
import TestHeader from '../Components/TestPreperation/TestHeader'
import Footer from '../Components/Footer/Footer'
import ContentDescription from '../Components/TestPreperation/descriptionAndImage'
import ContactForm from '../Components/TestPreperation/contactForm'
import { useLocation } from 'react-router-dom'
import useScrollToTop from '../Hooks/useScrollToTop'

function TestPreparation() {
    const contactFormRef = useRef(null);
    const handleScrollToContact = () => {
        if (contactFormRef.current) {
            contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    useScrollToTop();
    const location = useLocation()
    const data = location.state
  
  return (
    <div className='mainWrapper'>
        <TestHeader data={data}/>
        <ContentDescription data={data} handleScrollToContact={handleScrollToContact}/>
        <div ref={contactFormRef}>
        <ContactForm/>
        </div>
        <Footer />
    </div>
  )
}

export default TestPreparation