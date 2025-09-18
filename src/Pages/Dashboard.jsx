import React from 'react'
import Navbar from '../Composants/Dashboard/Navbar'
import Aside from '../Composants/Dashboard/Aside'
const Dashboard = () => {
  return (
    <>
      <main className='  h-[100vh] flex gap-5 bg-slate-300 p-5'>
       
         <Aside></Aside>
            <div className='w-11/12 h-full flex flex-col gap-5 '>
                <Navbar></Navbar>
                <div className=' bg-white rounded-xl flex-1 '>
                    Contenu du tableau de bord
                </div>
            </div>
        
     
      </main>
      
    </>
  )
}

export default Dashboard
