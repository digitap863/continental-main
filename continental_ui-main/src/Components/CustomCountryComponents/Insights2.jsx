import React from 'react'
import tableimg from '../../assets/Canada/canadaTable.png'

function Insight2() {
    return (
        <div className='insight-wrapper'>
            <h1>An Insight Into Canada</h1>
            <p>One of most popular destination for students is indeed Canada as the universities and colleges offer
                excellent academic programs, world-class research opportunities, and a multicultural environment that
                fosters diversity and Inclusivity.The Canadian Ministry of Education highly encourages foreign students and
                provides various financial aids and facilities to ease their stay. Canada has always been ranked as one of the
                best places to reside as it is renowned for its quality of lfe. Itis also among the safest countries in the world
                and several residencies provide complete medical coverage for international students. With student-friendly
                ities like Ottawa, Montreal, Toronto, Vancouver, and Quebec, the vast country has a scenic and pleasant
                environment with multiple leisure activities. Owing to the flexible and streamlined PR and immigration
                policies, the country accumulates the largest amount of international students.</p>
            <h1>Types Of Courses</h1>
            <p className='courses'>The most fascinating fact of Canada is the options provided to students to choose their program which is an ease on their pockets , the gap between the studies and many other criterias.</p>
            <img src={tableimg} alt="" />
            <div className='sub-content'>
            <h5>As per IRCC , from August 10th 2023 , students can apply through SDS by providing the below English Proficiency Test Results with the scores mentioned.</h5>
            <ul>
                <li>CELPIP General - CLB 7</li>
                <li>CAEL - 60</li>
                <li>PTE Academic - 60</li>
                <li>TOEFL iBT - 83</li>
            </ul>
            <h5>SDS - Student Direct Stream (SDS),<span> earlier known as the Students Partner Program (SPP), is an initiative by Canadian Immigration Authorities to expedite the process of Canada Student Visa for international students for certain countries</span></h5>
            </div>
        </div>
    )
}

export default Insight2;