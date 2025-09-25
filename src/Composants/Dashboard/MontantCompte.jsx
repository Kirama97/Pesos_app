import React from 'react'
import { FaMoneyBillWave } from 'react-icons/fa6';

export default function MontantCompte( {compte}) {
  return (
      <div className=" w-2/6 rounded-lg text-center  py-5 backdrop-blur-lg bg-slate-50  shadow-lg  h-full">
         <h2 className='text-neutral-950 tex-xl  mb-5'>Solde disponible</h2>
         <div className="flex items-center justify-center gap-2">
           <FaMoneyBillWave className="text-2xl text-bg-secondaire" />
            <p className=' font-bold text-2xl text-bg-secondaire'>{compte?.solde}  <span className='text-sm'>XOF</span> </p>
         </div>
           
      </div>
  )
}
