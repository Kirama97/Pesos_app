import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Composants/Dashboard/Navbar'
import Aside from '../Composants/Dashboard/Aside'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState , useEffect } from 'react';
import { fetchUserProfile } from '../../src/services/api';



const Dashboard = () => {


    const [user , setUser] = useState(null);
    const [loader , setLoading] = useState(true);
    const [erreur , setErreur] = useState("");
  
  
  
       useEffect(() => {
      const getUser = async () => {
        try {
          const data = await fetchUserProfile();
          setUser(data);
        } catch (err) {
          setErreur(err.message);
        } finally {
          setLoading(false);
        }
      };
      getUser();
    }, []);
  
    if(loader) return<div>Chargement...</div>;
    //  if (erreur) return <div className="text-red-500">{erreur}</div>;
  
  

  return (
    <>
      <main className='  h-[100vh] flex gap-5 bg-slate-300 p-5'>
       
            <Aside></Aside>
            <div className='w-11/12  flex flex-col  '>
                <Navbar user={user}></Navbar>
                <div className="  w-full h-full mt-5">
                  <Outlet context={user}></Outlet>
                 
                </div>
                <ToastContainer />
            </div>
        
     
      </main>
      
    </>
  )
}

export default Dashboard
