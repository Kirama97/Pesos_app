import React from 'react'
import pesosLogo from '/src/assets/icones/pesos_logo.svg';
import { NavLink ,Link } from 'react-router-dom';


const Header = () => {
  return (
    <nav className=" py-3 text-black px-[5%] bg-bg-primaire   flex items-center justify-between ">
        
         
           <img className='h-12 w-30' src={pesosLogo} alt="" srcset="" />


       <div className="flex items-center gap-3">
          
        <Link to='/connexion' className="px-4 text-sm border border-1 text-black hover:bg-bg-secondaire hover:text-blanc duration-75  py-2 rounded-md ">Connexion</Link>
        <Link to="/inscription" className="px-4 text-sm bg-bg-secondaire text-neutral-100  hover:bg-indigo-800 py-2 rounded-md ">Creer un compte</Link>

       </div>
    </nav>
  )
}

export default Header
