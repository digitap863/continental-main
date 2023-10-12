import React from 'react'
import { SchengenCountries } from '../../Constants/Constants'
import { useNavigate } from 'react-router-dom'

function Insight({ data }) {
    const navigate = useNavigate()
    return (
        <div className={`insight-wrapper ${data?.class2}`}>
            <h1>An Insight Into {data?.name}</h1>
            <p>{data?.insightContent}</p>
            {data?.name === 'Schengen' ?
                <div className='schengenlist1'>
                    {SchengenCountries.map((elem) => (
                        <h4 onClick={()=>navigate('/counselling')}>{elem.name}</h4>
                    ))}
                </div> : ''
            }
            <h1>Types Of Courses</h1>
            <p className='courses'>{data?.coursesSubtitle}</p>
            <img src={data?.tableImg} alt="" />
            <div className='sub-content'>
                <h5>{data?.coursesCont1}</h5>
                {data?.coursesCont2 ?
                    <>
                        <ul>
                            {
                                data?.coursesCont2?.map((elem) => (
                                    <li>{elem?.text}</li>
                                ))
                            }
                        </ul>
                        <h5>{data?.coursesCont3}<span>{data?.coursesCont4}</span></h5>
                    </>
                    : ''}
            </div>
        </div>
    )
}

export default Insight