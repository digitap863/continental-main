import React from 'react'
import Layout from '../components/Shared/Layout'
import TanStackTable from '../components/Table/TanStackTable'
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react'
import { hideLoading, showloading } from '../redux/features/alertSlice';
import { getdata } from '../axios/apicall';
import { createColumnHelper } from '@tanstack/react-table';
function DigitalOffice() {
  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor("", {
      id: "S.No",
      cell: (info) => <span>{info.row.index + 1}</span>,
      header: "S.No",
    }),
    columnHelper.accessor("name", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Name",
    }),
    columnHelper.accessor("email", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Email",
    }),
    columnHelper.accessor("mobileNumber", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Phone Number",
    }),
    columnHelper.accessor("alternativeNumber", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Alternative Phone",
    }),
    columnHelper.accessor("whatsappNumber", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Whatsapp Number",
    }),
    columnHelper.accessor("city", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "City",
    }),
    columnHelper.accessor("highestQualification", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Qualification",
    }),
    columnHelper.accessor("languageProficiency", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Language Proficiency",
    }),
    columnHelper.accessor("selectedCountry", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Preferred Country",
    }),
    columnHelper.accessor("Stream", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Preferred Stream",
    }),
    columnHelper.accessor("Course", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Preferred Course",
    }),
    columnHelper.accessor("Date", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Convenient Date",
    }),
    columnHelper.accessor("preferredModeOfCounselling", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Preferred Mode",
    }),
    
  ];
  const [interactons, setInteraction] = useState([])
  const dispatch = useDispatch()
  async function fetchInteractions() {
    dispatch(showloading())
    await getdata('/digital-office-data').then((data) => {
      setInteraction(data?.data?.data)
      dispatch(hideLoading())
    })
  }
  useEffect(() => {
    fetchInteractions()
  }, [])

  return (
    <Layout id={3}>
      <div className='bg-gradient-to-bl from-white to-[#7ec6f9] '>
        <TanStackTable data={interactons} columns={columns} fileName={"Digital Office"} show={true}/>
      </div>
    </Layout>
  )
}

export default DigitalOffice