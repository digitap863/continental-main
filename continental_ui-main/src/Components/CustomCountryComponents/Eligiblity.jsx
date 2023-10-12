import React from 'react'
import CanadaFaq from './customFaqs/CanadaFaq'
import UkFaq from './customFaqs/UkFaq'
import NewZealandFaq from './customFaqs/NewZealandFaq'
import AustraliaFaq from './customFaqs/AustraliaFaq'
import UsaFaq from './customFaqs/UsaFaq'
import IrelandFaq from './customFaqs/IrelandFaq'
import SchengenFaq from './customFaqs/SchengenFaq'
import { SchengenCountries } from '../../Constants/Constants'
import { useNavigate } from 'react-router-dom'

function Eligiblity({ data }) {
    const navigate = useNavigate()
    const faq = (name) => {
        if (name === 'Canada') {
            return <CanadaFaq />
        } else if (name === 'UK') {
            return <UkFaq />
        } else if (name === 'New Zealand') {
            return <NewZealandFaq />
        } else if (name === 'Australia') {
            return <AustraliaFaq />
        } else if (name === 'USA') {
            return <UsaFaq />
        } else if (name === 'Ireland') {
            return <IrelandFaq />
        } else if (name === 'Schengen') {
            return <SchengenFaq />
        }
    }
    return (
        <div className={`eligibility-wrapper ${data?.class2}`}>
            {data?.name === 'Canada' ?
                <>
                    <h1>Who is Eligible for SDS ?</h1>
                    <div className='criterea'>
                        <ul>
                            <li>Citizenship - Students who are citizens of China, India, Morocco, Pakistan,Philippines, Senegal, and Vietnam – among 14 others</li>
                            <li>Acceptance into a Designated Learning Institution (DLI)</li>
                            <li>Financial proof</li>
                            <li>Language proficiency</li>
                            <li>Upfront medical examination</li>
                        </ul>
                    </div>
                </> : ''}
            <h1>Courses In Demand</h1>
            <p className='subtitle'>{data?.demandSubtitle}</p>
            <div className='courses-grid'>
                {
                    data?.demandCourses?.map((elem) => (
                        <div className="grid-item">
                            <h4>{elem.text}</h4>
                        </div>
                    ))
                }
            </div>
            {data?.name === 'Schengen' ?
                <>
                <h4>To know about the Schengen Countries please click on the below country of interest and we shall assist you. </h4>
                <div className='schengenlist2'>
                    {SchengenCountries?.map((elem) => (
                        <h4 onClick={()=>navigate('/counselling')}><span className={`fi fi-${elem.flag}`}></span>{elem.name}</h4>
                    ))}
                </div> 
                </>: ''
            }
            <h1>FAQ Session</h1>
            {faq(data?.name)}
        </div>
    )
}

export default Eligiblity