import React from 'react'
import pesosLogo from '/src/assets/icones/pesos_logo.svg';


const Header = () => {
  return (
    <nav className=" py-3 text-black px-[5%] bg-bg-primaire   flex items-center justify-between ">
        
         
           <img className='h-12 w-30' src={pesosLogo} alt="" srcset="" />



        <button className="px-4 text-sm bg-bg-secondaire text-neutral-100  hover:bg-indigo-800 py-2 rounded-md ">Creer un compte</button>
    </nav>
  )
}

export default Header
