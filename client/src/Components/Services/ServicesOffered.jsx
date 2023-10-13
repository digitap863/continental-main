import React from 'react'
import './services.css'
import { containerStyle, studentServices, valueServices } from '../../Constants/Constants'
import { useNavigate } from 'react-router-dom'

function ServicesOffered() {
    const navigate = useNavigate()
    return (
        <div className='services-wrapper'>
            {/* <h5>Our Services </h5>
            <h1>Services</h1>
            <p>Empowering global students through exceptional educational and support services abroad.</p> */}
            <h3>Student Services</h3>
            <div className='services-grid'>
                {
                    studentServices.map((elem) => (
                        <div className='grid-element' onClick={()=>navigate('/contact',{state:elem})}>
                            <img src={elem.icon} alt="" />
                            <h4>{elem.title}</h4>
                            <p style={containerStyle}>{elem.content}</p>
                        </div>
                    ))
                }
            </div>
            <h3>Value Added Services</h3>
            <div className='services-grid'>
                {
                    valueServices.map((elem) => (
                        <div className='grid-element'>
                            <img src={elem.icon} alt="" />
                            <h4>{elem.title}</h4>
                            <p style={containerStyle}>{elem.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ServicesOffered