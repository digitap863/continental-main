import React from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { getdata, postForm } from '../axios/apicall';
import { useState } from 'react';
import { useEffect } from 'react';
import { hideLoading, showloading } from '../redux/features/alertSlice';

function DigitalOfficeFormAssets() {
    const [digitalOfficeData,setDigitalOfficeData] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    async function add(field) {
        let swalConfig = {
          title: `Add ${field}`,
          input: 'text',
          inputLabel: field,
          inputPlaceholder: 'Enter text',
          inputAttributes: {
            autocomplete: 'off', // Disable autocomplete
          },
          showCancelButton: true,
          confirmButtonText: 'Add',
          confirmButtonColor: 'orange',
          cancelButtonColor: 'gray',
          inputValidator: (value) => {
            if (!value) {
              return 'You need to write something!';
            }
          },
        };
      
        // Customize the Swal configuration for 'Country' field
        if (field === 'Country') {
          swalConfig = {
            title: `Add ${field}`,
            html: `
              <input id="countryName" class="swal2-input" placeholder="Enter Country Name" autocomplete="off">
              <input id="countryCode" class="swal2-input" placeholder="Enter Flag Code" autocomplete="off">
              <p style="margin: 10px 0; color: gray; font-size: 14px;">
        Refer <a href="https://flagicons.lipis.dev/" target="_blank" rel="noopener noreferrer" style="color: blue;">flagicons.lipis.dev</a> for flag code
      </p>
            `,
            showCancelButton: true,
            confirmButtonText: 'Add',
            confirmButtonColor: 'orange',
            cancelButtonColor: 'gray',
            preConfirm: () => {
              return {
                countryName: document.getElementById('countryName').value,
                countryCode: document.getElementById('countryCode').value,
              };
            },
            inputValidator: (values) => {
              if (!values.countryName || !values.countryCode) {
                return 'Both fields are required!';
              }
            },
          };
        }
      
        const { value: inputValues } = await Swal.fire(swalConfig);
      
        if (inputValues) {
          dispatch(showloading());
          const formData = {
            field,
            inputValue: field === 'Country' ? `${inputValues.countryName} ${inputValues.countryCode}` : inputValues,
          };
          postForm('/digital-office', formData).then((res) => {
            dispatch(hideLoading());
            setDigitalOfficeData(res?.data?.response);
          });
        }
      }
      
    useEffect(()=>{
        getdata('/digital-office').then((res)=>{
            setDigitalOfficeData(res?.data?.data)
        })
    },[])
    function deleteElement(field,value){
        Swal.fire({
            title: 'Are you sure to Delete this?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            const delData ={
                field,
                value
            }
            dispatch(showloading())
            postForm('/digital-office-delete',delData).then((res)=>{
                dispatch(hideLoading())
                setDigitalOfficeData(res?.data?.response)
            })
            }
          })


    }
    return (
        <div className='bg-[#1A093F] pt-10 h-screen flex justify-end'>
            <button className='flex items-center bg-orange-500 absolute left-10 text-white font-bold p-2 rounded-lg'onClick={()=>navigate('/digital-office')} ><ion-icon name="caret-back-outline" />Go Back</button>
            <div className='m-5 bg-gradient-to-t  rounded-lg from-white to-[#1A093F] px-4 w-[20%]'>
                <h3 className='text-3xl text-white mt-4 font-bold font-mono'>Qualification</h3>
                <button className='bg-[#ff6a34] px-4 py-1 font-semibold text-white rounded-md mt-2 float-right flex items-center hover:bg-orange-700' onClick={()=>add("Qualification")}>Add<ion-icon name="add-outline" /></button>
                <div className='bg-white mt-16 h-[78%] py-3 rounded-md px-2 overflow-y-auto custom-scrollbar'>
                    {digitalOfficeData?.qualifications?.map((elem)=>(
                        <div className='flex items-center  border-b-2'><h5 key={elem.qualification} className='hover:bg-slate-100 text-lg font-semibold text my-1 w-[80%] ml-5'>{elem.qualification}</h5><span className='w-[15%] text-center cursor-pointer text-red-500 hover:text-2xl' onClick={()=>deleteElement("Qualification",elem.qualification)}><ion-icon name="trash"/></span></div>
                    ))} 
                </div>
            </div>
            <div className='m-5 bg-gradient-to-t  rounded-lg from-white to-[#1A093F] px-4 w-[20%]'>
                <h3 className='text-3xl text-white mt-4 font-bold font-mono'>Countries</h3>
                <button className='bg-[#ff6a34] px-4 py-1 font-semibold text-white rounded-md mt-2 float-right flex items-center hover:bg-orange-700' onClick={()=>add("Country")}>Add<ion-icon name="add-outline" /></button>
                <div className='bg-white mt-16 h-[78%] py-3 rounded-md px-2 overflow-y-auto custom-scrollbar text-center'>
                    {digitalOfficeData?.countries?.map((elem)=>(
                         <div className='flex items-center  border-b-2'><span className={`fi fi-${elem.flag} w-[10%]`}></span><h5 key={elem.name} className='hover:bg-slate-100 text-lg font-semibold text my-1 w-[80%] ml-5'>{elem.name}</h5><span className='w-[15%] text-center cursor-pointer text-red-500 hover:text-2xl' onClick={()=>deleteElement("Country",elem.name)}><ion-icon name="trash"/></span></div>
                    ))}
                </div>
            </div>
            <div className='m-5 bg-gradient-to-t  rounded-lg from-white to-[#1A093F] px-4 w-[20%]'>
                <h3 className='text-2xl text-white mt-4 font-bold font-mono'>Counselling Modes</h3>
                <button className='bg-[#ff6a34] px-4 py-1 font-semibold text-white rounded-md mt-2 float-right flex items-center hover:bg-orange-700' onClick={()=>add("Counselling-Mode")}>Add<ion-icon name="add-outline" /></button>
                <div className='bg-white mt-16 h-[78%] py-3 rounded-md px-2 overflow-y-auto custom-scrollbar text-center'>
                    {digitalOfficeData?.counsellingModes?.map((elem)=>(
                        <div className='flex items-center  border-b-2'><h5 key={elem.mode} className='hover:bg-slate-100 text-lg font-semibold text my-1 w-[80%] ml-5'>{elem.mode}</h5><span className='w-[15%] text-center cursor-pointer text-red-500 hover:text-2xl' onClick={()=>deleteElement("Counselling-Mode",elem.mode)}><ion-icon name="trash"/></span></div>
                    ))}
                </div>
            </div>
            <div className='m-5 bg-gradient-to-t  rounded-lg from-white to-[#1A093F] px-4 w-[20%]'>
                <h3 className='text-2xl text-white mt-4 font-bold font-mono'>Language Proficiency</h3>
                <button className='bg-[#ff6a34] px-4 py-1 font-semibold text-white rounded-md mt-2 float-right flex items-center hover:bg-orange-700' onClick={()=>add("Language-Proficiecy")}>Add<ion-icon name="add-outline" /></button>
                <div className='bg-white mt-16 h-[78%] py-3 rounded-md px-2 overflow-y-auto custom-scrollbar text-center'>
                    {digitalOfficeData?.proficiency?.map((elem)=>(
                        <div className='flex items-center  border-b-2'><h5 key={elem.proficiency} className='hover:bg-slate-100 text-lg font-semibold text my-1 w-[80%] ml-5'>{elem.proficiency}</h5><span className='w-[15%] text-center cursor-pointer text-red-500 hover:text-2xl' onClick={()=>deleteElement("Language-Proficiecy",elem.proficiency)}><ion-icon name="trash"/></span></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DigitalOfficeFormAssets