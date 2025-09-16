import React from 'react'


const Header = () => {
  return (
    <nav className=" py-3 text-black px-[5%] bg-bg-primaire   flex items-center justify-between ">
        
         
           <img className='h-12 w-30' src="src/assets/icones/pesos_logo.svg" alt="" srcset="" />



        <button className="px-4 text-sm bg-bg-secondaire text-neutral-100 hover:bg-neutral-600 py-2 rounded-md ">Creer un compte</button>
    </nav>
  )
}

export default Header
