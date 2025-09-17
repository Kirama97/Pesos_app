import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-neutral-800  h-[40vh] md:h-[20vh]  md:mt-20 flex items-center justify-center py-5 px-[10%]  text-white  text-center'>

       <div className=" bg-neutral-900 w-full h-full rounded-lg flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20 p-5">
        <h3 className='text-lg md:text-2xl font-semibold'>Pesos</h3>
        <p className='text-sm md:text-sm'>© 2024 Pesos. Tous droits réservés.</p>
        <div className="flex flex-col md:flex-row items-center gap-5 text-sm md:text-sm">  
            <a href="#" className='hover:underline'>Politique de confidentialité</a>
            <a href="#" className='hover:underline'>Conditions d'utilisation</a>
            <a href="#" className='hover:underline'>Contactez-nous</a>
        </div>

       </div>
    </div>
  )
}

export default Footer
