import React, { useState } from 'react'
import SearchSelect from 'react-select';
import dateWhite from "../../assets/HomePage/DateIco_white.svg";
import { useCoursesQuery, useDigitalOfficeQuery, useStreamsQuery } from '../../redux/features/api/apiSlice';
import { useNavigate } from 'react-router-dom';

function HeaderSelect() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        selectedCountry: '',
        Stream: '',
        Course: '',
    });
    const [country,selCountry] = useState(null)
    const [stream,selStream] = useState(null)
    const [course,selCourse] = useState(null)
    const { data, isLoading, isSuccess } = useDigitalOfficeQuery()
    const Streams = useStreamsQuery(formData.selectedCountry)
    const Courses = useCoursesQuery(formData.selectedCountry + '-' + formData.Stream)
    const countryOptions = data?.data?.countries?.map((country) => ({
        value: country.name,
        label: country.name,
    }));
    const streamOptions = Streams?.data?.streams?.map((country) => ({
        value: country.streamTitle,
        label: country.streamTitle,
    }));
    const coursesOptions = Courses?.data?.courses?.map((country) => ({
        value: country.course,
        label: country.course,
    }));
    const handleCountryChange = (selectedOption) => {
        selCountry(selectedOption)
        setFormData((prevData) => ({
          ...prevData,
          selectedCountry: selectedOption.value,
        }));
      };
      
      const handleStreamChange = (selectedOption) => {
        selStream(selectedOption)
        setFormData((prevData) => ({
          ...prevData,
          Stream: selectedOption.value,
        }));
      };
      
      const handleCourseChange = (selectedOption) => {
        selCourse(selectedOption)
        setFormData((prevData) => ({
          ...prevData,
          Course: selectedOption.value,
        }));
      };
      
    const customStyles = {
        control: (provided) => ({
            ...provided,
            border: 'none',
            width: '8rem', // Set the width to 100% initially
        }),
    };
    return (
        <>
            <div className={`course_panel `}>
                <div className={`select_item `}>
                    <p>
                        Country{" "}
                        {/* <span>
                  <img src={downIcon} style={{ marginBottom: "0.3rem" }} />
                </span> */}
                    </p>
                    {/* <select className={`location_select`}>
                        <option value="" disabled selected>
                            Select
                        </option>
                        <option value="New York">Pontianak, USA</option>
                        <option value="London">London</option>
                    </select> */}
                    {/* <select type="text" placeholder='Country Preferred' name='selectedCountry'
                        value={formData.selectedCountry}
                        onChange={handleInputChange} >
                        <option value="" disabled selected>Select Country</option>
                        {data?.data?.countries?.map((elem) => (
                            <option value={elem.name}><span className={`fi fi-${elem.flag}`}></span>{elem.name}</option>
                        ))}
                    </select> */}
                    <SearchSelect
                        placeholder='Country' name='selectedCountry'
                        value={country}
                        onChange={handleCountryChange}
                        options={countryOptions}
                        styles={customStyles}
                    />
                </div>
                <div className={`select_item `}>
                    <p>
                        Stream{" "}
                        {/* <span>
                  <img src={downIcon} style={{ marginBottom: "0.3rem" }} />
                </span> */}
                    </p>
                    {/* <select className={`location_select`}>
                        <option value="" disabled selected>
                            Select
                        </option>
                        <option value="New York">Pontianak, USA</option>
                        <option value="London">London</option>
                    </select> */}
                     <SearchSelect
                        placeholder='Stream' name='stream'
                        value={stream}
                        onChange={handleStreamChange}
                        options={streamOptions}
                        styles={customStyles}
                    />

                </div>
                <div className={`select_item `}>
                    <p>
                        Courses{" "}
                        {/* <span>
                  <img src={downIcon} style={{ marginBottom: "0.3rem" }} />
                </span> */}
                    </p>
                    {/* <select className={`location_select`}>
                        <option value="" disabled selected>
                            Select
                        </option>
                        <option value="New York">Pontianak, USA</option>
                        <option value="London">London</option>
                    </select> */}
                     <SearchSelect
                        placeholder='Course' name='selectedCountry'
                        value={course}
                        onChange={handleCourseChange}
                        options={coursesOptions}
                        styles={customStyles}
                    />
                </div>
                <div className={`enroll_btn`} onClick={()=>navigate('/counselling',{state:formData})}>
                    <img src={dateWhite} alt='calednder'/>
                    <p>Enquire Now</p>
                </div>
            </div>
        </>
    )
}

export default HeaderSelect