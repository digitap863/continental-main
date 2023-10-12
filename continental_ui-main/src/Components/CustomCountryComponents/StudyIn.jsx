import React from 'react'
import './canada.css'
import { containerStyle } from '../../Constants/Constants'

function StudyIn({ data }) {
    return (
        <div className={`studyin-wrapper ${data?.class}`}>
            {/* <div className='line'></div> */}
            <h1>Study In {data?.name}</h1>
            <h5>{data?.subtitle}</h5>
            <h2>Why Choose {data?.name}?</h2>
            {data ? <div className='study-in-grid'>
                {
                    data?.choose?.map((elem) => (
                        <div className='grid-item' key={elem.name}>
                            <img src={elem.image} alt="" />
                            <h3>{elem.title}</h3>
                            {/* <p style={containerStyle}>{elem.content}</p> */}
                        </div>
                    ))
                }
            </div> : ''}
        </div>
    )
}

export default StudyIn