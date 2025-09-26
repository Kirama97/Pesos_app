import React, { useState } from 'react'
import { LuShare } from 'react-icons/lu';
import FormDepot from './FormDepot';




const Depot = () => {


    const [open , setOpen] = useState(false)


  return (


  <>
   {/* // button envoie */}

      <div className="w-full h-full rounded-md backdrop-blur-md bg-green-500/40">
          <div 
          className="flex flex-col h-full justify-center items-center gap-2"
          onClick={ () => setOpen(true)}
          >
              <button className="group hover:bg-green-700 hover:shadow-sm w-10 h-10 rounded-full bg-bg-primaire flex justify-center items-center">
                  <LuShare className=' group-hover:text-blanc duration-500 group-hover:animate-bounce text-green-500'></LuShare>
              </button>
              <div className="text-bg-primaire  text-sm">
                  Faire un Depot
              </div>
          </div>
      </div>

       {open &&  < FormDepot onClose={ () => setOpen(false) } />}
  </>
   


  )
}

export default Depot
