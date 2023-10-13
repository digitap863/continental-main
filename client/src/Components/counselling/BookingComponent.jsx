import React, { useEffect, useState } from 'react'
import './counselling.css'
import ReactDatePicker from 'react-datepicker'
import hand from '../../assets/HomePage/hand.png'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Swal from 'sweetalert2';
import { format } from 'date-fns';
import { useCoursesQuery, useDigitalOfficeSubmitMutation, useStreamsQuery } from '../../redux/features/api/apiSlice';

function BookingComponent({ data,predata }) {
    const [startDate, setStartDate] = useState(new Date())
    const formattedStartDate = format(startDate, 'yyyy-MM-dd');
    const [submitDigitalOfficeForm, { isLoading }] = useDigitalOfficeSubmitMutation()
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        mobileNumber: '',
        alternativeNumber: '',
        whatsappNumber: '',
        email: '',
        city: '',
        highestQualification: '',
        languageProficiency: '',
        selectedCountry: '',
        Stream: '',
        Course: '',
        Date: formattedStartDate,
        preferredModeOfCounselling: '',
    });
    const Streams = useStreamsQuery(formData.selectedCountry)
    const Courses = useCoursesQuery(formData.selectedCountry+'-'+formData.Stream)
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

            setErrors({
                ...errors,
                [name]: null,
            });
    };

    const handleSubmit = () => {

        const newErrors = {};
        for (const key in formData) {
            if (!formData[key] && !['languageProficiency', 'selectedCountry', 'Stream', 'Course'].includes(key)) {
              newErrors[key] = 'This field is required';
            }
          }
        setErrors(newErrors);
       if (Object.keys(newErrors).length > 0) {
        return;
      }
        if (!isLoading) {
            submitDigitalOfficeForm(formData).then((res) => {
                setFormData({
                    name: '',
                    mobileNumber: '',
                    alternativeNumber: '',
                    whatsappNumber: '',
                    email: '',
                    city: '',
                    highestQualification: '',
                    languageProficiency: '',
                    selectedCountry: '',
                    Stream: '',
                    Course: '',
                    Date: formattedStartDate,
                    preferredModeOfCounselling: '',
                })
                Swal.fire({
                    icon: 'success',
                    title: 'Submission Successful',
                    text: 'Your form has been submitted successfully!',
                });
            }).catch((error) => {
                // Handle error
                console.error('Form submission error:', error);

                // Show a Swal error popup
                Swal.fire({
                    icon: 'error',
                    title: 'Submission Error',
                    text: 'An error occurred while submitting the form. Please try again later.',
                });
            });
        }
    };
    useEffect(()=>{
        setFormData((prevData) => ({
            ...prevData,
            ...predata,
          }));
    },[])
        return (
            <div className='bookingwrap'>
                <div className='bookingcntnr'>
                    <img src={hand} alt="" className='handImage' />
                    <div className='bookingcontainer'>
                        <h1>Book Your E-Counselling</h1>
                        <div className='counsellinginputdiv'    >
                            <input type="text" placeholder='Name' name='name'
                                value={formData.name}
                                onChange={handleInputChange} 
                                className={errors.name ? 'error-input' : ''}/>
                            <input type="text" placeholder='Mobile Number' name='mobileNumber'
                                value={formData.mobileNumber}
                                onChange={handleInputChange}
                                className={errors.mobileNumber ? 'error-input' : ''} />
                        </div>
                        <div className='counsellinginputdiv'>
                            <input type="text" placeholder='Alternative Number' name='alternativeNumber'
                                value={formData.alternativeNumber}
                                onChange={handleInputChange} 
                                className={errors.alternativeNumber ? 'error-input' : ''}/>
                            <input type="text" placeholder='Whatsapp Number' name='whatsappNumber'
                                value={formData.whatsappNumber}
                                onChange={handleInputChange} 
                                className={errors.whatsappNumber ? 'error-input' : ''}/>
                        </div>
                        <div className='counsellinginputdiv'>
                            <input type="text" placeholder='Email' name='email'
                                value={formData.email}
                                onChange={handleInputChange} 
                                className={errors.email ? 'error-input' : ''}/>
                            <input type="text" placeholder='City' name='city'
                                value={formData.city}
                                onChange={handleInputChange}
                                className={errors.city ? 'error-input' : ''} />
                        </div>
                        <div className='counsellinginputdiv'>
                            <select type="text" placeholder='Country Preferred' name='highestQualification'
                                value={formData.highestQualification}
                                onChange={handleInputChange}
                                className={errors.highestQualification ? 'error-input' : ''}
                                >
                                <option value="" selected disabled>Highest Qualification</option>
                                {data?.qualifications?.map((elem) => (
                                    <option value={elem.qualification} key={elem.qualification}>{elem.qualification}</option>
                                ))}
                            </select>
                            <select type="text" placeholder='Country Preferred' name='languageProficiency'
                                value={formData.languageProficiency}
                                onChange={handleInputChange}>
                                <option value="" disabled selected>Language Proficiency</option>
                                {data?.proficiency?.map((elem) => (
                                    <option value={elem.proficiency}>{elem.proficiency}</option>
                                ))}
                            </select>

                        </div>
                        <div className='counsellinginputdiv'>
                            <select type="text" placeholder='Country Preferred' name='selectedCountry'
                                value={formData.selectedCountry}
                                onChange={handleInputChange} >
                                <option value="" disabled selected>Select Country</option>
                                {data?.countries?.map((elem) => (
                                    <option value={elem.name}><span className={`fi fi-${elem.flag}`}></span>{elem.name}</option>
                                ))}
                            </select>
                            <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className='counsellinginputdiv'>
                           {Streams.isSuccess && !Streams.isLoading? <select type="text" placeholder='Stream' name='Stream' disabled={!formData.selectedCountry}
                                value={formData.Stream}
                                onChange={handleInputChange}>
                                {/* <option value="" selected disabled>Stream</option> */}
                                <option value="" disabled selected >{formData.selectedCountry ? 'Select a Course' : 'Select a Country first'}</option>
                                {Streams?.data?.streams?.map((elem) => (
                                    <option value={elem.streamTitle} key={elem.streamTitle}>{elem.streamTitle}</option>
                                ))}
                            </select>:''} 
                            <select type="text" placeholder='Course' name='Course' disabled={!formData.Stream}
                                value={formData.Course}
                                onChange={handleInputChange}>
                                <option value="" disabled selected >{formData.Stream ? 'Select a Course' : 'Select a Stream first'}</option>
                                {Courses.isSuccess && !Courses.isLoading? Courses?.data?.courses?.map((elem) => (
                                    <option value={elem.course}>{elem.course}</option>
                                )):null}
                            </select>

                        </div>
                        <div className='counsellingbitt' >
                            <select type="text" placeholder='Country Preferred' name='preferredModeOfCounselling'
                                value={formData.preferredModeOfCounselling}
                                onChange={handleInputChange}
                                className={errors.preferredModeOfCounselling ? 'error-input' : ''}
                                >
                                <option value="" disabled selected>Preferred Mode of Counselling</option>
                                {data?.counsellingModes?.map((elem) => (
                                    <option value={elem.mode}>{elem.mode}</option>
                                ))}
                            </select>
                        </div>
                        <div className='buttondiv'>
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                        {Object.keys(errors).length > 0 && (
          <p className='error-msg'>Please fill in the essential fields</p>
        )}
                    </div>
                </div>
                <div className='counsellingrightpart'>
                    <h1>How Do We Help?</h1>
                    <p>Discovering New Horizons: Our 'How Do We Help' Embarking on a journey of international education? Navigate through our 'How Do We Help' page to uncover comprehensive guidance and support. From choosing the ideal destination to navigating admissions, scholarships, and cultural integration, we're your compass to a brighter academic future abroad.
                        <br />
                        Unlock opportunities with our expertise. Seamlessly transition abroad for education. Your aspirations, our commitment. Explore 'How Do We Help' today ?</p>
                </div>
            </div>
        )
    }


export default BookingComponent