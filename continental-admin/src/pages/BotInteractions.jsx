import React from 'react'
import Layout from '../components/Shared/Layout'
import TanStackTable from '../components/Table/TanStackTable'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getdata } from '../axios/apicall'
import { useState } from 'react'
import { hideLoading, showloading } from '../redux/features/alertSlice';
import { createColumnHelper } from '@tanstack/react-table';

function BotInteractions() {
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
    columnHelper.accessor("phone", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Mobile Number",
    }),
    columnHelper.accessor("course", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Course",
    }),
    columnHelper.accessor("country", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Preferred Country",
    }),
    columnHelper.accessor("date", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Date",
    }),
    columnHelper.accessor("time", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Time",
    }),
  ];
  const [interactons,setInteraction] = useState([])
  const dispatch = useDispatch()
 async function fetchInteractions(){
    dispatch(showloading())
    await getdata('/fetch-bot-interactons').then((data)=>{
      setInteraction(data?.data?.interactions)
      dispatch(hideLoading())
    })
  }
  useEffect(()=>{
    fetchInteractions()
  },[])
  return (
    <Layout id={2}>
     <div className='bg-gray-100'>
     <TanStackTable data={interactons} columns={columns} fileName={"Bot Interactions"}/>
     </div>
    </Layout>
    // <div className="pt-4 min-h-screen bg-gray-900">
    // </div>
  )
}

export default BotInteractions