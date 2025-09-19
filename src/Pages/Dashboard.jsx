import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Composants/Dashboard/Navbar'
import Aside from '../Composants/Dashboard/Aside'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  return (
    <>
      <main className='  h-[100vh] flex gap-5 bg-slate-300 p-5'>
       
            <Aside></Aside>
            <div className='w-11/12 h-full flex flex-col gap-5 '>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <ToastContainer />
            </div>
        
     
      </main>
      
    </>
  )
}

export default Dashboard
