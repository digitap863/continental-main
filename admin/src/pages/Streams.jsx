import React from 'react'
import Layout from '../components/Shared/Layout'
import { useEffect } from 'react'
import { getdata, postForm } from '../axios/apicall'
import { useState } from 'react'
import Swal from 'sweetalert2';
import { hideLoading, showloading } from '../redux/features/alertSlice'
import { useDispatch } from 'react-redux'

function Streams() {
  const [countries, setCountries] = useState([])
  const dispatch = useDispatch()
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [streamTitle, setStreamTitle] = useState('');
  const [streams, setStreams] = useState([])
  const [hoveredElement, setHoveredElement] = useState(null);
  const handleCountryCheckboxChange = (event) => {
    const countryName = event.target.value;

    if (event.target.checked) {
      setSelectedCountries([...selectedCountries, countryName]);
    } else {
      setSelectedCountries(selectedCountries.filter((name) => name !== countryName));
    }
  };
  const handleAddButtonClick = async () => {
    try {
      postForm('/stream', {
        countries: selectedCountries,
        streamTitle,
      }).then((res) => {
        setStreams(res?.data?.streams)
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Data submitted successfully!',
        });
        setSelectedCountries([]);
        setStreamTitle('');
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while submitting data.',
      });
      console.error(error);
    }
  };
  useEffect(() => {
    getdata('/countries-stream').then((res) => {
      setCountries(res?.data?.countries)
    })
    getdata('/stream').then((res) => {
      setStreams(res?.data?.streams)
    })
  }, [])  
  function deleteElement(title){
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
      dispatch(showloading())
      postForm('/delete-stream',{title}).then((res)=>{
        if(res.data.success){
          Swal.fire('Deleted!','The Stream has been deleted.','success')
          dispatch(hideLoading())
          setStreams(res.data.streams)
        }else{
          Swal.fire("Failed!", "Something went wrong", "warning")
        }
      })
      }
    })
  }
  return (
    <Layout id={4}>
      <div className='bg-gradient-to-bl from-white to-[#7ec6f9] flex w-full h-screen'>
        <div className='w-[35%] pt-16'>
          {/* <button className='bg-[#ff6a34] px-4 py-1 font-semibold text-white rounded-md float-right flex items-center mt-10 mr-16 hover:bg-orange-700' onClick={() => add("Qualification")}>Add<ion-icon name="add-outline" /></button> */}
          <h1 className='text-5xl font-bold text-center'>Streams</h1>
          <div className='bg-slate-100   text-center mt-10 w-[80%] pt-4 h-[81%] overflow-y-auto custom-scrollbar mx-auto rounded-lg'>
      {streams.map((elem, index) => (
        <div
          key={index}
          className=' flex items-center border-b-2'
          onMouseEnter={() => setHoveredElement(index)}
          onMouseLeave={() => setHoveredElement(null)}
        >
          <span className='w-[6%] ml-2'>{index + 1}</span>
          <h5
            className='hover:bg-slate-100 text-lg font-semibold my-1 w-[74%] ml-5 cursor-pointer'
          >
            {elem.streamTitle}
          </h5>
          <span
            className='w-[15%] text-center cursor-pointer text-red-500 hover:text-2xl'
            onClick={() => deleteElement(elem.streamTitle)}
          >
            <ion-icon name='trash' />
          </span>
          {hoveredElement === index && (
            <div
              className='absolute bg-blue-200 py-5 px-2 rounded-lg w-[15%] right-[40%] top-[30%] transition delay-300 ease-in-out'
            >
              <h5 className='text-xl font-bold'>{elem.streamTitle}</h5>
              {elem.countries.map((country, countryIndex) => (
                <p
                  key={countryIndex}
                  className='bg-opacity-50 text-lg bg-white border-b-2 border-b-gray-300'
                >
                  {country}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
        </div>
        <div className='w-[63%] pt-8 flex flex-col items-center justifycenter'>
          <h1 className='text-4xl font-bold'>Add New Stream</h1>
          <div className='bg-slate-100  py-5 px-4 rounded-xl mt-5 w-full'>
            <h2 className='text-xl font-semibold mb-3'>Select Countries :</h2>
            <div className="grid grid-cols-5 gap-y-2.5 ">
              {countries.map((elem) => (
                <div key={elem.name} className='flex items-center'>
                  <p className='w-[80%]'>{elem.name}</p>
                  <input
                    type='checkbox'
                    id={elem.name}
                    name={elem.name}
                    className='rounded-full border-gray-400 h-4 mr-2 focus:ring-2 focus:ring-blue-500 w-[15%]'
                    value={elem.name}
                    onChange={handleCountryCheckboxChange}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='bg-slate-100 pt-3 pb-5 pl-7 rounded-xl mt-5 w-full'>
            <h4 className='text-xl font-semibold'>Stream Title</h4>
            <input
              type='text'
              className='w-[95%] my-3 py-2 px-4 rounded-lg border-2 border-gray-300 text-xl'
              value={streamTitle}
              onChange={(e) => setStreamTitle(e.target.value)}
            />
          </div>
          <div className='w-full'>
            <button
              className='bg-green-500 px-4 py-2 font-semibold text-white rounded-lg gap-3 float-right flex text-xl items-center mt-10 mr-16 transition delay-300 ease-in-out hover:bg-green-700'
              onClick={handleAddButtonClick}
            >
              Add<ion-icon name='checkmark-done-outline'></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Streams