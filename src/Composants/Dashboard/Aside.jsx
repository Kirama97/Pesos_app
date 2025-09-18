import React from 'react'
import pesosLogo from '/src/assets/icones/pesos_logo.svg';


const asideBar = () => {
  return (
    <div className='rounded-xl flex flex-col justify-between w-1/12 h-full bottom-3 bg-bg-primaire py-5 text-white '>

        <img className='h-10 w-15 mx-auto'  src={pesosLogo} alt="" srcset="" />
      

         <div className=""></div>
    </div>
  )
}

export default asideBar
