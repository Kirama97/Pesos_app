import React from 'react'
import { LuShare } from 'react-icons/lu';


const Envoyer = () => {
  return (
      <div className="w-full h-full rounded-md backdrop-blur-md bg-green-500/40">
          <div className="flex flex-col h-full justify-center items-center gap-2">
              <button className="group hover:bg-green-700 hover:shadow-sm w-10 h-10 rounded-full bg-bg-primaire flex justify-center items-center">
                  <LuShare className=' group-hover:text-blanc duration-500 group-hover:animate-bounce text-green-500'></LuShare>
              </button>
              <div className="text-bg-primaire  text-sm">
                  Envoie d'argent
              </div>
          </div>
      </div>
  )
}

export default Envoyer
