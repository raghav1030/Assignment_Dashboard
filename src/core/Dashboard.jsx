import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';


const Dashboard = () => {
  return (
    <div className='flex '>
      <div>

      <Sidebar></Sidebar>
      </div>

      <div className='flex flex-col w-full '>

      <Navbar></Navbar>
      <div className='w-full bg-[#FAFAFA]'>

      <Outlet></Outlet>
      </div>
      </div>
    </div>
  )
}

export default Dashboard