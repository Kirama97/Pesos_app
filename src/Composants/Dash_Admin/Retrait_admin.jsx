import React from 'react'
import { FiDownload } from 'react-icons/fi';
import { useState , useEffect } from 'react';
import { FormatColorReset } from '@mui/icons-material';
import FormRetrait_admin from './FormRetrait_admin';



const Retrait_admin = () => {


     const [open , setOpen] = useState(false)
    
  return (
   
    // button retrait

      <>
        <div className="w-full h-full rounded-md backdrop-blur-md bg-indigo-500/40">
                <div   onClick={ () => setOpen(true)} className="flex flex-col h-full justify-center items-center gap-2">
                  
                    <button className="group bg-bg-secondaire hover:bg-indigo-100 hover:shadow-sm w-10 h-10 rounded-full  flex justify-center items-center">
                        <FiDownload className=' group-hover:text-bg-secondaire duration-500 group-hover:animate-bounce text-blanc'/>
                    </button>
                    <div className="text-bg-primaire  text-sm">
                        Retrait d'argent
                    </div>
                </div>
                
            </div>  
            {open &&  < FormRetrait_admin onClose={ () => setOpen(false) } />}
      </>
        
       



   
  )
}

export default Retrait_admin
